// Creating a WeakSet
const activeUsers = new WeakSet();

function login(user) {
    activeUsers.add(user);
    console.log(user.name + " is now online");
}

function logout(user) {
    activeUsers.delete(user);
    console.log(user.name + " logged out");
}

let user1 = { name: "Alice" };
let user2 = { name: "Bob" };

login(user1); // Alice is now online
login(user2); // Bob is now online

console.log(activeUsers.has(user1)); // true
console.log(activeUsers.has(user2)); // true

// User1 logs out
user1 = null; // Now user1 will be garbage-collected

console.log(activeUsers.has(user1)); // false (user1 entry is gone)
console.log(activeUsers.has(user2)); // true (user2 is still in WeakSet)
