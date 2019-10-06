// localStorage.setItem('hero', 'thor') //Set 
localStorage.setItem('todo','Buy ice tea')
var myTodo = localStorage.getItem('todo')
var myHero = localStorage.getItem('hero')
console.log(myHero)
console.log(myTodo)

localStorage.setItem('todo', 'Record youtube videos') //Update 
console.log(localStorage.getItem('todo'))


localStorage.clear() //Clear all data from local storage

localStorage.removeItem('todo') //Delete
myTodo = localStorage.getItem('todo')
console.log(myTodo)
