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

```cypher
LOAD CSV FROM "file:///person.csv"

LOAD CSV WITH HEADERS FROM 'file:///person.csv' AS line FIELDTERMINATOR ',' MERGE (:Person { id:line.id ,name: line.name, age: toInteger(line.age)})

LOAD CSV WITH HEADERS FROM 'file:///resource_p_project.csv' AS line FIELDTERMINATOR ','  
MERGE (:Project { id:line.id ,name: line.name, Age: toInteger(line.Age)})
```

### 相关链接

https://neo4j.com/developer/guide-import-csv/
