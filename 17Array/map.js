// array.map
var numbers = [1, 2, 3, 4, 6];
var squareNumbers = numbers.map(function(x) {
    return x*x;
}); 

console.log(squareNumbers);

// array : rectangle
// dùng map method để biến đổi rectangle thành 1 array mới 
// gồm có diện tích của các hình trên
var rectangles = [
    {width: 10, height:  5},
    {width: 10, height:  70},
    {width: 20, height:  50}
];

var dienTichRectangle = rectangles.map(function(dientich) {
    return dientich.width*dientich.height;
});
console.log(dienTichRectangle);