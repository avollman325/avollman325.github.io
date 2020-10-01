/* Hoisting:Hoisting in JavaScript is a feature in which the interpreter moves the function and variable declarations to the top of their containing scope.
*It means that variable declarations, wherever they occur, are processed before any code is executed.
*
* Functions and Variables are hoisted differently
* 
* Variables: Only the name is hoisted
*
* Functions: Name and body are hoisted
*
*This Means:
*
* 1. Variable: can be declared anywhere, are available anywhere in scope, and has no value until assigned
*/
// Example
// Outputs: undefined
//Basically, the JavaScript interpreter "looks ahead" to find all the variable declarations and "hoists" them to the top of the function.

console.log(declaredLater);

var declaredLater = "Now it's defined!";

// Outputs: "Now it's defined!"
console.log(declaredLater);



/*
* 2. Function: can be declared anywhere, available anywhere in scope, and is assigned value at all times.
*
*/
// example of an function being hoisted


// Outputs: "Yes!"
isItHoisted(); // the function is called before it is defined but because of hoisting it still works

function isItHoisted() {
    console.log("Yes!");
}


/*
* Javascript interpreter: the javascript interpreter reads through you code and figures out what you want to do.
* an interpreter is a program that converts high level source coude to low level machine code
* Example of an interpreter is google's V8
*
*
*/