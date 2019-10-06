const student = {
    name: 'Animesh',
    age: 23,
    isActive: true,
}

// convert this object into string to be stored in local storage
const studentObjToString = JSON.stringify(student)
console.log(typeof(studentObjToString))

// localStorage.setItem('student', studentObjToString)

const studentStringToJSON = JSON.parse(studentObjToString)
console.log(typeof(studentStringToJSON))
console.log(studentStringToJSON.age)