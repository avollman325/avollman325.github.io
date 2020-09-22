// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
   // its gonna return an object that has the arguement ids as values to keys matching their names 
     return {
         id : id,
         nameFirst : nameFirst,
         nameLast : nameLast
     };
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
   
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        // this will push a contact into the contact array
        addContact: function(contact){
            contacts.push(contact);
            return contacts;
            
        },
        findContact: function(fullName){
      // this will search through the contact array and return a contact if it matches and if not it will return undefined
            for (var i = 0; i < contacts.length; i++){
                console.log(`${contacts[i].nameFirst} ${contacts[i].nameLast}`)
                if (fullName === `${contacts[i].nameFirst} ${contacts[i].nameLast}`){
                    return  contacts[i];
                }
                else {return undefined;}
            }
        },
        // this will remove the contact entered from the contacts array
        removeContact: function(contact){
            contacts.pop(contact);
        },
        
        // this will print all contacts in the array with a space between them
        printAllContactNames: function(){
            var arr = [];
            for(var i = 0; i < contacts.length; i++){
               arr.push( `${contacts[i].nameFirst} ${contacts[i].nameLast}`);
            }
           return arr.join("\n");
        }
    
    };
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
