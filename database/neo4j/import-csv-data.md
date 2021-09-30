# import csv data

## 1. prepare csv data file

example:

- node-file-header: `id:ID(Project-ID),name,engage_id:long`
- relationship-file-header: `id:END_ID(Hours-ID),member_id:START_ID(Member-ID),project_id:IGNORE`

## 2. import csv data into a new database

```shell
neo4j-admin import --database=resource \
--skip-bad-relationships \
--multiline-fields \
--nodes=Project=node-file.csv \
--relationships=BOOKED_HOURS=relationship-file.csv
```

## 3. change the default database and restart the neo4j

```shell
dbms.default_database=resource
```

### link

https://neo4j.com/developer/guide-import-csv/
