// npm - node module manager
var readlineSync = require('readline-sync');

// Wait for user's response.
// var userName = readlineSync.question('May I have your name? ');
// console.log('Hi ' + userName + '!');


// var languages = [];
// var language = readlineSync.question('What is your nativ language?');
// languages.push(language);

// console.log(languages);


var pet = {};

var name = readlineSync.question('Your pet name: ');
var gender = readlineSync.question('Gender of your pet is ');
var weight = readlineSync.question('It weight: ');

pet.name = name;
pet.gender = gender;
pet.weight = weight;
console.log(pet);
