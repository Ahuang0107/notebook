# Some Issue During Kotlin Development

1. when you use `@Transactional` in you service and use JPA to insert some data, it sees like you can not access this
   data with mybatis or other database framework.
    1. because the save action actually did not store data to database, it waits all your action in `@Tranctional`
       done, and then store all the data change. unless you access the data by JPA function in the middle.

2. 多线程时，新开线程的中添加的spring的`@Transactional`注解是无法影响主线程的事务的，目前采取的方法是使用`DataSourceTransactionManager`来手动管理。

3. 多线程读写数据时，容易出现数据脏读脏写的情况，需要注意。
