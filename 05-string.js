
const name = "mangesh";
const Count = 50;

// console.log(name + Count + "Value")                          // this syntex is out-dated
// console.log(name + Count + "pin")
console.log(`my name is ${name} and my repo count is ${Count}`);// String Interpolation
console.log(`Hello my name is ${name} and Count is ${Count}`)

const gameName = new String('Mangesh-B')  // MangeshB = Constructor name of Object->String & new-Keyword
console.log(gameName[1])

console.log(gameName.__proto__)    // {} -->Empty object

console.log(gameName.length)        // 8

console.log(gameName.toUpperCase)
