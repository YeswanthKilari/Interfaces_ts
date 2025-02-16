//we can write the type of return statement

function max(a: number, b: number): string { //The return statement to be String
    return "Hello";
}


interface Address {
    // supose the address section is optional , we can write ? symbol for optinality
    city: string,
    pincode: number
    state: string
}

// Interfaces
// This is normal use case where you define the interface for the reference types 

interface User {  // The interface name always be in first capital letter
    name: string,
    age: number,
    address?: Address,
    //   greet(): string,
    //   hello(): void
}



let user: User = {
    name: "yeswanth",
    age: 20,
    address: {
        city: "Visakhapatnam",
        pincode: 50451,
        state: "Andhra pradesh"
    }
}

let users: User = {
    name: "Hello",
    age: 20 //user2 has the option to add the address or not 
}

//-----------------------------------------------------------------------------------

function islegal(user: User): boolean {
    if (user.age >= 18) {
        return true
    }
    return false
}

console.log(islegal(user));
//----------------------------------------------------------------------------------
// interface Office{
//     address: {
//         city: string,
//         pincode: number
//         state:string
//     }
// }
//IN the Above code 👆 the is problem we are using address 2 times . As a CS rule "we should't repeat ourselfs, so centralize the code "


interface Office {
    address?: Address;
}

//We are using ? symbol for optional area's

console.log("Everthing is Good!");