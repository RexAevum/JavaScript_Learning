/* Conditionals */

// can use either == or === for equality
// ==   will match the value and not type
// ===  will match both value and type
console.warn('conditionals.js\n\n')

const x = '10';
const y = 10;

if (x === y){ // value and type is the same
    console.log('x === y');
}
else if(x == y){ // the value is the same
    console.log('x == y');
}else{
    console.log(`x != y`)
}

// or
const t = 10;
if (t > 5 || t === 0){
    // do work
}

//and
if (t > 5 && t != 0){
    //do work
}

// turnary condition
// {condition} ? {if true this} : {else this}
const color = x > 10 ? 'green' : 'red';
console.log(color);

// switch
switch(color){
    case 'red':
        console.log('Color is red');
        break;
    case 'green':
        console.log('Color is green');
        break;
    default:
        console.log('Not red or green')
        break;
}
