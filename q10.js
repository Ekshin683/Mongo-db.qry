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

