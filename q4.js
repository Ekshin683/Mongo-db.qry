// db.employees.find(
//     { department: "IT",salary: 3000},
//     {_id:0, name: 1,salary:1}
// )

db.employees.find().limit(3)