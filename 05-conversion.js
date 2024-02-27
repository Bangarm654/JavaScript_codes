let age="24";
console.log("type of age-", typeof age);  // It is String

let numericage=Number(age);        // conversion into int
console.log(typeof numericage);

let age1="24abc";
console.log(typeof age1);          // It is String
let numericage1=Number(age1);
console.log(numericage1);          // not a number (NaN)

let Name=123;                      // 123 and 1 = true, 0,"" = false, String = true,  
console.log(Name);
let stringName=String(Name);
console.log(typeof stringName)

console.log("-------------")
let myStatus = "FALSE";             //any Sring value "true" / "FALSE" print type is always true 
console.log(typeof myStatus);

let boolStatus = Boolean(myStatus); 
console.log(boolStatus);             //true
console.log(typeof boolStatus);

console.log("----------------")
let my = ""; 
console.log(typeof my);               //string

let bmy = Boolean(my);
console.log(bmy);                     //print False
console.log(typeof bmy);

// 33 => 33
// "33abc" => naN
// true => 1; false => 0

// let isLoggedIn = 1                   // true
// let isLoggedIn = ""                  // false
let isLoggedIn = 0                      // false
// let isLoggedIn = "mangesh"           //true
let booleanInLoggedIn = Boolean(isLoggedIn)
console.log(booleanInLoggedIn)

let someNumber=33
let stringNumber =  String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)
