/*
    Go over basics of javascript for working on MERN stack project

    ! Js does not need ; at the end of a statement but better practice to use them
*/
// alert('Hello World'); // throws a message
console.log('Hello World'); // print to browser console
console.warn("basics.js");

/*------------------------ variables can be defined using --> var, let, const -------------------------*/

// var - not used as much, the variable is globaly scoped which can casue issues on larger projects
// let - allows to reassighn values
// const - constant, cannot be modified afer being defined

let age = 30;
age = 33;

const age1 = 31;
// age1 = 32; -> not allowed

console.log(age, age1);

/*------------------------ Basic types supported - String, Numbers, Boolean, null, undefined, Symbol ------------------------*/

// For stirngs can use single or double quotes
const name1 = 'John';
// for numbers there is no seperation for int, float, long etc
const floatNum = 3.0;
let intNum = 30;
// bool
const isTrue = true;
// null variable
const nil = null;
// undefined --> ???
let undef = undefined;
let something;

//---------------------------------------------------------------------------------------
// to check a variables type
let e = typeof floatNum;

/*---------------------------------------- String manipulation ---------------------------------------------------------------------- */
// concatinate
console.log('Hello ' + name1 + ' to js into');

// to print a variable `${variableName}` in a new way
// WARNING -> for string template do NOT use single or double quoptes, insted need yo use `(back tick)
console.log(`typeof ${e}`);
console.log(`type: ${e}`);

// string properties
const s = 'learn js';
// lenght
console.log(s.length);
// range
console.log(s.substring(0, s.length).toUpperCase());
// split the string into an array .spilt({char that is ussed as the seperator})
// if empty string ('')  is used, will seperate each letter
console.log(s.split(' '));

/*----------------------------------------------- Arrays -------------------------------------------------------------------*/
// !!! Arrays in js can have several types and you do not need to set the size of the array at creation
// def using a constructor
const array1 = new Array(1, 2, 3, 4);

// def using [] - more common way
let arrayCommon = [1, 2, 3, 4];

// setting an element in an array
array1[4] = 5;

// appending to array
// to the end of the array
array1.push(6);
// to the start of the array
array1.unshift(0);

//remove index from array
let temp = array1.pop();

// check if item is an array
temp = Array.isArray(1);

// get index of a value
temp = array1.indexOf(3);

console.log(array1, temp);

/* ---------------------------------------- Object literals/ -----------------------------------------*/
//object literals are objects
// create
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'games', 'coding'],
    // can have a literal inside a literal
    address: {
        street: "1234 main st",
        city: "Hollywood",
        zip: 33333
    }
};

// pull out certain values into variables of the same name
let {firstName, address} = person;

// getting a nested value - destucturing
let { address: {street}} = person;

// adding a valu to the obj
person.email = '1234@1234.com';

// how to access individual values in the object
console.log(person, person.firstName, person.hobbies[2], person.address.zip, firstName);

//----------------------------------------- array of objects --------------------------------------
const todos = [
    {
        id: 1,
        task: "Wash hands",
        isCompleated: true
    },
    {
        id: 2,
        task: "Clean room",
        isCompleated: false
    },
    {
        id: 3,
        task: "Make food",
        isCompleated: false
    }
];
console.log(todos[1].task);

// conver to json
const todosJSON = JSON.stringify(todos);

/*------------------------------------------ Loops -------------------------------------------------*/
// FOR loop
for (let i = 0; i < 10; i++){
    console.log(`Loop NR: ${i}`);
}
// itterate throught a list/array
for(let item of array1){
    console.log(`Itterate: ${item}`);
}



// WHILE loop
let i = 0;
while (i < 10){
    console.log(`while loop: ${i}`);
    i++;
}

//-----------------------------------------------
//High order array methods to itterate with arrays

// 1) forEach
// {array to travers}.forEach(function({variable name for each itteration}) {work with each item in array}))
array1.forEach(function(nr){
    console.log(`forEach: ${nr}`);
});

// .map - returns a new array, useful for getting specific variables of objects in the array 

const iter = todos.map(function(todo){
    return todo.task;
});
console.log(iter);

// .filter - find the items with a specific value

const compleat = todos.filter(function(todo){
    return todo.isCompleated == true;
// can call methods in succession 
}).map(function(i){
    return i.task;
});
console.log(compleat)