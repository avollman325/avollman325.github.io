/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/*CONSTANTS:
*0. containers whose value never changes, they are block scoped and not hoisted to the top of their block scope.
*1. To create a constant the keyword "const" must be assigned a value immediately.
* you can not leave a constant unassigned or undefined. some formatting styles recommend using all UPPERCASE letters for constants.
*/

// an example of a constant being declared and assigned

const EYE_COLOR = "blue";

// after initializing the constant eye color, if you tried to change it, it would not because constants do not change while in scope

/* Lets
* 0. lets are containers for reassignable values,  they are not hoisted to the top of the code block.
*
* 1. the let keyword allows us to declare a block scope local variable. Used inside a block, let limits the variables scope to that block.
*/

// example of let.

let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x);
  // expected output: 2
}

console.log(x);
// expected output: 1

/*
*  Hoisting
* 0. Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
* Variables defined with let and const are hoisted to the top of the block, but not initialized.
*Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.
*Using a let or const variable before it is declared will result in a ReferenceError.
*/







