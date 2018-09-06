// function as paramster


// function sum(a,b) {
//     return a + b;
// }
//  var c = sum(2,3);
//  console.log(c);

var coffeeMachine = {
    makeCoffee: function(onFinish) {
        console.log('Making coffee ...');
        onFinish();
    }
};


var beep = function() {
    console.log('Bíp Bíp, drinking now');
};

//1 
coffeeMachine.makeCoffee(beep); // name convention

// 2
coffeeMachine.makeCoffee(function() {
    console.log('Típ Típ, code now');
})