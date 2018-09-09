// prototype
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

    // this.sleep = function() {
    //     console.log("Sleep ....");
    // };
}

// share by object
Mouse.prototype.sleep = function() {
    console.log("Sleep ....");
};

var jerry = new Mouse('orange', 20);
jerry.sleep();

var tom = new Mouse('orange', 20);
jerry.sleep();