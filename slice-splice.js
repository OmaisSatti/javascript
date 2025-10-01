/* slice(start, end)
Kya karta hai? → Array ka ek shallow copy return karta hai (original array change nahi hota).
Parameters → start index (inclusive), end index (exclusive).
Immutable → Original array same rehta hai. */
let arr = [10, 20, 30, 40, 50, 60, 70, 80]
let sliced = arr.slice(0, 4)
console.log(`array values after slice: ${sliced}`)


/* splice(start, deleteCount, ...items)
Kya karta hai? → Array ko directly modify karta hai (mutable).
Parameters →
start → kis index se shuru karna hai
deleteCount → kitne items remove karne hain
items → (optional) naye elements add karne ke liye
Mutable → Original array badal jata hai */
let arr2 = [0, 2, 5, 7, 9, 11, 13]
let spliced = arr2.splice(0, 2, 1, 3) // 1,3 are optional parameters
console.log(arr2) //affected the original array
console.log(spliced) // return removed values