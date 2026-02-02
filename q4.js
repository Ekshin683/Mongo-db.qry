// db.employees.find(
//     { department: "IT",salary: 3000},
//     {_id:0, name: 1,salary:1}
// )

// db.employees.find().limit(3)

// db.employees.find().skip(1)
db.employees.find().limit(3).skip(1)