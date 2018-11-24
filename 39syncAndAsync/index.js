//
var fs = require('fs');

console.log('Start');
var song1 = fs.readFileSync('song1.txt', {encoding: 'utf8'});
console.log(song1);
var song2 = fs.readFileSync('song2.txt', {encoding: 'utf8'});
console.log(song2);
console.log('End');


// make coffee -> 5 minute
// wear clother
// making bed
// |------------------|---------------|------------------|--------------done->
// Make coffee        Coffee done     wear clother       wear done


// Async : không biết khi nào kết thúc
console.log('Start');
fs.readFile('song1.txt', {encoding: 'utf8'}, function(err, song1) {
    console.log(song1);
});
console.log('End');
/// read/write to FS
// Network