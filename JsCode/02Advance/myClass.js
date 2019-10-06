class User{
    constructor(firstname, lastname, credit){
        this.firstname = firstname
        this.lastname = lastname
        this.credit = credit
    }

    getFullName(){
        let fullName = `${this.firstname} ${this.lastname} is my full name.`
        return fullName
        //do this in just 1 line
    }
    editName(newname){
        const myName = newname.split(" ")
        this.firstname = myName[0]
        this.lastname = myName[1]

        //take a middle name too
    }
}


class Teacher extends User{
    constructor(firstname, lastname, credit, subject){
        super(firstname, lastname, credit)
        this.subject = subject
    }
    getFullName(){
        let fullName = `${this.firstname} ${this.lastname} is my full name and i teach ${this.subject}.`
        return fullName
    }
    favDrink(name){
        console.log(`My fav. drink is ${name}`)
    }
}
// const john = new User('Animesh', 'Kumar', 23)
const john = new Teacher('Animesh', 'Kumar', 23, 'Python')

console.log(john)
// const sammy = new User()
// console.log(sammy)

console.log(john.getFullName())

john.editName("Anni yadav")
console.log(john.getFullName())

john.favDrink('Ice Tea')