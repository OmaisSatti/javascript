// The Function() constructor creates Function objects

const sum = new Function("a", "b", "return a + b");
// console.log(sum(2, 6)); //output 8

//Instance methods of function in js

// The apply() method of Function instances calls this function 
// with a given this value, and arguments provided as an array
const numbers = [5, 6, 2, 3, 7];
const max = Math.max.apply(null, numbers);
// console.log(max);

const array = ["a", "b"];
const elements = [0, 1, 2];
array.push.apply(array, elements);
// array.push(...elements); same using spread syntax.
//console.info(array); // ["a", "b", 0, 1, 2]

// The bind() method of Function instances creates a new function that, when called, calls 
// this function with its this keyword set to the provided value
const obj = {
    x: 42,
    getX: function () {
        return this.x;
    },
};

//const unboundGetX = module.getX; // Function reference copied but not bound to obj
const boundGetX = obj.getX.bind(obj);
// console.log(boundGetX());

// The call() method of Function instances calls this function 
// with a given this value and arguments provided individually.
function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    Product.call(this, name, price);
    this.category = "food";
}

// console.log(new Food("cheese", 5).price);

function greet() {
    console.log(this.animal, "typically sleep between", this.sleepDuration);
}

const catobj = {
    animal: "cats",
    sleepDuration: "12 and 16 hours",
};

//greet.call(catobj); // cats typically sleep between 12 and 16 hours

//Instance property of functions in js
function func1(a, b) { }
console.log(func1.length) //return number of parameters
console.log(func1.name)
console.log(func1.prototype)

