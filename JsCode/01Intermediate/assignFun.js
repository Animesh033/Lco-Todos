let getMyGrade = function(currentMarks, totalMarks){
    let myPercent = (currentMarks/totalMarks) * 100

    let myGrade = ''
    if(myPercent >= 90){
        myGrade = 'A++'
    }else if(myPercent >= 80){
        myGrade = 'A+'
    }else if(myPercent >= 70){
        myGrade = 'A'
    }else if(myPercent >= 60){
        myGrade = 'B++'
    }else if(myPercent >= 50){
        myGrade = 'B'
    }else if(myPercent >= 40){
        myGrade = 'C'
    }else{
        myGrade = 'F'
    }

    return `Your grade is ${myGrade} and percentage is ${myPercent}`
}

let yourResult = getMyGrade(95, 100)

console.log(yourResult)