

class ManagerClass implements Manager {  // Renamed class to avoid conflict
    name: string;
    department: string;

    constructor(name: string, department: string) {
        this.name = name;
        this.department = department;
    }
}

class EmployeeClass extends User implements Employee { // Renamed class to avoid conflict
    name: string;
    startdate: string;
    greet(): string {
        return "hello"
    }
    hello(): string {
        return "hi"
    }

    constructor(name: string, startdate: string) {
        super();
        this.name = name;
        this.startdate = startdate;
    }
}

// You can still create instances of these classes.
let employee = new EmployeeClass("Alice", "2023-01-15");
let manager = new ManagerClass("Bob", "Engineering");

console.log(employee.name);
console.log(manager.department); 


import { User } from './types';  //Import the `User` interface from `types.ts`

let user: User = {
    name: "john",
    age: 30,
    address: {
        city: "New York",
        pincode: 10001,
        state: "NY"
    },
    greet(): string { // Add greet method
        return "Hello, my name is " + this.name;
    },
    hello(): string {
        return "Hi";
    }

};

let users: User = {
    name: "Alice",
    age: 25,
    greet(): string { // Add greet method
        return "Hello, I am " + this.name;
    },
    hello(): string {
        return "Hi";
    }
};
console.log(user);
console.log(users)