// 2. Implement a Banking System
// Create an Account class with ownerName and balance properties.
// Add methods to deposit(amount) and withdraw(amount), ensuring balance cannot go negative.
// Create a SavingsAccount class that extends Account and adds an interestRate property.
// Add a method applyInterest() to update the balance based on interest.

class Bank {
    constructor(ownerName, balance) {
        this.ownerName = ownerName;
        this.balance = balance
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.info(`✅ $${amount} deposited successfully!`);
        } else {
            console.warn("❌ Deposit amount must be greater than zero.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.info(`✅ $${amount} withdrawn successfully!`);
        } else {
            console.warn("❌ Insufficient balance or invalid amount.");
        }
    }

    balanceInquiry() {
        console.log(`💰 Current Balance: $${this.balance}`);
    }
}

class SavingsAccount extends Bank {

    constructor(ownerName, balance, interestRate) {
        super(ownerName, balance)
        this.interestRate = interestRate;
    }

    applyInterest() {
        if (this.balance > 1000) {
            this.balance += this.balance * this.interestRate;
        }
    }
}

let user = new SavingsAccount('Habib', 1200, 0.05);
user.applyInterest();
user.balanceInquiry();