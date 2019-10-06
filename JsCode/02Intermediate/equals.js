let myVar = ''
let myVarTwo = ''

console.log(myVar == myVarTwo) // true(Equality)
console.log(myVar === myVarTwo) // true as it's compare value(Identity)

let myVarThree = {}
let myVarFour = {}

console.log(myVarThree === myVarFour) //false as it's compare the identity
console.log({} === {}) // false as comparing objects
let myVarFive = {}
let myVarSix = myVarFive

console.log(myVarFive === myVarSix) 
// true as it's identical i.e having same space in memory
// Both myVarFive and myVarSix variables are referencing to the same object