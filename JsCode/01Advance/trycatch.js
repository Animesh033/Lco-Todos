const convertToRS = (dollar) => {
    if(typeof dollar === 'number'){
        return dollar*64
    }else{
        throw Error('Amount needs to be in number')
    }
}

// const myValue = convertToRS('five')
//     console.log(myValue)
    
try{
    // const myValue = convertToRS('five')
    const myValue = convertToRS(5)
    console.log(myValue)
}catch(error){
    console.log(error)
}

console.log('I will not run if program crashes')