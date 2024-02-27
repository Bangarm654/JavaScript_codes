let accno = 123456;
let accname = "Mangesh bangar";
let acccity = "Pimpri";
let accRateOfInst = 3.7;
let accValidation = true;
let accStatus;

// console.log(accno,accname,acccity,accRateOfInst,accValidation,accStatus)
// console.log([acccity,accname,accno,accRateOfInst,accValidation,accStatus])    // in square bracket
// console.table([acccity,accname,accno,accRateOfInst,accValidation,accStatus])  //tabular form

//type of datatypes
// console.table([typeof accno,typeof accname,typeof accRateOfInst,typeof accValidation,typeof accStatus])

"use strict"       // treat all JS code as newer version
// alert(3+3)      //we are using nodejs, not browser
// BigInt       => Use only for Big number
// null => standalone value
// Symbol => unique

// console.log(typeof undefined)   // undefined
// console.log(typeof null)        // object

// console.log(2 + 1)          //3
// console.log(2 >= 1)         //true
// console.log(2 <= 1)         //false
// console.log(2 == 1)         //false
// console.log(2 != 1)         //true

// console.log("2" > 2)        //false
// console.log("02" > 2)       //false

// console.log(null < 0);       //false    null => Empty value
// console.log(null <= 0);      //true
// console.log(null >= 0);      //true
// console.log(null == 0);      //false

// console.log(undefined < 0);   // false
// console.log(undefined > 0);   // false
// console.log(undefined == 0);   // false

console.log("2" === 2);   // false  
                          // === is check number and also check datatypes are same or different
