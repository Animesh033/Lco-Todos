// alert('File is attached!')
// console.log(document)
// console.log(document.head)
// console.log(document.body)
// console.log(document.URL)
// console.log(document.title)
document.title = 'I got changed'

// const myElement = document.querySelector('p')
// console.log(myElement)

// const myElement = document.querySelectorAll('#idone')
// console.log(myElement[0])

// const myElement = document.querySelectorAll('.classone')
// console.log(myElement[0])

// const myPElements = document.querySelector('p')
// myPElements.textContent = 'I am being changed using JS'

/**
 * const myPElements = document.querySelectorAll('p')
myPElements.forEach(function(p){
    p.textContent = 'I am being changed using loop in JS'
})
Same as below
*/

const myPElements = document.querySelectorAll('p')
myPElements.forEach((p) => p.textContent = 'I am being changed using loop in JS')

const myNewPara = document.createElement('p')
myNewPara.textContent = 'I was added via js'
document.querySelector('body').appendChild(myNewPara)

/**
 * document.querySelector('button').addEventListener('click', function(){
    console.log('Button was pressed!')
})
or
document.querySelector('button').addEventListener('click', () => console.log('Button was pressed!'))
 */

// document.querySelector('button').addEventListener('click', (event) => {
//     console.log(event)
// })

document.querySelector('button').addEventListener('click', (event) => {
        event.target.textContent = 'I was clicked'
    })

// 
document.querySelector('#myform').addEventListener('input', (event) => { // 'change, click', etc
    console.log(event.target.value)
})