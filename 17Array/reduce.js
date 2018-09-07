// giam nhieu phan tu con 1 gia tri cuoi cung
//reduce(x,y) => a

var numbers = [1, 2, 3, 4];
var num = numbers.reduce(function(a, b) {
    console.log(a, b);
    return a+b;
});

console.log(num);