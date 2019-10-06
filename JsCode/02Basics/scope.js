let iAmGlobal = 'someValue'

if(true){
    let iAmLocal = 'someMoreValue'
    // var iAmLocal = 'someMoreValue' 
    //It is accessable outside of this block also
    iAmGlobal = 'superMan'
    console.log(iAmGlobal)
    console.log(iAmLocal)
}

// console.log(iAmLocal) 
//Not accessable but incase of using 'var' it's accessable
console.log(iAmGlobal)