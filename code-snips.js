let users = [
    {
        name: 'arslan',
        salary: 55000
    },
    {
        name: 'shameer',
        salary: 35000
    },
    {
        name: 'saad',
        salary: 60000
    },
    {
        name: 'omais',
        salary: 70000
    }
]
/* 1. Find Richest User
Write a function to find the user with the highest salary. */
let maxSalary = Math.max(...users.map((user) => user.salary))
let maxSalaryUser = users.find((user) => user.salary === maxSalary)
// console.log(`Richest User is: ${maxSalaryUser.name}`)


/* 2. Filter Salaries Above 50k
Return a new array of users whose salary is greater than 50,000. */
let above50Users = users.filter(user => user.salary > 50000)
// console.log('users with above 50k salaries: ',above50Users)


/* 3. Sort by Salary
Sort the users in descending order of salary (highest to lowest). */

// let sortedUsers = users.sort((a, b) => b.salary - a.salary)
/* ⚠️ Small issue: Array.sort() mutates the original array, 
so after sorting, your original users array changes too. */
let sortedUsers = [...users].sort((a, b) => b.salary - a.salary)

// console.log('users after salary sorted in decending order: ', sortedUsers)



/* 
4. Calculate Average Salary
Write a function to calculate the average salary of all users. */

let salaries = users.map(user => user.salary)
let totalSalary = salaries.reduce((sum, salary) => sum + salary, 0)
// console.log(`total salary of all users: ${totalSalary}`)
// console.log(`average salary of users is: ${totalSalary / users.length}`)



/* 5. Add Bonus Field
Add a new property bonus to each user, which is 10% of their salary, and return the updated array. */
let userWithBonus = users.map((user) => ({
    ...user,
    bonus: user.salary / 10
}))
console.log('users data after adding bonus 10% of their salaries', userWithBonus)