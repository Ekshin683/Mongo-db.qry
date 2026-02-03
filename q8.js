db.employees.find({$in :["HR","IT"]})

db.employees.updateOne(
    {email: "brian@gmail.com"},{$set:{email:"brian1@gmail.com"}}
)
db.employees.find({departement:{$nin: ["HR","IT"]}}) //not in HR and IT

//use lpu26b
db.createCollection("students") //create collections
db.students.renameCollection("mystudents") //to rename collection

db.mystudents.drop() //to delete collection
db.dropDatabase("lpu26a") //if we haven't pass any aruguments it will delete current database