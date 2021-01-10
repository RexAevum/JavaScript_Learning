/* Module Wrapper Function - the current file (person) is wraped in this function */
// (function (exports, require, module, __filename, __dirname){
// });

// can check the file paths and file name
// console.log(__filename + '\n' + __dirname)

// create an object
const person = {
    firstName: 'John',
    lastName: 'Smith',
    age: 30
}

//or create a class
class Person{
    constructor(name, lastName, age){
        this.firstName = name;
        this.lastName = lastName;
        this.age = age;
    }

    greeting(){
        console.log(`My name is ${this.firstName} ${this,this.lastName} and I am ${this.age} years old.`)
    }
}

// export he object using module.export to make it accessable in other files (like index.js)
//module.exports = person;
module.exports = Person; // only one of them will be exported, the last call overrides call before