let sayHello = function (name){
    console.log(`Greeting message for ${name}`)
    console.log(`Hey ${name}`)
}

// sayHello('John')

let fullNameMaker = function (firstname, lastname){
    console.log('Welcome to complyindia')
    console.log(`Happy to have you ${firstname} ${lastname}`)
}

// fullNameMaker('John', 'Doe')

let myAdder = function(num1, num2){
    let added = num1 + num2
    return added
}

// console.log(myAdder(3,5))

// let result = myAdder(3,5)
// console.log(result)

let myMultiplier = function (num1, num2){
    return num1 * num2
}

// console.log(myMultiplier(3, 4))

let guestUser = function (name = 'unName', courseCount = 0) {
    return 'Hello ' + name + ' and your course count is: '+ courseCount
}

// console.log(guestUser()) - If parameter is not passed, 
// then we need to set by default value as set above
console.log(guestUser('John', 1))