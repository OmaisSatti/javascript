const myMap = new Map([
    [1, "one"],
    [2, "two"],
    [3, "three"],
]);

let map = new Map();
map.set("a", 23)
map.set("b", 25)
map.set("c", 99)
map.set("a", 24) //update

//============Instance method of Map in javascript======

// console.log(map.values())
// console.log(map.keys())
// console.log(map.get('a'))
// console.log(map.delete('a'))
// map.clear()
// console.log(map.has('c'))
map.delete('c')
// console.log(map.size)
// console.log(map.entries())
map.forEach((item) => {
    console.log("item: ", item)
})






