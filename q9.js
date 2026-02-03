db.employees.find(
    {location: "FL"}
)

db.employees.updateOne(
    {email:"mike@gmail.com"},
    {$push:{location: "AZ"}} //push -> add new value to array
)

db.employees.updateOne(
    {email:"mike@gmail.com"},
    {$pop:{location: 1}} //pop -> remove last value from array
)

//create a new field skills and python as array

db.employees.updateMany(
    {},
    {$push:{skills:"python"}} //adding new element if not these
)
db.employees.updateMany(
    {},
    {$push:{skills:"Java"}}
)

db.employees.updateOne(
    {email:"cathy@gmail.com"},
    {$push:{skills:".NET"}}
)
db.employees.updateOne(
    {email:"cathy@gmail.com"},
    {$push:{skills:"python"}}
)
db.employees.updateOne(
    {email:"cathy@gmail.com"},
    {$addToSet:{skills:"Java"}} //addToSet -> to avoid duplicate values in array
)

db.employees.updateOne(
    {email:"cathy@gmail.com"},
    {$pull:{skills:"Java"}} //pull -> to remove specific value from array
)