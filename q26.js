//user Management
//use admin
db.createUser({
    user:"admin",
    pwd:"admin",
    roles:[{
        role:"root",
        db:"admin"
    }]
})

//mongosh --username admin -authenticationDatabase admin

db.createUser({
    user:"user2",
    pwd:"user2",
    roles:[{
        role:"read",
        db:"lpu26a"

    }]
})


//mongodb://admin:admin@localhost:27017/lpu26a?authSource=admin //compass
//connnection string
//mongosh "mongodb://admin:admin@localhost:27017/lpu26a?authSource=admin" //cmd