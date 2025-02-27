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

// Cancel the timeout before it runs
clearTimeout(timeoutID);


let count = 0;
let intervalID = setInterval(() => {
    console.log("This runs every second:", count);
    count++;

    if (count === 5) {
        clearInterval(intervalID); // Stop after 5 times
    }
}, 1000);


