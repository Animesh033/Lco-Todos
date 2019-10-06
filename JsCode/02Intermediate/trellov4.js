const myTodos = ['Buy Bread', 'Go to Gym', 'Record youtube videos']
// console.log(myTodos.indexOf('Buy bread')) // -1 as Buy Bread is not found 
// i.e Buy bread is not matched
// console.log(myTodos.indexOf('Buy Bread')) //0

const newTodos = [{
    title: 'Buy Bread',
    isDone: false,
}, {
    title: 'Go to Gym',
    isDone: false,
}, {
    title: 'Record youtube videos',
    isDone: true,
}]

// const index = newTodos.findIndex(function(todo, index){
//     console.log(todo)
//     return todo.title === 'Go to Gym'
// })

// console.log(index)

//Method 1
// const findTodos = function(myTodos, title){
//     const index = newTodos.findIndex(function(todo, index){
//     return todo.title.toLowerCase() === title.toLowerCase()
//     })
//     return myTodos[index]
// }

// let printMe = findTodos(newTodos, 'Go To gym')
// console.log(printMe)

// Method 2
const findTodo = function(myTodos, title){
    const titleReturned = myTodos.find(function(todo, index){ //Notice here find() function is used
    return todo.title.toLowerCase() === title.toLowerCase()
    })
    return titleReturned
}

let printMe = findTodo(newTodos, 'Go To gym')
console.log(printMe)