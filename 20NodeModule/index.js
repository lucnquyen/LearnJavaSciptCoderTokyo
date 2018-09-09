var Mouse = require('./mouse');
var Cat = require('./cat');

var mickey = new Mouse('black');
var jerry = new Mouse('white');

console.log(mickey);
console.log(jerry);

var tom = new Cat();
tom.eat(mickey);
tom.eat(jerry);
console.log(tom);