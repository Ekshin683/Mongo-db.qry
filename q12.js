db.employees.aggregate(
    [
        {$match:{department:"HR"}},
        {$project:{_id:0,name:1,email:1}},
        {$sort:{name:1}},
        {$limit:1},
        {$skip:1}
    ]
)


db.employees.aggregate(
    [
        {$group:{_id:"$department",total:{$sum:"$salary"}}} //group by department and sum of salary
    ]
)