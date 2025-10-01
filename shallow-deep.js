/* Shallow Copy (سطحی کاپی)
Sirf 1st level ka copy banta hai.
Agar object ke andar aur nested objects/arrays hain, to unki reference copy hoti hai, actual data nahi.
Matlab: andar ke nested objects/arrays me change karoge to dono (original aur copy) me effect hoga. */

let student = { name: 'Omais Satti', id: 123, address: { city: 'Rwp', town: 'Koral' } }
//let sameObj = student // Reference copy Same object, dono linked
//let shallowCopy = { ...student } // Shallow copyNew object, but nested shared
let objectCreate = Object.create(student) // Prototype-based inheritance new obj
/* objectCreate.address.city = 'Isb' // both city chnaged
console.log(objectCreate.address)
console.log(student.address) */

/* ➡️ Reason: address ek nested object hai, aur shallow copy sirf uska reference copy karti hai.
🔹 Rule of Thumb (JS objects/arrays)
Reference type (object/array) → hamesha memory address (reference) store hota hai.
Shallow copy ho ya prototype-based inheritance ho, nested object same reference use karega. */





/* Deep Copy (گہری کاپی)
Poora object clone hota hai, including nested objects/arrays.
Original aur copy completely independent hote hain.
Copy me change karne se original bilkul affect nahi hota. */

//let deepCopy = JSON.parse(JSON.stringify(student1)) //old method
let deepCopy2 = structuredClone(student) //new modern way

deepCopy2.address.city = 'Lhr'

/* console.log(student.address.city)
console.log(deepCopy2.address.city) */