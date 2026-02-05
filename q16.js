db.orders.insertOne(
    {
        empid:ObjectId('69803a806b41cc6fa8628ca0'),
        products:"Laptop",
        price:55000,
        quantity:1
    }
)

db.orders.insertMany([
    {
        empid:ObjectId('69803a806b41cc6fa8628ca0'),
        products:"Mouse",
        price:100,
        quantity:1
    },
    {
        empid:ObjectId('69803a806b41cc6fa8628ca2'),
        products:"KeyBoard",
        price:2000,
        quantity:1
    },
    {
        empid:ObjectId('69803a806b41cc6fa8628ca3'),
        products:"Monitor",
        price:15000,
        quantity:1
    }
])


db.orders.aggregate([
    {$project:{
        _id:0,
        products:1,
        price:1
    }}
])

//joins
db.orders.aggregate([
    {$lookup:{
        from:"employees",
        localField:"empid",
        foreignField:"_id",
        as:"users"
    }}
])
//connect from employees to orders
db.employees.aggregate([
    {$lookup:{ //lookup: stage to perform left outer join
        from:"orders",
        localField:"_id",
        foreignField:"empid",
        as:"orderdetails"
    }}
])
//type 1: without pipeline+
db.employees.aggregate([
    {$lookup:{
        from:"orders",
        localField:"_id",
        foreignField:"empid",
        as:"orderdetails"
    }},
    {$unwind:"$orderdetails"},  
    {$project:{
        _id:1,
        name:1,
        products:"$orderdetails.products",
        price:"$orderdetails.price"
    }}
])
//type2: with pipeline
db.employees.aggregate([
    {$lookup:{
        from:"orders",
        let:{uid:"$_id"},
        pipeline:[{
            $match:{
                $expr:{
                    $eq:["$empid","$$uid"]
                }
            }
        }
        ],
        as:"orderdetails"
    }},
    {$unwind:"$orderdetails"},
    {$project:{
        name:1,
        products:"$orderdetails.products",
        price:"$orderdetails.price"
    }}
])

db.employees.aggregate([
    {$lookup:{
        from:"orders",
        let:{uid:"$_id"},
        pipeline:[{
            $match:{
                $expr:{
                    $eq:["$empid","$$uid"]
                }
            }
        },
        {$project:{
        _id:0,
        empid:1,
        products:1,
        price:1,
    }}
        ],
        as:"orderdetails"
    }},
])


//practice joins

db.details.insertMany([
    {
        empid: ObjectId('69803a806b41cc6fa8628ca0'),
        address:{
            city:"Tirupati",
            state:"Andhra Pradesh"
        }
    },
    {
        empid:  ObjectId('69803a806b41cc6fa8628ca0'),
        address:{
            city:"Hyderabad",
            state:"Telangana"
        }
    },
    {
        empid: ObjectId('69803a806b41cc6fa8628ca2'),
        address:{
            city:"Bangalore",
            state:"Karnataka"
        }
    },
    {
        empid: ObjectId('69803a806b41cc6fa8628ca3'),
        address:{
            city:"Chennai",
            state:"Tamil Nadu"
        }
    }
])
db.employees.aggregate([
    {$lookup:{
        from:"orders",
        localField:"_id",
        foreignField:"empid",
        as:"orderdetails"  
    }},
    {$lookup:{
        from:"details",
        localField:"_id",
        foreignField:"empid",
        as:"addressdetails"
    }
}
])

//left outer join example
db.employees.aggregate([
    {$lookup:{
        from:"orders",
        localField:"_id",
        foreignField:"empid",

        as:"orderdetails"
    }},
    {$lookup:{
        from:"details",
        localField:"_id",

        foreignField:"empid",
        as:"addressdetails"
    }},
    {$match:{
        orderdetails:{$size:0}
    }}
])
//explanation of left outer join: