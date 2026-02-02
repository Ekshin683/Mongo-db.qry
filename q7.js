db.employees.updateOne({},{})
db.employees.updateOne(
    {
        email:"cathy@gmail.com"
    },
    {
        $set:{salary: 3500} // $ -> for operator
    }
)
db.employees.updateOne(
    {
        email:"cathy@gmail.com"
    },
    {
        $inc:{salary: 3500} //inc -> increase to existing value
    }
)
db.employees.updateMany(
    {
        
    },
    {
        $inc:{salary: 1000} //update salary for everyone
    }
)
//increase multiply at same time
db.employees.updateMany({email:{$eq: ["cathy@gmail.com","mike@gmail.com"]}},{$inc:{salary: 1000}})

db.employees.updateMany(
    {
        
    },
    {
        $set:{points:1} //update points to every one
    }
)
db.employees.updateOne(
    {email:"brian@gmail.com"},
    {$set:{points:10}} //update points to specific user
)
//if document not found it will not update
db.employees.updateOne(
    {email:"abc@gmail.com"},
    {$set:{points:10}},
    {upsert:true} //if document not found it will insert new document
)

db.employees.deleteOne(
    {email:"abc@gmail.com"} //delete specific document
)

db.employees.find({name:{$exists:true}}) //find document where name field exists
db.employees.find({name:{$exists:false}}) //find document where name field not exists