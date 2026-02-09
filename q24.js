//login into replica set
//created hdfcbank database abd inserted EKshindee and Ajay into customers collection

const session = db.getMongo().startSession()

session.startTransaction()

var custCollection = session.getDatabase("hdfcbank").customers


//how to do nested lookup in pipeline
db.courses.aggregate([
    {$lookup:{
        from:"modules",
        let:{cid:"$_id"},
        pipeline:[
            {$match:{
                $expr:{
                    $eq:["$courseId","$$cid"]
                }
            }},
            {$lookup:{
                from:"lessons",
                let:{mid:"$_id"},
                pipeline:[
                    {$match:{
                        $expr:{
                            $eq:["$moduleId","$$mid"]
                        }
                    }}
                ],
                as:"lessons",
            }}
        ],
        as:"modules",
    }}
])