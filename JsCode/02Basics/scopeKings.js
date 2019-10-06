// Kings Problem
// let king = 'john'

if(true){
    // let king = 'sam'
    if(true){
        // let king = 'Ram'
        king = 'Ram' // Not a good habit
        // If nothing is mentioned then it's treated as global 
        // so better to define it on top
        console.log(king)
    }
}

if(true){
    console.log('I am second part : ' + king)
}