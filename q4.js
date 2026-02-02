db.employees.find(
    { department: "IT",salary: 3000},
    {_id:0, name: 1,salary:1}
)