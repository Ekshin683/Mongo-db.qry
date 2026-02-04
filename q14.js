// 04-02-2026

db.employees.find({},{name:1,department:1})

db.employees.find({},{name:1,dept:"$department"})

db.users.insertOne(
    {
        name:"Ajay",
        age:20,
        address:{
            address1:"50 flat street",
            city:"Hyderabad",
            state:"Telangana",
        }
    }
)
db.users.insertMany([
    {
        name:"EKshindeep",
        age:21,
        address:{
            address1:"Rompichera",
            city:"Tirupati",
            state:"Andhra Pradesh"
        }
    },
    {
        name:"Ravi",
        age:20,
        address:{
            address1:"MG road",
            city:"Vizag",
            state:"Andhra Pradesh"
        }
    },
    {
        name:"Suresh",
        age:22,
        address:{
            address1:"BTM Layout",
            city:"Bangalore",
            state:"Karnataka"
        }
    }
])

db.users.find(
    {},
    {name:1,age:1,"address.city":1}
)
db.users.aggregate(
    [
        {$project:{
            _id:0,
            name:1,
            city:"$address.city",
            state:"$address.state"
        }}
    ]
)

//add skilld array eah users
// populate java,pyhton

db.users.updateMany(
    {},
    {$set:{skills:["Java","Python"]}}
)
// skilld: [ 'Java', 'Python' ],
    //skill: [ [ 'Java', 'Python' ] ],
    //skills: [ 'Java', 'Python' ]
 
db.users.updateMany(
    {},
    {$unset:{skilld:"",skill:""}} //unset is used to remove fields
)

db.users.updateMany(
    {name:"Ravi"},
    {$push:{skills:".Net"}}
)

db.users.aggregate(
    [
        {$project:{
            _id:0,
            name:1,
            skills:1
        }},
        {$unwind:"$skills"} //unwind is used to display each array elementin a separate document
    ]
)