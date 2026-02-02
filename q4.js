// db.employees.find(
//     { department: "IT",salary: 3000},
//     {_id:0, name: 1,salary:1}
// )

// db.employees.find().limit(3)

// db.employees.find().skip(1)
// db.employees.find().limit(3).skip(1)
// db.employees.find().sort()
// db.employees.find().sort({name:1}) //ascending order
// db.employees.find().sort({name:-1}) //descending order
// db.employees.find().limit(3).skip(1).sort({name:-1})
db.employees.find().count() // total documents