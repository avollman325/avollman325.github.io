// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    // function will return true if input is an array and false if not
    return Array.isArray(value);
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
  //function will return true if an object and false if not
//if (Array.isArray()) return false;
//if ( value=== null) return false;
//if ( value instanceof Date) return false; 
//if (typeof (value) === Object) return true;

if (typeof value == 'object' && !Array.isArray(value) && value !== null && !(value instanceof Date)) {
        return true;
    }else {return false;}
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    
    // i used the same code as above except deleted the part about arrays because arrays come back as objects 
if (typeof value == 'object'  && value !== null && !(value instanceof Date)) {
        return true;
    }else {return false;}
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    
if(Array.isArray(value)) return "array";
//this checks if the value is an array and returns it as a string
if (value === null) return "null";
// same as above but for null
if (value instanceof Date) return "date"; 
//same as above but for date
if (typeof(value) === Object) return "object";
// same as above but for object
else return typeof(value);
//returns any value except for the above as a string
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
