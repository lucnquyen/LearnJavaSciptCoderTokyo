/// requirement
// A student managerment app that is able to:
// - show current list
// - add new student

// 1.  Show all student 
// 2. Create a new student 
// 3. Save and exit 
// > 2: 
// name : 
// age : 

// khai báo thư viện lưu file + câu hỏi
var readlineSync = require('readline-sync');
var fs = require('fs');

var students = [];

function loadData() {
    var fileContent = fs.readFileSync('./data.json');
    students = JSON.parse(fileContent);
}

function showMenu() {
    console.log('1. Show all student');
    console.log('2. Create a new student');
    console.log('3. Save and exit');

    var option = readlineSync.question('> ');
    switch (option) {
        case '1':
            showStudent();
            showMenu();
            break;
        case '2':
            showCreateStudent();
            showMenu();
            break;
        case '3':
            saveAndExit();
            break;
        default:
            console.log('Wrong option!!!');
            break;
    }
}
function showStudent() {
    for(var student of students) {
        console.log(student.name, student.age);
    }
}

function showCreateStudent() {
    var name = readlineSync.question('Name: ');
    var age = readlineSync.question('Age: ');
    var student = {
        name: name,
        age: parseInt(age)
    };
    students.push(student);
}

function saveAndExit() {
    var content = JSON.stringify(students);
    // console.log(content);
    fs.writeFileSync('./data.json', content, {encoding: 'utf8'});
}

function main() {
    loadData();
    showMenu();
}

main();
