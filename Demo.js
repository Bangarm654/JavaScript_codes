// JavaScript is Behaviour of Web pages
// JS is a Dynamically Type Language

console.log("Hello World");

const accountId = 14345
let accountEmail = "demo@gmail.com"
var accountPassword = "1234"
accountCity = "Sambhajinagar"
let accountState;

// accountId = 123                 // Not allowed
accountEmail = "account@gmail.com"
accountPassword = "15555"
accountCity = "pune"
/*
Prefer not to use var
because of issue in block scope and functional scope

Fucnction scope => When a variable is declare inside a function 
                   (it access only within that function)
Block scope => variable when declared inside the perticular loop.
               (it access only within that perticular loop/condition)
*/
console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
