// Creating a WeakMap
const weakMap = new WeakMap();

function createUser(name) {
    let user = { name }; // Object representing a user
    weakMap.set(user, { isActive: true, lastLogin: new Date() });
    return user;
}

let user1 = createUser("Alice");
let user2 = createUser("Bob");

console.log(weakMap.get(user1)); // { isActive: true, lastLogin: ... }
console.log(weakMap.get(user2)); // { isActive: true, lastLogin: ... }

// Removing reference to user1
user1 = null; // Now, user1's entry in weakMap will be garbage-collected

console.log(weakMap.has(user1)); // false (key is gone after garbage collection)
console.log(weakMap.has(user2)); // true
