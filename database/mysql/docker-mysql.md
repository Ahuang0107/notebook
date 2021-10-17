# use mysql with docker

## run a mysql container with docker

```shell
docker run -itd --name resource-database -p 3306:3306 --restart=on-failure:3 `
--mount  type=bind,src=${pwd}/mounted-volume/conf/my.cnf,dst=/etc/mysql/my.cnf `
--mount  type=bind,src=${pwd}/mounted-volume/mysql-files,dst=/var/lib/mysql-files `
--mount  type=bind,src=${pwd}/mounted-volume/data,dst=/var/lib/mysql `
-e MYSQL_ROOT_PASSWORD=123456 mysql
```

> `${pwd}` present the current catalog in powershell commend

> my.cnf needs to be read only file

> somehow, when I want to mount my.cnf file, it must mount `/var/lib/mysql-files` too,
> or the container will have some issue such as I can't access from host machine. I haven't figured out why.

## use mysql dump

1. first, you need to check the mysql conf with commend `SHOW VARIABLES LIKE "secure_file_priv";`, if it is NULL, then
   you can't out any data to file. you need to set it to a catalog path or blank.
2. mysql dump can output `.sql`/`.sql&.txt`/`.db` files:
   ```shell
   mysqldump -u root -p 123456 --lock-tables uls code_bu > /var/lib/mysql-files/uls/code_bu.sql
    ```
3. you also can run this commend out of container:
   ```shell
   docker exec resource-database sh -c 'exec mysqldump -u root -p123456 --lock-tables uls code_bu > /var/lib/mysql-files/uls/code_bu.sql'
   ```
