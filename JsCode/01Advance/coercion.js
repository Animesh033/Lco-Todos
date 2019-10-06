console.log('5' - 5) // 0
console.log('5' + 5) // 55

const giveType = typeof 5

console.log(giveType)

const adder = true + 5

const adder2 = 5 + false

console.log(adder)
console.log(adder2)

const loginDetails = []
//Login to getting details from db

const loginID = loginDetails[0]

if(loginID !== undefined){
    console.log('Allow user to login')
}else{
    console.log('Auth failed')
}

//Values that interpret as false:
/**
 *false
0
''
null
undefined
*/
