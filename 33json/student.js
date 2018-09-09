// excercise
// 1. Show all student
// 2. create a new student
// 3. save and exit\

var readlineSync = require('readline-sync');
var fs = require('fs');

function showMenu() {
    console.log('1. Show all student');
    console.log('2. Create a new student');
    console.log('3. Save & exit');
}

function main() {
    showMenu();
}
main();

// function Students(name, id, age) {
//     this.name = name;
//     this.id = id;
//     this.age = age;
// }

// function insertStudent() {
//    this.name = readlineSync.question('Student name: ');
//     this.id = readlineSync.question('Student id: ');
//     this.age = readlineSync.question('Student age: ');   
//     this.student = new Students(this.name, this.id, this.age);
//     list.push(this.student);
//     fs.writeFileSync('data.json', list);
// }

// function loadStudent() {
//     var readStudent = fs.readlineSync('data.json', list);
//     var parseStudent = JSON.stringify(list);
//     return b;
// }

// var list = loadStudent();
// insertStudent();
// console.log(list);
