# 基本常用的Cypher语法

## 创建

```cypher
create (p:Project{id:1,name:"AUD2019-12 Mapei GZ"}) return p
match (p:Project) create (p)-[:Member]->(:Member{id:1,name:"Alice CE Liang"})
match (p:Project) create (p)-[:Member]->(:Member{id:2,name:"Vicky Kang"})
match (p:Project) create (p)-[:Member]->(:Member{id:3,name:"Wendy WW Tang"})
match (m:Member{id:1}) create (m)-[:Hours]->(:Hours{hours:40,type:"RT",date:"2021-07-17"}) create (m)-[:Hours]->(:Hours{hours:8,type:"OT",date:"2021-07-17"})
match (m:Member{id:2}) create (m)-[:Hours]->(:Hours{hours:40,type:"RT",date:"2021-07-17"}) create (m)-[:Hours]->(:Hours{hours:8,type:"OT",date:"2021-07-17"})
match (m:Member{id:3}) create (m)-[:Hours]->(:Hours{hours:40,type:"RT",date:"2021-07-17"}) create (m)-[:Hours]->(:Hours{hours:8,type:"OT",date:"2021-07-17"})
```

## 导入CSV

1.create the csv files

- nodes file like
  ```csv
  projectId:ID(Project), name, status, :LABEL
  164,MN Skynetworks FY2020 AUDIT,NORMAL,Project
  777,AUD2019-12 Baosteel Res. Intl.,DISABLED,Project
  1841,AUD2020-12 Dongguan Meidong,DELETED,Project
  2455,AUD2019-12 MZJH Group,NORMAL,Project
  3435,IPO2020-08 Project Cloudsea,NORMAL,Project
  4471,AUD2020-12 Porsche China GR,NORMAL,Project
  ```
- relationships file like
  ```csv
  :START_ID(Project),:END_ID(Member)
  164,1
  164,2
  164,3
  777,4
  777,5
  ```

2.execute import bash

```bash
../bin/neo4j-admin import --database resource --nodes=Project=project.csv --nodes=Member=member.csv --nodes=Hours=hours.csv --relationships=BOOK_MEMBER=project_have_member.csv --relationships=BOOK_HOURS=member_booked_hours.csv --trim-strings=true
```
you need to import csv into a new database.

### 相关链接

https://neo4j.com/developer/guide-import-csv/
