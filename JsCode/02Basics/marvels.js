// const superHeroes = ['Iron Man', 'Spider Man', 'Capt. America']

// console.log(superHeroes)
// console.log(superHeroes[0])
// console.log(superHeroes[1])
// console.log(superHeroes[2])

// console.log(superHeroes[superHeroes.length - 1])
// console.log(`We have ${superHeroes.length} super heroes`)


const numbers = ['One', 'Two', 'Three', 'Four', 'Five', 'Six']

// numbers[1] = 'Something'
// console.log(numbers)

// Start
// numbers.shift()
// console.log(numbers)

// numbers.unshift('Something')
// console.log(numbers)

// End
// console.log("The element is to be deleted is : "+ numbers.pop())
// console.log(numbers)

// console.log("The element is to be added is : "+ numbers.push('Seven'))
// console.log(numbers)


// Middle
numbers.splice(2, 1, 'Something')
// Delete 2(2nd para) elements from index 2(1st para) and replace Something
console.log(numbers)

numbers.splice(2, 2) 
// Delete 2(2nd para) elements from index 2(1st para)
console.log(numbers)