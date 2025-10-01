/* shift() vs unshift()
shift()
Pehla element remove karta hai.
Original array mutate hota hai.
Return → removed element.
 */

let arr = [10, 20, 30, 40, 50,60]
let firstValue = arr.shift()

console.log(`first value of array; ${firstValue}`)

/* unshift()
Array ke start me element add karta hai.
Original array mutate hota hai.
Return → new length of array. */
let newLength=arr.unshift(5)
console.log(`new length of array after adding item to start; ${newLength}`)