/* Function definition in js */
console.warn('Functions.js')
// the parameters do not need a specific type
// to set default values can add --> num1 = 1
function addNums(num1 = 0, num2 = 0){
    return num1 +  num2;
}

console.log(addNums(5, 2));
console.log(addNums());

// arrow functions
const addNumArrow1 = (num1 = 0, num2 = 0) => {
    return num1 + num2;
}
// if only one line, do not need braces or return
const addNumArrow2 = (num1 = 0, num2 = 0) => num1 + num2;

console.log(addNumArrow1(5, 5));

// can be used to make functions smaller
const a = [1, 2, 3]
a.forEach((num) => console.log(num));