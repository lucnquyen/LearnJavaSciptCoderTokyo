/*
    for (init, condition, final-expresion ) {
        // statement
     }
*/

// for(var i = 0; i < 10; i++) {
//     console.log(i);
// }

// for(var i=9; i>=0; i--) {
//     console.log(i);
// }

var employees = [
    {name: 'Thinh', age: 18},
    {name: 'Hiroshi', age: 26},
    {name: 'maria', age: 32}
];

// hiển thị nhân viên line in lineS
// for(i=0; i<3; i++) {
//     console.log(employees[i].name, employees[i].age);
// }

// For in
for(var employee of employees) {
    console.log(employee.name, employee.age);
}
for(var em in employees) {
    console.log(em, employees[em]);
}