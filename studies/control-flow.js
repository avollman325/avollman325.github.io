/* Control Flow:
* Conditional statements allow of to control the flow of our application
* We can make decisions in our code by asking true or false questions.
* Based on the answer, we decide what code to run
*/

/* 4 types of conditional statements:
* 1. If
* 2. If-else
* 3. else
* 4. switch
*/

// If Statment: Use the if statement to specify a block of Java code to be executed if a condition is true.
//example
var x = 20;
var y = 18;
if (x > y) {
 console.log("x is greater than y");
}
// prints 'x is greater than y'

// else Statement: Use the else statement to specify a block of code to be executed if the condition is false.
// Example
var  time = 20;
if (time < 18) {
  console.log("Good day.");
} else {
  console.log("Good evening.");
}
// prints "Good evening."

// Else/if  statement: Use the else if statement to specify a new condition if the first condition is false.

//Example

var time = 22;
if (time < 10) {
  console.log("Good morning.");
} else if (time < 20) {
  console.log("Good day.");
} else {
  console.log("Good evening.");
}
// prints "Good evening."



/*Switch statement: Use the switch statement to select one of many code blocks to be executed.
*The switch expression is evaluated once.
*The value of the expression is compared with the values of each case.
*If there is a match, the associated block of code is executed.
*The break and default keywords are optional, and will be described later in this chapter
*/ 
//Example

var day = 4;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
}
// prints "Thursday" (day 4)
