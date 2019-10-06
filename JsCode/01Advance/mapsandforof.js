var john = {
    name: 'I am john',
    age: 24,
    isActive: true
}

var marry = {
    name: 'I am marry',
    age: 23,
    isActive: true
}

var sam = {
    name: 'I am sam',
    age: 29,
    isActive: false
}

let users = new Map()
users.set('john', john)
users.set('marry', marry)
users.set('sam', sam)

console.log(users)
console.log(users.size) // 3
//size is property not function. Main difference from object i.e we can't find size in object like this
console.log(users.get('marry'))
console.log(users.keys())
console.log(users.values())

for (const key of users.keys()) {
    console.log(key)
}

for (const value of users.values()) {
    console.log(value)
}
for (const value of users.values()) {
    console.log(value.name)
}

for (const [key, value] of users.entries()) {
    console.log(key + ' = ' + value.name)
    // convert the above line in literals
}

users.forEach((value, key) => console.log(key + ' = ' + value.name))

var arrayofArray = [['One','1'], ['Two','2'],['Three','3']]

var newMap = new Map(arrayofArray)
console.log(newMap)