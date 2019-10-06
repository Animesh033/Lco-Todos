/**
 * Text Node
var h = document.createElement('h1')
var myValue = document.createTextNode('Hello World!')
h.appendChild(myValue)
document.querySelector('h1').appendChild(h)

 * While Loop
let val = 5;
while(val > 0){
    console.log(val)
    val--
}
 */ 

var ul = document.getElementById('list')
var li

var addButton = document.getElementById('add')
addButton.addEventListener('click', addItem)

var addButton = document.getElementById('remove')
addButton.addEventListener('click', removeItem)

function addItem(){
    console.log('Add button is clicked')
    var input = document.getElementById('input')
    var item = input.value
    ul = document.getElementById('list')
    var textnode = document.createTextNode(item)
    if (item === '') {
        return false
        // Add a p tag and assign a value "Enter your todo"
    }
    else{
        //Create li
        li = document.createElement('li')

        //Create checkbox
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.setAttribute('id', 'check')

        //Create label
        var label = document.createElement('label')
        label.setAttribute('for','item') //optional

        //add these elements on webpage
        ul.appendChild(label)
        li.appendChild(checkbox)
        label.appendChild(textnode)
        li.appendChild(label)
        ul.insertBefore(li, ul.childNodes[0])

        setTimeout(() =>{
            li.className = 'visual' //add css for this class, not yet created in css file
        }, 2)

        input.value = ''

    }
}

function removeItem(){
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        const element = li[index];
        console.log(element) 
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }      
    }
    
}