// Documentations --> TC39 & MDN
//"use strict";  // --> treat all JS code as newer version
// var = globle scope varibles
// let & const= block scope variales

var myTitle="Javascript";
var myTitle="Javascript";      // var can be updated and redeclare within its Scope
console.log(myTitle);
{
    var myTitle="Adv Javascript"
    console.log(myTitle);
}
console.log(myTitle)          //Adv Javascript


console.log("------Scope of the variable-------")

let mytitle="Javascript";
console.log(mytitle);
{
    let mytitle="Adv Javascript"
    console.log(mytitle);
}
console.log(mytitle)          //Javascript   

let myName="Mangesh";
// let myName="Mangesh";      // dont declare same variable name within let keyword
myName="Mangesh";
console.log(myName);           
let myNameis;
console.log(myNameis);        // undefined
const my_Name="dada";
// my_Name="hello"            // updation not allowed in const keyword
console.log(my_Name);
