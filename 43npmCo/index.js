
// npm co

var fs = require('fs');
var co = require('co');

function readFilePromise(path) {
    return new Promise(function(resolve, reject) {
        fs.readFile(path, {encoding: 'utf8'}, function(err, data) {
            if(err) {
                feject(err);
            } else {
                resolve(data);
            }
        });
    });
}

// co(function*() {
//     // var song1 = yield readFilePromise('./song1.txt');
//     // var song2 = yield readFilePromise('./song2.txt');
//     // var song3 = yield readFilePromise('./song3.txt');
//     var values = yield [
//         readFilePromise('./song1.txt'),
//         readFilePromise('./song2.txt'),
//         readFilePromise('./song3.txt')
//     ];
//     return values;
// }).then(function(values) {
//     console.log(values);
// }).catch(function(error) {
//     console.log(error);
// });

var readFile = co.wrap(function*(files) {
    // string -> promise
    var values = yield files.map(function(file) {
        return readFilePromise(file);
    });
    return values;
});

readFile(['song1.txt', 'song2.txt', 'song3.txt'])
    .then(function(values) {
        console.log(values);
    });



// Kq: [ 'song1', 'song2', 'song3' ]