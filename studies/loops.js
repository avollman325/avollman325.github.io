/* Loops are used in JavaScript to perform repeated tasks based on a condition. 
*Conditions typically return true or false when analysed. 
*A loop will continue running until the defined condition returns false.
* 3 Common types of loops:
*/

/* For loop:
*The javascript for statement consists of three expressions and a statement:
*
*
*initialization - Run before the first execution on the loop. This expression is commonly used to create counters. Variables created here are scoped to the loop. Once the loop has finished it’s execution they are destroyed.
*condition - Expression that is checked prior to the execution of every iteration. If omitted, this expression evaluates to true. If it evaluates to true, the loop’s statement is executed. If it evaluates to false, the loop stops.
*final-expression - Expression that is run after every iteration. Usually used to increment a counter. But it can be used to decrement a counter too.
*statement - Code to be repeated in the loop
*/
// For loops can be used to loop over an array. This is an example of looping through an array forward

    var arr = [ 1, 2, 3 ];
    for (var i = 0; i < arr.length; i++) {
       console.log(arr[i]);
    }

/*    output:
*    1
*    2
*    3
*/


// This is an example of a for loop, looping through an array backwards

    var arr = [ 1, 2, 3 ];
    for (var i = arr.length - 1; i >= 0; i--) {
       console.log(arr[i]);
    }

/*    output:
*    3
*    2
*    1
*/


// 2. For/ In Loop: loops through the properties of an object

// Example of a For/In loop


var person = {fname:"John", lname:"Doe", age:25};
 for(var key in person){
    console.log(person[key]);
  } 
/* Prints 
 * John
 * Doe
 *25
 */
 
 /*While Loops:The while loop starts by evaluating the condition. 
 *If the condition is true, the statement(s) is/are executed.
 *If the condition is false, the statement(s) is/are not executed. 
 */
 
 // Example of a while loop
    var i = 0;
while (i <= 5) {
  console.log(i);
  i++;
}
/* Output:
 *1 
 *2 
 *3 
 *4
 *5

 */