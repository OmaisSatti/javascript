//Object() constructor

const numberObj = new Number(1);
const bigintObj = Object(1n);
const symbolObj = Object(Symbol("foo"));

const obj = new Object();
obj.a = 42;
obj.b = 32;
// console.log(obj)

//Static Method of Object in javascript
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);

// console.log(target);

// If the source value is a reference to an object, it only copies the reference value.
const obj1 = { a: 0, b: { c: 0 } };
const obj2 = Object.assign({}, obj1);
obj2.a = 11;
obj2.a = 12;
obj2.b.c = 3; //will reflect on both object beacuse c is reference to object
//console.log(obj1, obj2); // obj1:{ a: 1, b: { c: 3 } }  obj2:{ a: 2, b: { c: 3 } }


// The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.
const person = {
    isHuman: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    },
};
const me = person; // changes effect person object a(Direct Reference)
const me2 = Object.create(person); // does NOT modify person Prototype-based Inheritance)
me.isHuman = true;
me2.name = 'omais';

// me2.printIntroduction();
// me.printIntroduction();

// Object.freeze() (Fully Immutable)
// The Object.freeze() static method freezes an object.
//Object.freeze(obj1) //obj.a throw error

// Object.seal() (Modifiable but No New Properties or Deletion)
Object.seal(obj1);
obj1.c = 23; //not effected as c is new prop
// console.log(Object.isSealed(obj1));

// The Object.is() static method determines whether two values are the same value.
// console.log(Object.is(NaN, NaN));
const emptyObj = {};
const emptyCopy = {};
// console.log(Object.is(emptyObj, emptyCopy));

// The Object.keys() static method returns an array of keys
// console.log(Object.keys(obj1));

// The Object.values() static method returns an array of values
// console.log(Object.values(obj1));

// The Object.fromEntries() static method transforms a
// list of key-value pairs into an object.

const entries = new Map([
    ["foo", "bar"],
    ["baz", 42],
]);

const object = Object.fromEntries(entries);

console.log(object);

//Instance Method of Object in javascript
let myself=new Object({name:'Omais',City:'Rwp'})
console.log(myself.hasOwnProperty('age'))
console.log(myself.propertyIsEnumerable('name'))


