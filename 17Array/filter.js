// filter javascipt

var numbers = [1, 2, 3, 4];

var evenNumbesr = numbers.filter(function(item) {
    return item % 2 === 0;
});

console.log(evenNumbesr);

// so am
var soam = [1, 2, 4, 6, -7, -2, 4, -5, 9];
var loaiSoAm = soam.filter(function(item) {
    return item >= 0;
});
console.log(loaiSoAm);