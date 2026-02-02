// db.employees.find({ department: "HR" })
// db.employees.find({ department: {$eq: "HR"} }) // $eq for equal to
db.employees.find({ salary: {$eq: 3000} })