/*
 when you declare a variable using the var keyword, the scope of the variable is either global or local. If you declare a variable outside of a function, the scope of the variable is global. When you declare a variable inside a function, the scope of the variable is local.

 In strict mode, if you attempt to use an undeclared variable, you'll get a reference error when you run your code.

 Outside of strict mode, however, if you assign a value to a name that has not been declared with let, const, or var, you'll end up creating a new global variable. It will be global no matter how deeply nested within functions and blocks your code is, which is almost certainly not what you want, is bug-prone, and is one of the best reasons for using strict mode!

 Global variables created in this accidental way are like global variables declared with var: they define properties of the global object. But unlike the properties defined by proper var declarations, these properties can be deleted with the delete operator.

*/
//var statement declares a function-scoped or globally-scoped variable,
var x = 10;
if (x === 10) {
  var x = 20;
  console.log('inside the function ' + x); // expected output: 20
}
console.log('Outside the function ' + x); // expected output: 20
//Declaring global variable within function
window.value = 90;
// Declaring global variable by window object
function setValue() {
  window.value = 100;
}
// Accessing global variable from other function
function getValue() {
  setValue();
  return window.value;
}

console.log('Accessing global variable from other function ' + getValue()); // 100

/*
What are the differences between variables created using let, var or const?

Variables declared using the var keyword are scoped to the function in which they are created, or if created outside of any function, to the global object. 
var allows variables to be hoisted, meaning they can be referenced in code before they are declared.
Redeclaring a variable with var will not throw an error, but 'let' and 'const' will.

let and const are block scoped, meaning they are only accessible within the nearest set of curly braces
 let and const will not allow this, instead throwing an error.
let and const differ in that let allows reassigning the variable's value while const does not.
*/
/**
 * All variables are accessible within functions.
 */
function variableScope() {
  var x1 = 10;
  let y = 20;
  const z = 30;

  console.log(x1); // 10
  console.log(y); // 20
  console.log(z); // 30
}

//console.log('hi ' + x1); // ReferenceError: x is not defined
//console.log(y); // ReferenceError: y is not defined
//console.log(z); // ReferenceError: z is not defined

variableScope();
//let and const differ in that let allows reassigning the variable's value while const does not.
// This is ok.
let a = 'foo';
a = 'bar';
console.log(a); // bar

// This causes an exception.
const b = 'baz';
//b = 'qux';
//console.log(b); // TypeError: Assignment to constant variable.

/*
What are template literals in es6?

Template literals help make it simple to do string interpolation, or to include variables in a string.

Template literals, however, preserve whatever spacing you add to them. 
Another use case of template literals would be to use as a substitute for templating libraries for simple variable interpolations:

*/
const person = { name: 'Tyler', age: 28 };

console.log(`Hi, my name is ${person.name} and I am ${person.age} years old!`);
// 'Hi, my name is Tyler and I am 28 years old!'
console.log(`This is line one.
This is line two.`);
// This is line one.
// This is line two.
const persons = { name: 'Tyler', age: 28 };
document.getElementById('app').innerHTML = `
  <div>
    <p>Name: ${persons.name}</p>
    <p>Name: ${persons.age}</p>
  </div>`;

/*
   What is Hoisting in JavaScript?

Javascript hoisting refer to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.

Note: JavaScript only hoists declarations, not initialisation

Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

Hoisting allows functions to be safely used in code before they are declared.
  */

//function Hoisting ---- One of the advantages of hoisting is that it lets you use a function before you declare it in your code.
getName('Sadhika Sandal');
function getName(name) {
  console.log('Hello ' + name);
}
//variable Hoisting
console.log(message); // output: undefined
var message = 'The variable Has been hoisted';

var message1;
console.log(message1);
message1 = 'The variable Has been hoisted';

//let and const hoisting--- ll declarations (function, var, let, const and class) are hoisted in JavaScript, while the var declarations are initialized with undefined, but let and const declarations remain uninitialized.

//console.log(x1);
//let x1 = 10;
// Output: ReferenceError: x is not defined
