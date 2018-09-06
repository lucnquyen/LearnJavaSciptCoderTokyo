// Object method
// Các phương thức của Objects
var myDogs = {
    weight: 5,
    name: 'Đằn',
    age: 1,
    sokmRun: 1,
    bark: function() {
        // anonymous function 
        console.log('Móe Móe, my name is', this.name);   // undefined
    },
    eat: function(bone){
        this.weight = this.weight + bone.weight;
        return this;
    },
    run: function(Maraton) {
        this.sokmRun = this.sokmRun + Maraton.sokmRun;
    }
};

// console.log(myDogs);
// console.log(myDogs.bark());

var bone = {weight: 0.5};
console.log('Before eat', myDogs.weight);

myDogs.eat(bone);
console.log('After eat', myDogs.weight);

var Maraton = {sokmRun: 100};
console.log('At home', myDogs.sokmRun);

myDogs.run(Maraton);
console.log('Maraton Exam', myDogs.sokmRun);