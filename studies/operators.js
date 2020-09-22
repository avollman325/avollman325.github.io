/* OPERATORS:
* 1. Operators act on our data, like assigning them to a variable or comparing them, or include them in arithmetic operations.
* 2. Operators are classed by what they do and how many operand they require.
* 3. operands are the values that operators act on. Unary operators only work with 1 value, binary with 2, and ternary with 3.
*/

// ASSIGNMENT OPERATORS: "="" used to assign a value to something
// example of an assignment operator
var a = 5;

// COMPARISON OPERATORS: compare 2 values and evaluate to a boolean, true or false.

// 1. Binary comparison operators are : >, <, <=, >=
// example of binary comparison operators 
console.log(50 < 100);
// this will return a boolean value true

// 2. STRICT COMPARISON OPERATORS:  take into accout both value and type. ===(strictly equal to), !== (strictly not equal to)
//example of strict comparison operators
console.log( 9 ==="9");
// will return false because 9 is a number while "9" is a string.

/*UNARY OPERATORS : A unary operator is one that takes a single operand/argument and performs an operation.
* Unary plus (+)	Tries to convert the operand into a number
*Unary negation (-) *	Tries to convert the operand into a number and negates after
*Logical Not (!)	Converts to boolean value then negates it
*Increment (++)	Adds one to its operand
*Decrement (--)	Decrements by one from its operand
*Bitwise not (~)	Inverts all the bits in the operand and returns a number
*typeof	Returns a string which is the type of the operand
*delete	Deletes specific index of an array or specific property of an object
*void	Discards a return value of an expression.
*/
// example of unary operator
var b = 6;
b++;
console.log(b);
// this will return 7 because of the ++ operator

//LOGICAL OPERATORS: There are three logical operators in JavaScript: || (OR), && (AND), ! (NOT).
let hour = 9;

if (hour < 10 || hour > 18) {
  console.log( 'The office is closed.' );
}
// this will return "the office is closed" because the hour is outside of 10 and 18

// ARITHMETIC OPERATORS: Include +, -, *, /, %. 
// Example of Arithmetic operator
console.log(5/5);
//This will return 1 as (/) is the division operator. 

/* TERNARY OPERATOR: 
*In general, the syntax of the ternary operator is as follows:
*
*condition ? expression_1 : expression_2;
*The JavaScript ternary operator is the only operator that takes three operands.
*
*The condition is an expression that evaluates to a Boolean value, either true or false. 
*If the condition is true, the ternary operator returns expression_1, otherwise it returns the expression_2.
*EXAMPLE OF A TERNARY OPERATOR
*/
var age = 19;
var canDrive = age > 16 ? 'yes' : 'no';
console.log(canDrive);
// Returns yes because age is greater than 16