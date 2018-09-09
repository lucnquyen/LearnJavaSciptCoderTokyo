// array.sort(function(a,b) { 
    // something
//});

//  if sort function
//     return  a value < 0
//         a will conme before b
//     return  a value > 0
//         a will conme after b
//     return 0
//         a and b will stay unchanged
var numbers = [1, 2, 3, 4, 2, 2, 4, 2, 4, 9, 1];

var ascendingNunber = numbers.sort(function(a, b) {
    return b-a;
});

// console.log(ascendingNunber);


// excersices
var employees = [
    {name: 'John', age: 18},
    {name: 'Hoang', age: 34},
    {name: 'Linh', age: 23}
];
// console.log(employees);

var  sortedEmployees = employees.sort(function(a, b) {
    // a.employess[1] = b.employees[2]
    return a.age - b.age; // >0
});

// console.log(sortedEmployees);


// 1. Define an array of products (name, price, stock)
// 2. Sort by price from more expensive to less expensive
var products = [
    {name: 'Son', price: 20, stock: 56},
    {name: 'Hao', price: 90, stock: 26},
    {name: 'Jas', price: 30, stock: 53},
    {name: 'Jasd', price: 60, stock: 32}
];

var productEmployess = products.sort(function(a, b) {
    return a.price - b.price;
});
console.log(productEmployess);