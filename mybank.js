#! usr/bin/env node
//Project11 My Bank
class Account {
    balance;
    constructor(initialBalance) {
        this.balance = initialBalance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
            return;
        }
        this.balance -= amount;
    }
    getBalance() {
        return this.balance;
    }
}
class Customer {
    name;
    accounts;
    constructor(name) {
        this.name = name;
        this.accounts = [];
    }
    addAccount(initialBalance) {
        const newAccount = new Account(initialBalance);
        this.accounts.push(newAccount);
    }
    getAccounts() {
        return this.accounts;
    }
    getName() {
        return this.name;
    }
}
class Bank {
    customers;
    constructor() {
        this.customers = [];
    }
    addCustomer(customer) {
        this.customers.push(customer);
    }
    getCustomers() {
        return this.customers;
    }
}
// Usage
const bank = new Bank();
// Adding customers
const customer1 = new Customer("Ali Raza");
customer1.addAccount(20000);
customer1.addAccount(5000);
bank.addCustomer(customer1);
const customer2 = new Customer("Sohail");
customer2.addAccount(150000);
bank.addCustomer(customer2);
// Accessing customer accounts
const customers = bank.getCustomers();
customers.forEach((customer, index) => {
    console.log(`Customer ${index + 1}: ${customer.getName()}`);
    const accounts = customer.getAccounts();
    accounts.forEach((account, accIndex) => {
        console.log(`   Account ${accIndex + 1}: Balance = ${account.getBalance()}`);
    });
});
export {};
