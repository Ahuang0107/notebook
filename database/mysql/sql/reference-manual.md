# sql reference manual

## join & where

when you use `join on` and `where`, database first generate a temporary table with `join on` condition, when filter data
with `where` condition.

## use index

I found out that sometime index did not work because it's `character set` and `collate` did not match. for example:

```sql
select pe.project_id, sum(real_ner) as last_ner, sum(real_ser) as last_ser, sum(real_hours) as last_hours
from p_engage pe
         left join e_engage e on pe.code = e.code
         left join p_real pr on e.recurring_code = pr.engage_code
group by pe.project_id;
```

you need to make sure that `pe.code` and `e.code` are same collate, `e.recurring_code` and `pr.engage_code` are same
collate.
