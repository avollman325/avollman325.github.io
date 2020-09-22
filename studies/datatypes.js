/* DATATYPES: There are many different datatypes in java script but we can break them into 2 catagories:
* 1.Primitive Data: A primitive data value is a single simple data value with no additional properties and methods.
* Primitive values are passed to a function by Copy by value.
* This means:When we access a primitive data type, we work on its value. 
* When we assign primitives to the variable, we copy the value. 
* If any changes are made to the variable copied, the original variable will not be affected by them.
* These include: strings, numbers, booleans, null, undefined 
*
*
*
* 2. Complex Data:complex values aggregate other values and there for are of indefinite size
* complex data is copy by reference.
* this means: when you pass an object to a function, you are passing the reference of that object, not the actual object (computer). 
*Therefore, the function can modify the properties of the object via its reference.
*In addition, when you pass an object into a function, the function cannot change the reference variable to reference another object.
* These include: Objects, arrays, functions, Etc.
*/


/*A String (or a text string) is a series of characters like "John Doe".

Strings are written with quotes. You can use single or double quotes:
*/
//Example
var carName1 = "Volvo XC60";   // Using double quotes
var carName2 = 'Volvo XC60';   // Using single quotes

//Numbers can be written with, or without decimals:

//Example
var x1 = 34.00;     // Written with decimals
var x2 = 34;        // Written without decimals

//Booleans can only have two values: true or false.

//Example
var x = 5;
var y = 5;
var z = 6;
console.log(x === y)       // Returns true
console.log(x === z)       // Returns false


// Undefined 
//A variable that has not been assigned a value has the value undefined
var car;    // Value is undefined, type is undefined

// Null
//null is "nothing". It is supposed to be something that doesn't exist.
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
person = null;    // Now value is null

// Objects are written with curly braces {}.

//Object properties are written as name:value pairs, separated by commas.

//Example
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

// Arrays are written with square brackets.

//Array items are separated by commas.
//Example
var cars = ["Saab", "Volvo", "BMW"];

/*FUNCTIONS:
*Allow us to encapsulate a block of code and run it whenever we want.
*A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
*
*Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
*
*The parentheses may include parameter names separated by commas:
*(parameter1, parameter2, ...)
*
*The code to be executed, by the function, is placed inside curly brackets: {}
*/
 
 function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}

myFunction(4, 3);   // Function is called, returns 12

/* NaN: Not a number
*NaN is not a keyword (unlike true, false, null, etc..), it is a property of the global object.
*There are several ways in which NaN can happen:
*Division of zero by zero
*Dividing an infinity by an infinity
*Multiplication of an infinity by a zero
*Any operation in which NaN is an operand
*Converting a non-numeric string or undefined into a number
*/
//Example

console.log(0/0); // returns NaN

/* Infinity: The number Infinity is a special value in JavaScript that represents mathematical infinity and overflow values 
* numbers so large they “overflow” the buffer and result in Infinity.
*/


//Example
console.log(1/0)         // Infinity

// Negative infinity: number so low it results in - infinity 

//example 

console.log(1/-0)                      // -Infinity