db.employees.findOne(
    {email:"brian1@gmail.com"} //find on doc
)

db.employees.find(
    {email:"brian1@gmail.com"} 
).explain("executionStats") //execution examined

db.employees.createIndex({email:1}) //index created of email

db.employees.find(
    {email:"brian1@gmail.com"}
).explain("executionStats") //after index created execution examined

db.employees.getIndexes() //to see all indexes in collection

db.employees.dropIndex("email_1") //to delete index
db.employees.find({}, {_id:0, name:1})

db.employees.find({}, {_id:0, name:1}).sort({name:1}) //sort by name ascending

db.employees.find({},{_id:0,name:1}).collation({locale:'en',strength:2}).sort({name:1}) //case insensitive sort

