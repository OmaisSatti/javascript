// 🔹 Level 2: Promises
// Create a Promise that resolves after 2 seconds and returns "Promise Resolved!".
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success! Promise resolved')
        //reject('opps failed check again')
    }, 2000);
})

// promise.then((result) => console.log(result))
//     .catch((error) => console.error(error))
//     .finally(() => console.info('Promise Completed'))

// 5️⃣ Modify the function delayedMessage to return a Promise instead of using a callback.

function delayedMessage(msg, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${msg}`)
            //reject(`Promise failed`)
        }, delay)
    })
}

// delayedMessage('Hello Java', 2000)
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error))

// 6️⃣ Chain .then() to a Promise that resolves after 1 second and logs "Step 1 Done", then another .then() that logs "Step 2 Done".

delayedMessage('Hello Java', 2000)
    .then((result) => {
        console.log(result)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                //resolve("Step 1 Done");
                reject('Step 1 Failed!')
            }, 1000);
        }).then((setp1Result) => {
            console.log(setp1Result)
            return "Step 2 Done";
        }).then((step2Result) => {
            console.log(step2Result)
        }).catch((error) => console.error('error in steps: ',error))
    })
    .catch((error) => console.log(error))
