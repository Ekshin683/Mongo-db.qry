db.employees.aggregate(
    [
        {$project:{
            _id:0,
            name:1,
            salary:1,
            grade:{
                $cond:[
                    {$gt:["$salary",4000]}, //condition
                    "Grade A",
                    "Grade B"
                ]
            }
        }}
    ]
)

db.employees.aggregate(
    [
        {$project:{
            _id:0,
            name:1,
            salary:1,
            grade:{
                $cond:{
                    if:{$gt:["$salary",4000]}, //if : condition
                    then:"Grade A",
                    else:"Grade B"
                }
            }
        }}
    ]
)

db.employees.aggregate([
    {$project:{
        _id:0,
        name:1,
        salary:1,
        grade:{
            $switch:{
                branches:[
                    {
                        case:{$gt:["$salary",7000]},
                        then:"Grade A"
                    },
                    {
                        case:{$gt:["$salary",4000]},
                        then:"Grade B"
                    }
                ],
                default:"Grade C"
        }
    }
    }}
])

