// db.employees.find({ department: "IT" })
db.employees.find({ department: "HR",salary:{$gt: 3000} })
db.employees.find({$and:[{department:"HR"},{salary:{$gt:3000}}]}) //and=array and both condition
db.employees.find({$or:[{department:"HR"},{salary:{$gt:3000}}]}) //or it should either one
db.employees.find({$or:[{department:"HR"},{salary:{$gt:3000}}]},{name:1,email:1,department:1})