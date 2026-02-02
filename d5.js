// db.employees.find({ department: "HR" })
// db.employees.find({ department: {$eq: "HR"} }) // $eq for equal to
// db.employees.find({ salary: {$eq: 3000} })
db.employees.find({ salary: {$gt: 3000} }) // greater than
db.employees.find({ salary: {$gte: 3000} }) // greater than or equal to
db.employees.find({ salary: {$ne: 3000} }) // not equal to
db.employees.find({ salary: {$lte: 3000} }) // less than or equal to