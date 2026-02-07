db.createCollection("vendors",
    {
        validator:{
            $jsonSchema:{
            bsonType:"object",
            required:["name","age"],
            properties:{
                name:{bsonType:"string"},
                age:{bsonType:["int"], minimum:18}
            }
        }
    }
}
);

db.vendors.insertOne({
    name:"John",
    age:20
})

db.vendors.insertOne({
    age:21
})
//give null to age
db.vendors.insertOne({
    name:"454535",
    age: null,
})