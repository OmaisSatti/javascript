/* An IIFE (Immediately Invoked Function Expression) in JavaScript 
is a function that is defined and executed immediately after it is created. */

(function () {
  let message = "Hello from IIFE!";
  console.log(message);
})();

const result = (function (x, y) {
  return x + y;
})(5, 7);

console.log(result); // 12

/* Why use IIFE?
✅ To avoid polluting global scope (encapsulation).
✅ Useful in module patterns (before ES6 modules).
✅ Great for initializing variables once.
⚡ In modern JS, IIFEs are less common since we now use block scope (let, const) and modules.
But you’ll still see them in legacy code, interview questions, or libraries (like jQuery). */


// modern IIFE (arrow function style) examples
((name) => {
  console.log(`Welcome, ${name}!`);
})("Omais");

const config = (() => {
  const secretKey = "abc123"; // private variable
  const apiUrl = "https://example.com";

  return { apiUrl }; // sirf ye bahar dikhayenge
})();

console.log(config.apiUrl);  // ✅ accessible
//console.log(config.secretKey); // ❌ undefined (protected)

// 👉 Matlab IIFE = ek private chhota module banane ka shortcut hai.
// Aaj kal import/export modules isi ka advanced version hain.