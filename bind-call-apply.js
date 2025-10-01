/* bind() vs call() (and apply() too bonus 😉)
call, apply, and bind are used in JavaScript to control the 
this context within functions and to manage how arguments are passed.

bind()
Ek naya function return karta hai jisme this permanently set hota hai.
Immediately execute nahi hota, baad me call karna padta hai. */

let person = { name: 'Omais Satti', Age: 25 }
let person2 = { name: 'Maryam Sajid', Age: 18 }

function showInfo(msg) {
    console.log(`${msg} ${this.name}`)
}

let omiInfo = showInfo.bind(person, 'How are you?')
omiInfo()

/* call()
Function ko immediately execute karta hai with given this.
Arguments → comma separated. */
let minuInfo = showInfo.call(person2, 'Miss you...😢')

/* apply()
Bilkul call() jaisa hai, bas arguments array ke form me diye jate hain. */

const person3 = { name: "Ali" };
function greet(msg, age) {
  console.log(`${msg} ${this.name}, age ${age}`);
}

greet.apply(person3, ["Hey", 25]); 
