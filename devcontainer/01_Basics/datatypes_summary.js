// # Primitive Datatypes

//  7 types: String, Number, Boolean, null, undefined, Symbol, BigInt 



const score = 100; 
const scoreValue = 100.3;

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);

const bigNumber = 3456543576654356754n;
// # Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"] // its a array

let myObj= {        // its a object key value pairs
    name:"hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World ");

}


console.log(typeof bigNumber);
console.log(typeof myFunction);

//For Reading in more detail Link  
//https://262.ecma-international.org/5.1/#sec-11.4.3


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive{give a copy of variable}), Heap (Non-Primitive{give a reference of original value})

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename );
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);


