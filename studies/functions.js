/* FUNCTIONS:
* 1. Allow us to encapsulate a block of code and run it whenever we want.
* 2.where numbers are numeric date, and strings are character data, you can think of functions as logic data. 
* 3. 2 Phases of using functions. Phase 1 = declaration/definition: creating the function. Phase 2 = Call/execute/invoke: using the function.
* 4. The syntax of a  named function is as follows:
*
*A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
*
*Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
*
*The parentheses may include parameter names separated by commas:
*(parameter1, parameter2, ...)
*
*The code to be executed, by the function, is placed inside curly brackets: {}
*/
function name(parameter1, parameter2, parameter3) {
  // code to be executed
 }
 
/*Parameters are variables listed as a part of the function definition. 
*Arguments are values passed to the function when it is invoked. Arguments are inputs
*Function Return: is the output of the function
*When JavaScript reaches a return statement, the function will stop executing.
*
*If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.
*
*Functions often compute a return value.
*/

function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}

myFunction(4, 3);   // Function is called, returns 12

//Functions do not have to be named, functions can be assigned to variables and constants or constants, or be anonymous 

// example of a function stored in a variable

var x = function myFunction(a, b) {
  return a * b;            
};

console.log(x(5,3));

// returns 15


//Scope: Functions can see and modify data in for parent and global scope. the inverse is not true though

/*Closures: Functions form closures around the data they house. 
*if an object returned from the function and is held in memory somewhere, that closure stays alive, and data can continue to exist in these closures.
*/
// example of closure
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12


