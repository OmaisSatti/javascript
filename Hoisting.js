/* Hoisting ka matlab hai: JavaScript execution ke waqt variables 
aur functions ki declarations ko memory me top pe move kar deta hai (compile phase me),
lekin values assign nahi karta.Matlab tum declare kahin bhi karo, JS unko upar le jata hai.
yad rakho k function expression ko ni opar lay k aj sakta*/

sayHello(); //okay beacuse simple function
console.log(v) // okay in bvar case beacuse var k case ma memory ma undefined save ho jata

var v = 102
function sayHello() {
    console.log('Hello Javascript language')
}


/* console.log(b); // ❌ ReferenceError
console.log(c); // ❌ ReferenceError */
let b = 20;
const c = 30;
/* Reason:
let aur const bhi hoist hote hain lekin ek temporal dead zone (TDZ) me rehte hain jab 
tak unki line of code execute na ho.Isliye unko unse pehle access nahi kar sakte. */


/* 👉 var sayHi to hoist hota hai, lekin value (function) baad me assign hoti hai.
Hoisting ke waqt sirf var sayHi = undefined; hota hai → isliye error aata hai. */
sayHi(); // ❌ TypeError function expression and var sayHi = undefined;

var sayHi = function () {
    console.log("Hi!");
};

/* 
Short Summary
var → hoist hota hai, initial value = undefined.
let / const → hoist hote hain lekin TDZ me rehte hain (pehle access nahi kar sakte).
Function declaration → poora upar hoist hota hai (safe to call before).
Function expression / arrow function → variable hoist hota hai but value baad me assign hoti hai. */