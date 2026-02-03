db.employees.find({$in :["HR","IT"]})

db.employees.updateOne(
    {email: "brian@gmail.com"},{$set:{email:"brian1@gmail.com"}}
)