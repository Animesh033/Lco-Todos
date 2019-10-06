/**
 * const sayHello = function(name){
    return "Hey there, " + name + " !"
}
console.log(sayHello("Animesh"))
 */

/**
 * const sayHello = (name) => { //Arrow function
    // return "Hey there, " + name + " !"
    return `Hey there, ${name} !` // Better to use backticks (``) in advance javascript instead "" or ''
}
console.log(sayHello("Animesh"))
*/

const sayHello = (name) => `Hey there, ${name} !` 
console.log(sayHello("Animesh"))

const todos = [{
    title: 'Buy Bread',
    isDone: true,
}, {
    title: 'Go to Gym',
    isDone: true,
}, {
    title: 'Record youtube videos',
    isDone: false,
}]

/**
 * const thingsDone = todos.filter((todo) => {
    return todo.isDone === true
})
console.log(thingsDone)
*/

const thingsDone = todos.filter((todo) => todo.isDone === true)
console.log(thingsDone)

const cameras = {
    price: 600,
    weight: 2000,
    myDes: function(){
        return `This is canon camera is of ${this.price}$`
    }
}
console.log(cameras.myDes())