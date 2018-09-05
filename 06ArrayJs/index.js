// Term: array, element, index, length

var dog1 = {
    type: 'chó ta'
};
var dog2 = {
    type: 'lạp xưởng'
};
var dog3 = {
    name: 'Đần',
    type: 'husky'
};
var bunchOfDogs = [dog1, dog2, dog3];
console.log(bunchOfDogs);
console.log(bunchOfDogs[2].name);

var dog4 = {
    type: 'shiba'
};
bunchOfDogs[0] = dog4;
console.log(bunchOfDogs);

// list các danh sách
// điện thoại = contact
var contacts = [
    {name: 'Hoàng', phone: '8888'},
    {name: 'Luận', phone: '1234'},
];

// summmary : array object
var classDev = [
    {name: 'Hoàng', gender: 'male', province: 'Bình Dương'},
    {name: 'Luận', gender: 'male', province: 'Cà Mau'},
    {name: 'Linh', gender: 'female', province: 'Tây Ninh'}
];
console.log(classDev);
