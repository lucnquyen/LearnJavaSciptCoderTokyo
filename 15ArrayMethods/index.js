// Các methods của Array
// - a.concat(b)
// - a.push(b)
// - a.pop
// - a.shift()
// - a.unshift()
// - TỰ đọc trên mozilla developer network
// - goodle keys:
//     a.slice
//     a.splice

var a = [1 , 3 , 5];
var b = [2, 4, 6];

var c = b.concat(a);
console.log(' b concat a ',c);

var d = c.push(b); // length trả về và thay đổi
console.log('c push b : length', d);

console.log('xoa phan tu cuoi mang pop', c.pop());
console.log('xoa phan tu dau tien mang pop, don pt sau xuong 1 bac', c.shift());
console.log('them phan tu dau tien mang pop, tang pt sau xuong 1 bac', c.unshift(6));

console.log('-----------');
console.log(a, b, c, d);