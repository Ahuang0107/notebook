# Some Issue During Kotlin Development

1. when you use `@Transactional` in you service and use JPA to insert some data, it sees like you can not access this
   data with mybatis or other database framework.
   1. because the save action actually did not store data to database, it waits all your action in `@Tranctional` 
      done, and then store all the data change. unless you access the data by JPA function in the middle.
