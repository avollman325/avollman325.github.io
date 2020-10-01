/* SCOPES: Scoping is determining where variables, functions, and objects are accessible in your code during runtime. 
*This means the scope of a variable(where it can be accessed) is controlled by the location of the variable declaration.
*
*In Javascript, there are two scopes:
* 1. Global Scope: There is only one Global scope throughout a JavaScript document. 
* A variable is in the Global scope if it’s defined outside of a function.
* You can also access and alter any variable declared in a global scope from any other scope.
*
*/
//Example of a variable in global scope


var carName = "Volvo";

// code here can use carName

function myFunction() {

  // code here can also use carName

}






/*
* 2. Local Scope:
*Variables declared within a function are in the local scope.
*Local scope is also called function scope because local scope is created by functions in Javascript.
*Variables in the local scope are only accessible within the function in which they are defined, i.e they are bound to their respective functions each having different scopes. 
*This allows us to create variables that have the same name and can be used in different functions.
*
*
*/

//Example of a variable in local scope


// code here can NOT use carName

function myFunction() {
  var carName = "Volvo";

  // code here CAN use carName

}



/*
*There is a variable in the global scope and a parameter with the same name, if you are within the function body which would you access? 
*If you were in the global scope which would you access? Why?
*/
//like in the example below you would access the global variable because functions have access to them
//in the global scope you would access the variable because you would not be able to access the function parameter

var a = 15;
function checkScope(a) {
    var a;
    console.log(a); // log outputs 15 and not undefined
}

checkScope(a);

