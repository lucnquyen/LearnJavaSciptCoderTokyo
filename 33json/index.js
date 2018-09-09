// JSON Object
// 1. stringly - convert an object to a JSON string
// 2. parse - convert a JSON string to an object

var myDog = {name: 'Lulu', age: 1, dead: false};
var myDogString =JSON.stringify(myDog);
console.log(myDogString);
console.log('myDog: ', typeof myDog);
console.log(typeof myDogString);

var myCatString = '{"name": "Tom", "age":2, "dead": true}';
var myCat = JSON.parse(myCatString);
console.log(myCat);
console.log(typeof myCat);

