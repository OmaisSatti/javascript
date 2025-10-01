// 🔹 Level 1: Understanding Basics (setTimeout, Callbacks)
// Write a function that prints "Hello" after 2 seconds using setTimeout.

// setTimeout(() => {
//     console.log('Hello World')
// }, 2000);

// Create a function delayedMessage(msg, delay) that takes a 
// message and delay (in ms) and logs it after the delay.
function delayedMessage(msg, delay) {
    setTimeout(() => {
        console.info('your message: ', msg)
    }, delay)
}

//delayedMessage('React is Awesome', 3000)

// Write a function that takes a callback and calls it after 3 seconds.
function callMe(callback) {
    setTimeout(() => {
        callback();
    }, 2000);
}

function executeAfterDelay() {
    console.log("i am a function that is called after delay")
}

//callMe(executeAfterDelay)

//  setTimeout() vs setInterval()
// Executes a function once after a delay setTimeout()
//Executes a function repeatedly at a fixed interval setInterval()
let timeoutID = setTimeout(() => {
    console.log("This will never be printed!");
}, 3000);

clearTimeout(timeoutID);

/* setTimeout ko call kia — iska kaam hota hai 3 second baad ek callback schedule karna.
Matlab abhi sirf ek "timer" lag gaya hai, jo 3 second baad chalna tha.
Uska reference (timeoutID) ek variable mai save ho gaya.
Ye ID isi liye milti hai taa k aap baad mai isko cancel kar sako.
Uske turant baad hi clearTimeout(timeoutID) call ho gaya.
Ye kya karta hai? Jo timer schedule tha, usko cancel kar deta hai.
Matlab ab callback "This will never be printed!" run hi nahi hoga, chahe 3 second baad ho ya kabhi bhi. */



let count = 0;
let intervalID = setInterval(() => {
    console.log("This runs every second:", count);
    count++;

    if (count === 5) {
        clearInterval(intervalID); // Stop after 5 times
    }
}, 1000);

/* yeh kya karta hai?
➡️ setImmediate() ka task event loop ke current poll phase ke baad, check phase me run hota hai.
iska matlab: jaise hi current I/O operations complete ho jate hain, turant callback queue me dal ke run kar deta hai. */
/* const immediate = setImmediate(() => {
  console.log("This will not run");
});

clearImmediate(immediate); */