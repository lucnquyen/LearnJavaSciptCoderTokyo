// new keywork
// var today = new Date();
// console.log(today);

// create a new object literal
var mouse = {
    weight: 0.2,
    getWeight: function() {
        return this.weight;
    }
};

console.log();

// constructor function
function Mouse(color, weight) {
    this.type = 'mouse';
    this.color = color;
    this.weight = weight;
}

var mouse1 = new Mouse('white', 0.4);
var mouse2 = new Mouse('black', 3.2);

console.log(mouse1);
console.log(mouse2);