/* Map JS ma kya hota hai?
JavaScript ka Map ek built-in data structure hai jo key-value
pairs store karta hai (dictionary / object jaisa),
lekin kuch extra power deta hai jo normal object ({}) nahi deta. */

/* Map kyu use karte hain?
Jab unique keys ke sath values store karni ho aur keys ka type koi bhi ho (e.g. object, function).
Jab insert order maintain karna important ho.
Jab fast lookups, insertions, deletions chahiye.
Jab normal object se clean aur readable code likhna ho. */

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

/* 🔑 Summary:
Map ek better alternative hai Object ka, jab tumhe complex keys,
 order maintain, fast performance aur clean code chahiye hota hai.
 */



