/* 🔹 What is a Closure?
A closure is created when a function remembers the variables from its outer scope,
even after that outer function has finished executing.
In simple words:
👉 A closure = function + the lexical scope in which it was declared. */

function outerFunction() {
  let counter = 0;

  function innerFunction() {
    counter++;
    return counter;
  }

  return innerFunction;
}

const add = outerFunction();

// console.log(add()); // 1
// console.log(add()); // 2






/* Example 2: Real-Life Analogy
Think of a bank account:
The outer function is like opening an account.
The inner function is like deposit/withdraw methods.
The balance (variable) stays private, but can be accessed/modified via those methods. */
function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit: function(amount) {
      balance += amount;
      return balance;
    },
    withdraw: function(amount) {
      if (amount > balance) {
        return "Insufficient funds!";
      }
      balance -= amount;
      return balance;
    },
    checkBalance: function() {
      return balance;
    }
  };
}

const myAccount = createBankAccount(100);

// console.log(myAccount.deposit(50));    // 150
// console.log(myAccount.withdraw(30));   // 120
// console.log(myAccount.checkBalance()); // 120





/* 🔹 Real-Life Use Cases of Closures
Data privacy / Encapsulation → Hide variables from outside scope (like the bank account).
Event listeners / Callbacks → Remember values when an event happens later.
setTimeout / setInterval → Functions execute later but still remember outer variables.
Once function → Ensure a function runs only once.
Memoization / Caching → Remember previous results for performance. */

function greetUser(name) {
  setTimeout(() => {
    console.log("Hello, " + name);
  }, 2000);
}

greetUser("Omais");








/* 🔹 Small Practice Tasks for You
Task 1: Create a function createCounter() that returns two functions: increment and decrement. They should share the same counter variable
Task 2: Build a passwordManager(secretPassword) function. It should allow checking the password with a method but not allow direct access.
Task 3: Write a closure that caches results of a function (for example, square of a number) so repeated calls with the same input return instantly. */
