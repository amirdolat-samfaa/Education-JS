// alert("SALAM");

// Log To Consol
// console.log('Hello Word');

// console.log(123);

// console.log(true);

// var greeting = 'Hello';
// console.log(greeting);

// console.log([1,2,3,4,]);

// console.log({a:1, b:2});

// console.table({a:1, b:2});

// console.table([1,2,3,4,]);

// console.error('This Is Some Error');

// console.clear();

// console.warn('This Is a Warning');

// console.clear();

// console.time('Hello');
//     console.log('Hello World');
//     console.log('Hello World');
//     console.log('Hello World');
//     console.log('Hello World');
//     console.log('Hello World');
// console.timeEnd('Hello');

// console.clear();

// Var , Let , Const
// var name ='Amir Dolat';
// console.log(name);

// name = 'JavaScript';
// console.log(name);

// // Init Var
// var greeting;
// console.log(greeting);

// greeting = 'Hello';
// console.log(greeting);

// Letters , Numberes , _ , $
// Can Not Start With Numbers
// Var 1name = 'Ali';

// Multi Words Var
// var firstname;
// var firstName = 'Amir'; //Camel Case
// var first_name = 'Amir'; //Underscore
// var FirstName = 'Amir'; //Pascal Case

// Let
// let name;
// name = 'Amir Dolat';
// console.log(name);
// name ='Amir';
// console.log(name);

// Const
// const name ='Amir Dolat';
// console.log(name);
// Can Not Reassign
// name = 'Amir';

// const person ={
//     name: 'Amir',
//     age: 26
// }

// person.name = 'Amir Dolat';
// person.age = 25

// console.log(person);

// const numbers =[1,2,3,4,5];
// numbers.push(6,7,8,9,10);

// console.log(numbers);

// Data Types => Primitive Types , Refrence Types

// Primitive Types => Strings , Number , Boolean , Null , Undefined , Symbol

// Refrens Types - Object => Array , Object 

// Strings
// const name ='Amir Dolat';
// console.log(typeof name);

// Number
// const age = 26;
// console.log(typeof age);

// Boolean
// const hasMen = true;
// console.log(typeof hasMen);

// Null
// const car = null;
// console.log(typeof car);

// undefined
// let test;
// console.log(typeof test);

// Symbol
// const sym = Symbol();
// console.log(typeof sym);

// Refrnce Type - Object

// Array
// const hobbies = ['Movies' , 'Music'];
// console.log(typeof hobbies);

// Object
// const test1 = {
//     name: 'Amir',
//     age: 26
// }
// console.log(typeof test1);

// Number To String
// let val;
// val = String(555);
// console.log(val);
// console.log(typeof val);
// console.log(val.length);

// val = String(4+4);
// console.log(val);
// console.log(typeof val);
// console.log(val.length);

// Bool To String
// val = String(true);
// console.log(val);
// console.log(typeof val);
// console.log(val.length);

// Date To String
// val = String(new Date());
// console.log(val);
// console.log(typeof val);
// console.log(val.length);

// Array To String
// val = String([1,2,3,4]);
// console.log(val);
// console.log(typeof val);
// console.log(val.length);

// toString()
// val = (5).toString();
// console.log(val);
// console.log(typeof val);
// console.log(val.length);

// val = (true).toString();
// console.log(val);
// console.log(typeof val);
// console.log(val.length);

// Srting To Number
// val = Number('5');
// console.log(val);
// console.log(typeof val);

// val = Number('Hello');
// console.log(val);
// console.log(typeof val)

// Bool To Number
// val = Number(true);
// console.log(val);
// console.log(typeof val)

// Null To Number
// val = Number(null);
// console.log(val);
// console.log(typeof val);

// Array To Number
// val = Number([1,2,3]);
// console.log(val);
// console.log(typeof val);

// val = parseInt('100');
// console.log(val);
// console.log(typeof val);

// val = parseFloat('100.900');
// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed(3));

// Math
// const num1 = 80;
// const num2 = 20;
// let val;

// Simple Math With Numbers
// val = num1 + num2;
// val = num1 - num2;
// val = num1 * num2;
// val = num1 / num2;
// val = num1 % num2;

// console.log(val)

// Math Object
// val = Math.PI;
// console.log(val);

// val = Math.E;
// console.log(val);

// val = Math.round(5.3);
// console.log(val);

// val = Math.ceil(5.3);
// console.log(val);

// val = Math.floor(5.7);
// console.log(val);

// val = Math.sqrt(16);
// console.log(val);

// val = Math.abs(-35);
// console.log(val);

// val = Math.pow(5, 2);
// console.log(val);

// val = Math.min(5,15,25,44,3,75);
// console.log(val);

// val = Math.max(5,55,45,87,100,-250);
// console.log(val);

// val = Math.random();

// val = Math.random() * 5 + 1;
// console.log(val);

// val = Math.floor(Math.random() * 5 + 1);
// console.log(val);

// Srtings
// const firstName = 'Amir';
// const lastName = 'Dolat';
// const age = '26';

// let val;

// val = firstName + lastName;
// console.log(val);

// Concatenation
// val = firstName + ' ' + lastName;
// console.log(val);

// Append
// val = 'Web ';
// val += 'Prog';
// console.log(val);

// val = 'Hello My Name Is ' + firstName + ' and I am ' + age;
// console.log(val);

// ES6
// val = ` Hello, my name is ${firstName} and I am ${age} `;
// console.log(val);

// Length
// val = firstName.length;
// console.log(val);

// Concat()
// val = firstName.concat(' ', lastName);
// console.log(val);

// Change Case
// val = firstName.toUpperCase();
// console.log(val);

// val = firstName.toLowerCase();
// console.log(val);

// val = firstName[1];
// console.log(val);

// IndexOf()
// val = firstName.indexOf('r');
// console.log(val);

// charAt
// val = firstName.charAt('1');
// console.log(val);

// Get Last Char
// val = firstName.charAt(firstName.length - 1);
// console.log(val);

// Substring()
// val = firstName.substring(0, 2);
// console.log(val);

// Slice()
// val = firstName.slice(0, 2);
// console.log(val);

// Split()
// const str = 'Hello My name is Amir';
// val = str.split(' ');
// console.log(val);

// const tags = 'Webprog , Webdesign , Web development , Programming';
// val = tags.split(',');
// console.log(val);

// Replace
// const str = 'Hello My name is Amir';
// val = str.replace('Amir', 'Amirmohammad');
// console.log(val);

// val = str.includes('Amir');
// console.log(val);

// Create Some Arrays
// const numbers = [45,52,26, 9, 75,25,13,65];

// const numbers2 = new Array(54,56,51,53);

// const fruit = ['Apple', 'Orange', 'Banana', 'Pear'];

// const mixed = [22, 'Hello', true, undefined, null, {a:1, b:2}, new Date()];

// console.log(numbers);

// let val;

// Get Array length
// val = numbers.length;
// console.log(val);

// Check if is Array
// val = Array.isArray(numbers);
// console.log(val);

// Get Single Value
// val = numbers[3];
// console.log(val);

// Insert into Array
// numbers[2] = 100;
// console.log(numbers)

// Find index of Value
// val = numbers.indexOf(75);
// console.log(val);

// Mutating Array
// Add on to End
// numbers.push(250);
// console.log(numbers);

// Add on to Front
// numbers.unshift(550);
// console.log(numbers);

// Take of from End
// numbers.pop();
// console.log(numbers);

// Take of from End
// numbers.shift();
// console.log(numbers);

// Splice Value
// numbers.splice(1,3);
// console.log(numbers);

// Reverse
// numbers.reverse();
// console.log(numbers);

// Concatenate Array
// val = numbers.concat(numbers2);
// console.log(val);

// Sorting Array
// val = fruit.sort();
// console.log(val);

// val = numbers.sort();
// console.log(val);

// Use the "Compare Function"
// val = numbers.sort(function(x, y){
//     return x - y;
// });
// console.log(val);

// Reverse Sort
// val = numbers.sort(function(x, y){
//     return y - x;
// });
// console.log(val);

// const person = {
//     firstName : 'Amir',
//     lastName : 'Dolatabadi',
//     age : 25,
//     email : 'amirmohammad.learning@gmail.com',
//     hobbies : ['music', 'sports'],
//     address :{
//         city : 'teh',
//         state : 'bar'
//     },

//     getBirthYear : function(){
//         return 1401 - this.age;
//     }
// }

// let val;

// val = person;
// console.log(val)

// Get specific Value
// val = person.firstName;
// console.log(val);

// val = person['lastName'];
// console.log(val);

// val = person.age;
// console.log(val);

// val = person.hobbies[1];
// console.log(val);

// val = person.address.city;
// console.log(val);

// val = person.address['state'];
// console.log(val);

// val = person.getBirthYear();
// console.log(val);

// if(something){
//     do something
// } else{
//     do something else
// }

// const id = 60;

// Equal To
// if(id == 60){
//     console.log('yes');
// } else {
//     console.log('no');
// }

// Not Equal To
// if(id != 60){
//     console.log('yes');
// } else {
//     console.log('no');
// }

// Equal To Value & Type
// if(id === 60){
//     console.log('yes');
// } else{
//     console.log('no');
// }

// Not Equal To Value & Type
// if(id !== 60){
//     console.log('yes');
// } else {
//     console.log('no');
// }

// Test id undefined
// if(typeof id !== 'undefined'){
//     console.log(`The ID is ${id}`);
// } else {
//     console.log('NO ID')
// }

// Greater Or Less Than
// if(id > 50){
//     console.log('yes');
// } else {
//     console.log('no')
// }

// If Else
// const color = 'Red';

// if (color === 'Red'){
//     console.log('Color is Red');
// } else if (color === 'Blue'){
//     console.log('Color is Blue');
// } else {
//     console.log('Color is not Blue Or Red')
// }

// Logical Operators

// const age = 15;

// AND &&
// if (age > 0 && age < 12){
//     console.log('If');
// } else if (age >= 13 && age <= 19){
//     console.log('Else If');
// } else {
//     console.log('Else');
// }

// OR ||
// if(age < 16 || age > 56){
//     console.log('yes');
// } else {
//     console.log('no');
// }

// Ternary Operator
// console.log(id === 75 ? 'yes' : 'no');

// Without Braces
// if(id === 60)
//     console.log('yes');
// else
//     console.log('no');

// Switch

// const color = 'Red';

// switch(color){
//     case 'Red':
//         console.log('Color is Red');
//         break;
//     case 'Blue':
//         console.log('Color is Blue');
//         break;
//     default:
//         console.log('Color is Not Red Or Blue');
//         break;
// }

// Function Declarations
// function add(x=2,y=4) {
//     return x + y;
// };
// console.log(add(1,19));

// Function Expressions
// const add = function(x=2,y=4){
//     return x + y;
// };
// console.log(add());

// Arrow Function Expressions
// const add = (x,y) => x+y;
// console.log(add(5,4));

// Immidiatley Invokable Function Expressions - IIFEs
// (function(){
//     console.log('IIFE Run...')
// })();

// (function(name){
//     console.log('Hello '+ name);
// })('Amir');

// LOOPS

// FOR LOOP
// for(let i = 0; i < 10; i++){
//     console.log('Number '+ i)
// }

// WHILE LOOP
// let i = 0;
// while(i <= 10){
//     console.log('Number ' + i);
//     i++;
// }

// DO WHILE
// let i = 0;
// do {
//     console.log('Number ' + i);
//     i++;
// }
// while( i < 10);

// LOOP THROUGH ARRAY
// const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for(let i = 0; i < cars.length; i++){
//     console.log(cars[i]);
// }

// FOREACH
// cars.forEach(function(car){
//     console.log(car);
// });

// MAP
// const users = [
//     {id: 1, name: 'Amir'},
//     {id: 2, name: 'Ali'},
//     {id: 3, name: 'Abbas'},
//     {id: 4, name: 'Sara'},
//     {id: 5, name: 'Hanie'},
// ];

// const ids = users.map(function(user){
//     return user.id;
// });
// console.log(ids);

// FOR IN LOOP
// const user = {
//     firstName: 'Amir',
//     lastName: 'Dolatabadi',
//     age: 25
// }
// for(let x in user){
//     console.log(`${x} : ${user[x]}`);
// }

// Global Scope
// var a = 1;
// let b = 2;
// const c = 3;

// function test() {
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log('Function Scope: ', a, b, c);
// }
// test();
// console.log('Global Scope: ', a, b, c);

// if(true){
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log('If Scope: ', a, b, c);
// }
// console.log('Global Scope: ', a, b, c);

// for(let b = 0; b < 10; b++) {
//     console.log(`Loop: ${b}`);
// }
// console.log('Global Scope: ', a, b, c);

// MAPS = Key - Value Pairs - Can Use ANY Types As A Key Or Value

// let person = new Map();

// person.set('Person1',{
//     firstName: 'firstName1',
//     lastName: 'lastName1'
// });
// console.log(person);
// person.set('Person2',{
//     firstName: 'firstName2',
//     lastName: 'lastName2'
// });
// console.log(person);

// console.log(person.get('Person1').firstName);

// person.set('string','Just a Text');
// console.log(person);

// console.log(person.get('string'));

// person.set( 'Trigger' , function(){ console.log('Hello') } );
// console.log(person);
// person.get('Trigger')();

// console.log(person.size);
// console.log(person);

// console.log(person.has('Person2'));
// console.log(person);

// console.log(person.delete('Person1'));
// console.log(person);

// person.clear();
// console.log(person);

// SETS - Store Unique Values Of Any Type

// const set1 = new Set();

// Add Values to Set
// set1.add(100);
// set1.add('A String');
// set1.add({name: 'Amir'});
// set1.add(true);

// console.log(set1);

// const set2 = new Set([1, true, 'String']);
// console.log(set2);

// Get Count
// console.log(set1.size);

// Check For Values
// console.log(set1.has(100));
// console.log(set1.has({name: 'Amir'}));

// Delete From Set
// console.log(set1.delete(100));
// console.log(set1);

// set1.clear();
// console.log(set1);

// Destructuring Assignment

// let a, b;
// [a, b] = [100, 200];

// console.log(a);

// Rest Pattern
// [a, b, c, ...rest] = [100, 200, 300, 400, 500];
// console.log(rest);
// ({a, b} = {a:100, b:200, c:300, d:400, e:500});
// console.log(a);

// ({a, b, ...rest} = {a:100, b:200, c:300, d:400, e:500});
// console.log(rest);

// Array Destructuring

// const people = ['Amir', 'Ali', 'Abbas'];
// const [person1, person2, person3] = people;
// console.log(person1, person2, person3);

// Object Destructuring

// const person = {
//     name: 'Amir Dolatabadi',
//     age: 25,
//     city: 'Teh',
//     grnder: 'Male',
//     seyHello: function(){
//         console.log('Hello')
//     }
// }

// OLD ES5
// const name = person.name,
//       age = person.age,
//       city = person.city;
// console.log(name, age, city);

// New ES6 Destructuring
// const {name, age, city, seyHello } = person;
// console.log(name, age, city);
// seyHello();

// Find & Filter
// const products = [
//     {name:'ipad', category:'devices'},
//     {name:'LG', category:'TV'},
//     {name: 'iphone', category:'phones'},
//     {name:'supervision', category:'TV'},
// ];

// const result = products.find(function(product){
//     return product.category == 'TV'
// });
// console.log(result);

// const sum = 200;

// export default sum;

// const othersum = 500;

// function random(){
//     return Math.random();
// };

// const Array = [1,2,3,4,5];

// const obj = {a:1, b:2, c:3};

// export {
//     sum as sum1,
//     othersum,
//     random,
//     Array,
//     obj
// };

// BOM

// let val;

// Location Object
// val = window.location;
// console.log(val);

// val = window.location.href;
// console.log(val);

// window.location.href = 'https://samfaa.ir';

// val = window.navigator;
// console.log(val);

// DOM

