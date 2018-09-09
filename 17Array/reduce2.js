// arr.reduce(function(item1, item2) {
//      // caculation
//      return x;
// });
// cung cấp tham số thứ 2 vào reduce nó sẽ đấy vào vòng lặp đầu tiên

var numbers = [1, 2, 3, 4];

var sum = numbers.reduce(function(a, b) {
    console.log(a, b);
    return a + b;
}, 0);
console.log(sum);

// array part 2
var products = [
    {name: 'A', quanlity: 2, unitPrice: 10 },
    {name: 'B', quanlity: 3, unitPrice: 20 },
    {name: 'C', quanlity: 4, unitPrice: 30 }
];
// total = ? 150 (Number)
var total = products.reduce(function(currentToTal, product) {
    return currentToTal + product.quanlity * product.unitPrice;
}, 0);
console.log(total)

// loop 1: cur = 0, pro = pro[0];
// 0 + 2 * 10 = 20
// loop2: currentTotal = 20 , products = products[1]
// 20 + 3*20 = 80
// kq = 200 