/* Constructing objects */
// to define a object 
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob); // cast to Date obj
    this.getYear = function(){ // define an object function
        return this.dob.getFullYear;
    }
}

// to define functions that do not need to be part of the object everytime --> use Object.prototype.{function name}() {
//    }
Person.prototype.getFullName = function(){
    return this.firstName + ' ' + this.lastName;
}

// Instantiate object
const obj = new Person('jim', 'oof', '4-3-1996');
console.log(obj);
console.log(obj.dob.getDate);
console.log(obj.getYear(), obj.getFullName())

/*--------------------------- Constructing classes --------------------------*/
// Same as creating an object, but easier to read

// crete a class
class Person1 {
    // in js constructore creates the object and sets values - same as before
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // to define a function in a class you do not need to use  function operator
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

const personObj = new Person1('matt', 'skirk');
console.log(personObj);
