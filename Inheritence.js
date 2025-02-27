// 1. Create an Employee-Manager Hierarchy
// Define an Employee class with name, position, and salary properties.
// Add a method getDetails() that returns a string with employee details.
// Create a Manager class that extends Employee and adds a department property.
// Override the getDetails() method to include the department.

// JavaScript supports single inheritance via extends.

class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
    getDetails() {
        return `name: ${this.name} position: ${this.position} salary: ${this.salary}`
    }
}

class Manager extends Employee {

    constructor(name, position, salary, department) {
        super(name, position, salary)
        this.department = department;
    }

    getDetails() {
        return `${super.getDetails()} department: ${this.department}`
    }
}

let emp = new Employee('Omais', 'App Developer', 70000)
console.log(emp.getDetails());

let manager = new Manager('Saad', 'Web Developer', 55000, 'IT')
console.log(manager.getDetails());
