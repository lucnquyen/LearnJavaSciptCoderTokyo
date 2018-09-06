/*
    Arithmetic Operator
    1. ++ --
    2. * / %
    3. + -
*/

console.log(5*4);
console.log(9/2);
console.log(20%3);

// var a = 15;
// a++;
// console.log(a);
// a--;
// console.log(a);

var a = 5;
console.log(a++ + ++a - --a + a--);
// ++a : trả về gái trị sau khi tăng
// --a : trả về gái trị sau khi thay đổi
// a++ + ++a - --a + a--
// 5 + ++a - --a + a--; // 6
// 5 + 7 - --a + a--; // 7
// 5 + 7 - 6 + a--; // 6
// 5 + 7 - 6 + 6; // 5

// var b = 5;
// var c = 10;
// console.log(b++ * c-- + --b * ++c); // 100
// // 5 * 10 + 5 * 10 = 100

var q = 2;
var k =3;
console.log(q++ - --q + k++ + --k); // 6
// 2 - 2 + 3 + 3 = 6

