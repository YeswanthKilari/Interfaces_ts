

interface People{
    name: string,
    age: number,
    // greet() : string
}

let userz: People =  {
    name: "yeswanth",
    age: 20,
    // greet: () => {
    //     return "Hello"
    // }
}
 

//----------------------------------------------
//interface can also serves as a classes like java oops

class Manager implements People{
    name: string
    age: number
    hi : number // We can also add the extra number | strings
    
    constructor(name: string, age: number, hi: number) {
        this.name = name,
        this.age = age,
        this.hi = hi
    }
}

let usera = new Manager("yeswanth", 20, 20);
console.log(usera.age)

//--------------------------------------------------------------------
abstract class User{
    name: string
    constructor(name:string){
        this.name = name
    }
    abstract greet(): string
    hello() {
        console.log("Hello world")
    }
}

class Employee extends User{
    constructor(name: string) {
        super(name)
    }

    greet(): string { 
        return `Hello, my name is ${this.name}, and I'm an employee!`;
    }
}

const emp = new Employee("Alice");
console.log(emp.name);
emp.hello();
console.log(emp.greet());