AudioListener(`hello world`);

console.log(`hello world`);
console.error(`this is an error`);
console.warn(`this is a warning0`):

// let, const

const age = 30;
age=31;

console log(age);

let score; 

score= 10;

console. log(socre);

// strings, numbers, booleqans, null, undefined

const name = `john`;
const age = 30;
const isCool = true; 
const rating = 4.5;
const x = null; 
const y = undefined; 
let z; 

console.log(typeof name);

//concatenation
console.log('my name is' +name + 'and i am ' +age) ; 
// tempakate strings
const  hello = `My name is ${name} and i am ${age};

    console.log(hello);
cosnt s = 'hello world!'; 

console.log(s.substring(0,5). toUpperCase());

console.log(s.split(', '));
//Arrays - variables that hold multiple values

/* multi
line
comment */

const numbers = new Array(1,2,3,4,5);

console.log(numbers);

const fruits = ['apples', 'oranges', 'pears'];

fruits[3] = 'grapes';

console.log(fruits);

fruits.push('mangos');

fruits.usshift('strawberries');

fruits.pop();

console.log(Array.isArray(fruits));

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
        }
    }

console.log(person.firstName, person.lastName);

console.log(person.hobbies[1]);

console.log(person.address.city);


const { firstName, lastName, address: { city } } = person;

console.log(firstName, city);
person.email = ''; 
console.log(person);

const todos = [
{
    id: 1,
    text:  'Take out trash',
    isCompleted: true
     }
]; 
const todos = [
{
    id: 2,
    text:  'Meeting with boss',
    isCompleted: true
     }
]; 
const todos = [
{
    id: 1,
    text:  'Dentist appt',
    isCompleted: true
     }
]; 

const todoJSON = JSON.stringify(todos); 
console.log(todoJSON);

// For
for(let i = 0; i < todos.length; i++) {
        console.log(`for loop: (${todos[i].text}`);
}

// While
let i = 0;
while(1 <10) {
    console.log(`While Loop Number: ${i}`);
    i++;   
for(let todo of todo){
    console.log(todo .text);
}

// forEach, map, filter
todos.forEach(function(todo){
 console.log(todo.text);
 const todoText = todos.map(function(todo)
 return todo.text;
 .map(function(todo) {
 return todo.text;
};

console.log(todoText);


const x = 4;
const y = 10;
if(x > 5) {
    console.log('x is 10');
} else if (x > 10) {
    console.log('x is greater than 10');
} else {
    console.log('x is less than 10');
    }

    const x= 10;
    const color = x > 10 ? 'red' : 'blue';

    switch(color) 
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        cold console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
    }

const addNums = num1 => num1 + 5;
console.log(addNums(5));

todos.forEach((todo) => console.log(todo.text));

function Person(firstName, lastName, dob) {
this.firstName = firstName;
this.lastName = lastName;
this.dob = new Date(dob);
this.getBirthYear = function() {
    return this.dob.getFullYear();
}
    this.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
    }
}

//class
clss Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }


// Instantiate object
cosnt person1= new Person('John', 'Doe', '4-3-1980');
cosnt person2= new Person('Mary', 'Smith', '3-6-1970'); 

console.log(person1.getBirthYear);
person.protoype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}
    prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;

//single element
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));

//multiple elements
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));


const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');

//ul.remove();

ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';

ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';
u
const btn = document.querySelector('.btn');
btn.style.background = 'red';

cnst btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.className);
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
    };

    cosnt myForm = document.querySelector('#my-form');
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const msg = document.querySelector('.msg');
    const userList = document.querySelector('#users');
    
    myForm.addEventListener('submit', onSubmit);

    function onSubmit(e) {

        e.preventDefault();
        if(nameInput.value === '' || emailInput.value === '') { 
            msg.classList.add('error'); 
            msg.innerHTML = 'Please enter all fields';      
            setTimeout(() => msg.remove(), 3000);   
        } else {    
            const li = document.createElement('li');

            li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
            userList.appendChild(li);   
            // Clear fields 
            nameInput.value = '';
            emailInput.value = '';
        }
    }          
