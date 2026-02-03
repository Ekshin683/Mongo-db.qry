db.employees.aggregate(
    [
        {$match:{department:"HR"}},
        {$project:{_id:0,name:1,email:1}},
        {$sort:{name:1}},
        {$limit:1},
        {$skip:1}
    ]
);


db.employees.aggregate(
    [
        {$group:{_id:"$department",total:{$sum:"$salary"}}}, 
    ]
);

db.employees.aggregate(
    [
        {$group:{_id:"$department",total:{$sum:"$salary"},Highest:{$max:"$salary"},Lowest:{$min:"$salary"}, Average:{$avg:"$salary"}}}, 
        {$sort:{total:-1}} ,
        {$limit:2}
    ]
);

db.employees.aggregate(
    [
        {$project:{
            _id:0,
            name:1,
            salary:1,
            annualSal:{$multiply:["$salary",12]}
        }}
    ]
);