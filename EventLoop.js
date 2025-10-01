
/*JavaScript ka system samjho (Event Loop)
JS single-threaded language hai → ek waqt pe sirf ek kaam karti hai.
Uske do main parts hote hain:
Call Stack → jo abhi turant chal raha hai.
Task Queue (Callback Queue) → jo baad me chalna hai (setTimeout, events, etc).
Aur inke beech hota hai Event Loop → jo check karta hai ki Call Stack khali hai ya nahi.
Why setTimeout(..., 0) doesn’t mean immediately?
Yeh function ko Task Queue me dal do, aur chalana tab jab Call Stack free ho.*/

/* for (var index = 1; index <= 3; index++) {
    setTimeout(() => {
        console.log(index)
    }, 0);
}
 */
//Ouput is  4 4 4 beacuse var is function scoped

/* for (let index = 1; index <= 3; index++) {
    setTimeout(() => {
        console.log(index)
    }, 0);
} */
//Ouput is  1 2 3 beacuse var is block scoped






/* Microtask Queue → Promises .then(), process.nextTick
Macrotask Queue → setTimeout, setInterval, setImmediate */

/* console.log("Start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End"); */
//Output
// Start
// End
// Promise
// setTimeout






/* acha 👌 ab ek thoda tricky event loop example banata hun jisme 
async/await, Promise, or setTimeout sab mix ho. */
/* console.log("Start");

setTimeout(() => {
  console.log("setTimeout 1");
}, 0);

async function test() {
  console.log("Inside async function");

  await Promise.resolve();
  console.log("After await");

  setTimeout(() => {
    console.log("setTimeout 2");
  }, 0);
}

test();

Promise.resolve().then(() => {
  console.log("Promise.then");
});

console.log("End"); */

/* output is
Start
Inside async function
End
Promise.then
After await
setTimeout 1
setTimeout 2
 */
/* Reason:
Step by Step Samjhna:
console.log("Start") → print: Start
setTimeout(..., 0) → setTimeout 1 callback Macrotask Queue me chala gaya.
async function test() call →
pehle line: Inside async function print hoga.
await Promise.resolve() pe execution ruk jayega, aur baaki code (console.log("After await")) Microtask Queue me chala jayega.
Promise.resolve().then(...) → callback (Promise.then) bhi Microtask Queue me chala gaya.
console.log("End") → print: End */


// ⚡ Final Tricky Example with nested promise and setTimeout

console.log("1");

setTimeout(() => {
  console.log("2");

  Promise.resolve().then(() => {
    console.log("3");

    setTimeout(() => {
      console.log("4");
    }, 0);

  });
}, 0);

Promise.resolve().then(() => {
  console.log("5");
});

setTimeout(() => {
  console.log("6");

  setTimeout(() => {
    console.log("7");
  }, 0);

}, 0);

Promise.resolve().then(() => {
  console.log("8");

  setTimeout(() => {
    console.log("9");
  }, 0);
});

console.log("10");

/* Output Explain
Synchronous Code
"1"
"10"
Microtask Queue (Promises first)
"5"   (from direct Promise)
"8"   (from direct Promise)
➡️ jab "8" run hota hai → uske andar ek setTimeout("9") queue me add hota hai.
3. Macrotask Queue (setTimeouts)
Pehla setTimeout("2"):
log "2"
uske andar ek Promise hai → microtask "3"
jab "3" run hota hai → ek setTimeout("4") schedule hota hai
Dusra setTimeout("6"):
log "6"
uske andar ek aur setTimeout("7") schedule hota hai
Aur upar "8" ke andar se scheduled → setTimeout("9")
 */