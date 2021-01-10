console.log(window); // parent object of the browser
//window.alert() === alert(); since it is the top level obj

// SINGLE element selectors - will only return the first instance of the element
// the .getElementById --> will return segment of html that is included under the id (html code)
const byID = document.getElementById('my-form');
console.log(byID);

// will select element using jquery, can request any element of DOM - use this most
    // ex. 'h1'(element), '.container' (a class), 'my-form' (id) etc
const query = document.querySelector(`.container`); // a class needs to be prefixed with a .

// Multiple element selectors
// get any type of element
const itemMulti = document.querySelectorAll('.item'); //use this 

//get only by classes - no . since its a class anyway
console.log(document.getElementsByClassName('item')); //returns collection, so cannot use array functions

// when using .querySelector()
itemMulti.forEach(function(item){
    console.log(item);
})

//-----------------------------------------------------------------------------
const ul = document.querySelector('.items');

// can call methods that modify the html
//ul.remove(); // does not render section of .items

//remove last item from a list in html
ul.lastElementChild.remove();

// set a specific item to value
ul.firstElementChild.textContent = 'Hello World';

// it creates a nodelist of all childern of the specified section
ul.children[1].innerText = 'Second child';
//can do the same with html notation
ul.children[2].innerHTML = '<h4>Third line</h4>';

// change style
const btn = document.querySelector('.btn');
// can adjust the style of the button - check css for what you can change
btn.style.background = 'red';

// event listener - what to do when an event happens
// .addEventListener ({event type ex `click`, 'mouseover', 'mouseout'}, ({event variable name for reference}) => {})
btn.addEventListener('click', (e) => {
    //e.preventDefault(); // prevent the default behavior of the element 
    console.log(e.target);// return html line that's ran
    console.log(e.target.className); // return class name of the ran executed element
    console.log(e) // return the event

    // change the background of a page element when button is pressed
    document.querySelector('#my-form').style.background = '#ccc';
    // change the background of the html body to a style in css
    //document.querySelector('body').classList.add('bg-dark');
    //
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1.'
});

//------------------------------------------------------------------------------
// make the page functional
// 1) get elements form the page and asighn to variables
const myForm = document.querySelector('#my-form');
//
const nameIn = document.querySelector('#name'); // the # before is to specify that its referencing an id in html
//
const emailIn = document.querySelector('#email');
// 
const msg = document.querySelector('.msg');
//
const users = document.querySelector('#users');

// listen for submit - when the button is pressed
myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    //
    if(nameIn.value === '' || emailIn.value === ''){
        // add error styling to the message if it fails
        msg.classList.add('error');// always a class
        //print to the msg field
        msg.innerHTML = 'Please enter all fields';
        // add a time for how long the message stays
        // setTimeout ({function to run after timer}, {time out interval in miliseconds})
        setTimeout(() => msg.remove(), 5000);

    }else{
        // create a new element in the html file
        const li = document.createElement('li');
        // create a new list item with the user entered values - add something inside of the new element
        li.appendChild(document.createTextNode(`${nameIn.value} : ${emailIn.value}`));
        // append the new element to the user list
        users.appendChild(li);
        // clear fields
        nameIn.value = '';
        emailIn.value = '';

    }
}