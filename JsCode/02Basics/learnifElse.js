// if(false){
//     console.log('I am inside if block')
//     console.log('I am still inside if block')
// }else if(true){
//     console.log('I am inside IF IN CAPS BLOCK')
// }else{
//     console.log('Notice this part')
// }


var whoIsHere = 'Teacher'
if(whoIsHere === 'user'){
    console.log('Gretting message for user.')
    console.log('Allow access to view all cources')

}else if(whoIsHere === 'teacher'){
    console.log('Gretting message for teacher.')
    console.log('Allow access to his cources')

}else{
    console.log('Message: Please verify your email.')
    console.log('Send user an email for verification')
}