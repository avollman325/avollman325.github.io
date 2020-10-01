//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    //create an array and push the values into the array and return it 
 var array = []; 
 for (var key in object){
     array.push(object[key]);
 }return array;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//push the keys into the array and return them as a string 
function keysToString(object) {
  var array = [];
  for (var key in object){
     array.push(key);
     array.toString();
  }return array.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//push the values into the array and return them as a string 
function valuesToString(object) {
    var array = [];
  for (var key in object){
     if(typeof object[key] === "string"){
        array.push(object[key]);
     }
  }return array.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (typeof collection == 'object'  && !Array.isArray(collection) && collection !== null && !(collection instanceof Date)) {
        return "object";
    }else if (typeof value !== 'object' && Array.isArray(collection) && collection !== null && !(collection instanceof Date) ) 
    {return "array";}
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    
   return string.charAt(0).toUpperCase() + string.slice(1);
   
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
// this capitalizes the first letter of every word in the string 
function capitalizeAllWords(string) {
    var x = string.split(" ");
    var y = [];
    for(var i = 0; i < x.length; i++){
     y.push(x[i].charAt(0).toUpperCase() + x[i].slice(1))}
     return y.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// this will return 'welcome name'
function welcomeMessage(object) {
 return `Welcome ${capitalizeWord(object.name)}!`;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// this will return "name is a species"
function profileInfo(object) {
return `${object.name.charAt(0).toUpperCase() + object.name.slice(1)} is a ${object.species.charAt(0).toUpperCase() + object.species.slice(1)}`;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//checks to see if the object has a noises property and returns them else returns "there are no noises"
function maybeNoises(object) {
for (var key in object){
    if (object[key] === object.noises && object.noises.length > 0){
        return object.noises.join(" ");
    }
} return "there are no noises";
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// the string is split and checked to see if it includes the i\input word
function hasWord(string, word) {
if (string.split(" ").includes(word)){return true}
else {return false}
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//this pushed the name value into the array
function addFriend (name, object) {
object.friends.push(name);
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// this checks to see if first an array is undefined, then to see if the inut name matches any array value
function isFriend(name, object) {
console.log(object.friends);
if (object.friends === undefined) {return false}
else if (object.friends.includes(name) ){return true}
else {return false}

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
// it will check the input name against the friends arrays and return an array of people the input name is not a friend of
let notFriends = [];

for(let i = 0; i < array.length; i++ ){
    if(!(array[i]['name'] === name) && !array[i]['friends'].includes(name)){
        notFriends.push(array[i]['name']);
    }
}


  return notFriends;

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// this will update an object with the parameters entered
function updateObject(object, key, value) {
 object[key] = value;
  return object;
  
}



 
   


//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
// this will look through an array an delete an object property if it matches a value in the array
function removeProperties(object, array) {
for (let key in object){
    if (array.includes(key) && array.length > 0){
        delete object[key];
    }
}return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// this will remove duplicates from an array and return the array
function dedup(array) {
let uniqueSet = [... new Set(array)];

return uniqueSet;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}