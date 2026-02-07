db.createView("orderview","employees",[
    {$lookup:{
        from:"orders",
        localField:"_id",
        foreignField:"empid",
        as:"orderdetails"
    }},
    {$unwind:"$orderdetails"},
    {$project:{
        _id:0,
        name:1,
        email:1,
        department:1,
        product:"$orderdetails.products",
        price:"$orderdetails.price"
    }},
])


