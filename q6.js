// db.employees.find({ department: "IT" })
db.employees.find({ department: "HR",salary:{$gt: 3000} })