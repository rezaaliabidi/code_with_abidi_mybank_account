#! usr/bin/env node
//Project11 My Bank

class Account {
    private balance: number;
  
    constructor(initialBalance: number) {
      this.balance = initialBalance;
    }
  
    deposit(amount: number) {
      this.balance += amount;
    }
  
    withdraw(amount: number) {
      if (amount > this.balance) {
        console.log("Insufficient funds");
        return;
      }
      this.balance -= amount;
    }
  
    getBalance(): number {
      return this.balance;
    }
  }
  
  class Customer {
    private name: string;
    private accounts: Account[];
  
    constructor(name: string) {
      this.name = name;
      this.accounts = [];
    }
  
    addAccount(initialBalance: number) {
      const newAccount = new Account(initialBalance);
      this.accounts.push(newAccount);
    }
  
    getAccounts(): Account[] {
      return this.accounts;
    }
  
    getName(): string {
      return this.name;
    }
  }
  
  class Bank {
    private customers: Customer[];
  
    constructor() {
      this.customers = [];
    }
  
    addCustomer(customer: Customer) {
      this.customers.push(customer);
    }
  
    getCustomers(): Customer[] {
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
  