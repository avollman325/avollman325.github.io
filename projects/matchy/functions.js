/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals,string){
    for(var i = 0; i < animals.length; i++){
        var name = animals[i].name;
       if (string.toUpperCase() === name.toUpperCase()){
           return animals[i];
       } 
    }return null;
    
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// this function will replace and object in the animals array if the input name matches any name in the array

function replace (animals,name,replacement){
    for (var i = 0; i <animals.length; i++){
        var x = animals[i].name;
        
        if (name.toUpperCase() === x.toUpperCase()){
            return animals[i] = replacement;
        }
    } return null;
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//the function will remove and object from the animals array if it matches an input name
function remove(animals, name){
    for (var i = 0; i < animals.length; i++){
        var y = animals[i].name;
        if (name.toUpperCase() === y.toUpperCase()){
            return animals.splice(i);
        }
    }return null;
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//creating a function that tests an object animal against the array animals
//if the animal object passes all 3 tests then it will be added to the array
function add (array, object){
    for (var i = 0; i < array.length; i++){
        if(object.name === array[i].name ){
            return;}
    } if ( object.species.length > 0 && object.name.length > 0){
        return array.push(object);
    }
}



/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
