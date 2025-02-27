let array = [7, 11, 15, 21, 25, 34, 29, 37, 89];
let nestedArray = [1, [2, 3], [4, [5, 6]]];
let numbers = [1, 2, 3];

//console.info(...array.entries()) //key value pairs return
// console.info(...array.values())
// console.info(...array.keys())
// console.info(array.includes(21))

// console.info(array.toString())
// console.info(array.toLocaleString())

// console.info(array.reverse())
// console.info(array.sort())

// console.info(array.every((item) => item > 55))
// console.info(array.some((item) => item > 55))

// console.info(array.fill(5,0,2))
// console.info(array.find((value)=>value===15))
// console.info(array.findIndex((value)=>value===12))
// console.info(array.lastIndexOf(21))


// console.log(array.filter((value) => value % 2 === 0))
// console.log(array.map((value) => value + 2))
// console.log(array.reduce((sum, value) => { return sum + value }, 0))
// console.log(array.reduceRight((sum, value) => { return sum + value }, 10))

// console.log(array.shift('*')) //remove first element from array
// console.log(array.unshift(111)) //insert new element at start return length
// console.log(array.join('*'))

// console.log(array.concat([113,114]))
// console.log(array.copyWithin(3, 0, 3));
// console.log(nestedArray.flat()); //flat nested array upto 1 level
// console.log(nestedArray.flat(Infinity)); //Fully Flattening
// console.log(numbers.flatMap(num => [num, num * 2]));
// console.log(numbers.map(num => [num, num * 2]));


//Array static method in javascript
console.log(Array.from("foo"));
console.log(Array.of("foo", 2, "bar", true));
console.log(Array.isArray(numbers));





