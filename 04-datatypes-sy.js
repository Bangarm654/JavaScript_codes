/* Data types are Categragies by How to store in mamory and how to access 

1. Primitive  (7 types)    => call by value, getting copy of that variable 
[String, Number, Boolean, null, undefined, Symbol, BigInt]

null => Only Empty variable
Undefined => variable decalere, memory space declare but value no defined
big value => use BigInt variable */

const score = false;
const scorevalue =100.3;

const isLoggedIn = false;
const outsideTemp = null;    // null datatypes => Object
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id);
console.log(anotherId);
console.log(id === anotherId)    //false

//const bigNumber = 3254578612n        

// 2. Reference type (3 non Primitive)  => Array, objects*, Functions  => data types are Functions
//call by reference, getting reference of original value
const hero = ["shaktiman", "naagraj", "mitun"];
let myObj = {
    name: "mangesh",
    age: 22,
}
const name = ["mangu", "changu", "dadu"];
let myName = {
    age: 24,
    village: "pimpri",
}
const Subject = ["math","boi","phy","che"];
let Details = {
    studentName: "Rahul",
    marks: 50,
}

const myFunction = function(){
    console.log("hello World")
}

// console.log(typeof bigNumber);    // undefined
// console.log(typeof score);        // boolean
// console.log(typeof scorevalue);   // number
// console.log(typeof isLoggedIn);   // boolean
// console.log(typeof outsideTemp);  // object
// console.log(typeof userEmail);    // undefined

//+++++++++++++++++++++++++++++

// Two types of Memory
// 1. Stack (used in Primitive) getting copy (Used to store static data)
// 2. Heap (Non Primitive) getting Reference (Used to store dyanamic data)

let myvillageName = "Gugul Pimpri";
let anotherName = myvillageName;
anotherName = "Aurangabad";

console.log(myvillageName);    //Gugul Pimpri
console.log(anotherName)       //Aurangabad

let userOne = {
    email: "user@email.com",
    upi: "user@ybl",
}
let userTwo = userOne

userTwo.email = "Mangesh@gmail.com"

// console.log(userTwo);  //{ email: 'Mangesh@gmail.com', upi: 'user@ybl' }
// console.log(userOne);  //{ email: 'Mangesh@gmail.com', upi: 'user@ybl' }

console.log(userTwo.email); //Mangesh@gmail.com
console.log(userOne.email); //Mangesh@gmail.com

let myyoutubeName = "porogramingdotcom";
let anotherchannel = myyoutubeName;
anotherchannel = "chaiaurcode";

console.log(myyoutubeName);
console.log(anotherchannel);
