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

// Find the user with the minimum salary
let minSalary = Math.min(...users.map((user) => user.salary));
let minSalaryUser = users.find((user) => user.salary === minSalary);
// console.info('min salary user is: ', minSalaryUser)

//Find the total salary and average of all users
let salaries = users.map((user) => user.salary);
let totalSalary = salaries.reduce((sum, salary) => sum + salary, 0)
// console.info('total salary of all users: ', totalSalary)
// console.info('average salary of all users: ', totalSalary / users.length)


//Find the user with the longest name
let longestUser = users[0];
users.forEach((user) => {
    if (user.name.length > longestUser.name.length) {
        longestUser = user;
    }
});
// console.log('longest name user is: ', longestUser)

//Sort the users by salary in descending order
// users.sort((a, b) => b.salary - a.salary);
// console.log('Sorted users in ascending order: ', users)

// Find the second highest salary user
let maxSalary = Math.max(...users.map((user) => user.salary));
let secondMaxSalary = Math.max(...users.filter((user) => user.salary !== maxSalary).map((user) => user.salary));
let secondMaxUser = users.find((user) => user.salary === secondMaxSalary);
//console.info('second max salary user: ', secondMaxUser)

// Capitalize the first letter of each user's name
let capUsers = users.map((user, index) => ({
    ...user,
    name: user.name.charAt(0).toUpperCase() + user.name.slice(1)
}));
//console.log('first name letter capital: ', capUsers)

//Find all users whose salary is above 50,000
let above5oUsers = users.filter((user, index) => user.salary > 50000)
//console.log('all user above 50 salary: ', above5oUsers)

// Check if any user has a salary below 40,000
// let below40 = users.find((user, index) => user.salary < 40000) will return complete object
let below40 = users.some((user, index) => user.salary < 40000) // eill return true false
// console.log('user exist below 40000 salary: ', below40)


// Group users based on salary range
const groupedUsers = users.reduce((acc, user) => {
    if (user.salary < 50000) {
        acc['Below 50k'].push(user)
    } else if (user.salary >= 50000 && user.salary <= 60000) {
        acc['50k-60k'].push(user)
    } else if (user.salary > 60000) {
        acc['Above 60k'].push(user)
    }
    return acc;
}, { 'Below 50k': [], '50k-60k': [], 'Above 60k': [] });

console.log(groupedUsers) 