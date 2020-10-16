// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-avollman");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *                  // be in the environment 
 *    npm start --prefix ./avollman325.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
//must use the filter function to filter out the male customers
// output is a number
return _.filter(array,function(customerObj){
    return customerObj.gender === "male";
}).length;//sees how many customers are male
};

var femaleCount = function(array){
  return _.reduce(array,function(accumulator, currentValue, currentIndex){
      if(currentValue.gender === "female"){
          accumulator++;
      }
      return accumulator;//this uses reduce to see how many female customers
  },0)
};

var oldestCustomer = function(array){
   // go through an array of people
    //create something to hold the oldest person
    //compare oldest person to the current element in the array
let oldest = 0;
let oldestName = array.reduce((prev,curr) => {
  if(curr.age > oldest) {
    oldest = curr.age;
    return curr.name;
  }
  return prev;
},'');
return oldestName;
};

var youngestCustomer = function(array){
   //go through array
    //first element in the array will be the youngest person to start
    //compare the youngest person to the current element in the array
    //if the current element is younger than the current youngest person, the current element is the new youngest person;
    //after going through the array return the youngest person
 let youngest = Infinity;
let youngestName = array.reduce((prev,curr) => {
  if(curr.age < youngest) {
    youngest = curr.age;
    return curr.name;
  }
  return prev;
},'');
return youngestName;

};

var averageBalance = function(array){
    let arr = _.pluck(array, "balance")//pulls the balance of every customer
 let newMoney = arr.map(function(x){
    return x.slice(1) //removes $ from balances.
 })
 
 //console.log(newMoney);
 let moreMoney = newMoney.map(function (y) {
   return y.replace(/\,/g,'')//removes commas from the balances
})
let evenMoreMoney = moreMoney.map(function(z){
   return parseFloat(z)//this will return the string of balances as numbers
})
 
    //console.log(evenMoreMoney);
     let size = arr.length;//this gets the length of the array
    let total = _.reduce(evenMoreMoney,function(accumulator, currentValue, currentIndex){
        return accumulator + currentValue
    },0);//this will add all of the balances together
    console.log(total);
 
  let average = total / size;// this will divide the balance total by the number of balances
  
  return average;
  
        
    
}

var firstLetterCount = function(array, letter){
    let names = _.pluck(array, "name");//this pulls the names of customers
    let filtered = _.filter(names, function(x) {
       return x[0].toUpperCase() === letter.toUpperCase();//compares the first letter of customers to the input letter
    })
    return filtered.length;//returns hoe many customers match the input letter
};

var friendFirstLetterCount = function(array,customer,letter){
   //need to find how many friends of a given customer start with given letter
   
   


let filtered = array.filter(function(customerObj){
    return customerObj.name.toUpperCase() === customer.toUpperCase()
         
})
 
   
 let friendNames = _.pluck(filtered, "friends");// this will make an array of all friends listed within the input customers object
 
friendNames = friendNames[0];

    let filtered2 = _.filter(friendNames, function(value) {
      //this should return an array with all friends names that start with the input letter
      return value.name[0].toUpperCase() === letter.toUpperCase();
    })
    return filtered2.length;// this will return how many friends of a customer starts with the given letter
};

var friendsCount = function(array, customerName){
 //
 let answer = [];
 

 _.each(array, function(value, index, array){
    let friend = value.friends;// this will pull the friends object of every customer
    let friendsNames = _.pluck(friend, "name")// this will pull just the names out the friends array of objects
   _.each(friendsNames, function(v, i, a){//this will go throught he array of friends and compare it to the input customer
    if(v === customerName){//if the input name matches any name in the friends array 
        answer.push(value.name);//the customers name will be pushed into the answer array
    }
})
    
})
console.log(answer);
return answer;

};

var topThreeTags = function(array){
    //ryan said we should think about concating all the tag arrays together
    let tags = _.pluck(array, "tags");// pulling the tags out of the object
    //console.log(tags);
    let tagsj = tags.join(",")//joins all the sub arrays into one big string
    let tagsS = tagsj.split(",");//separates the string by a comma
    
  // console.log(tagsS);
   
    let count = _.reduce(tagsS,function(acc,curr){
        if(acc[curr]){
            acc[curr]++
        }else {acc[curr] = 1}
        return acc;
    },{})//if the words are in the array then they will be counted and if not they wil be added
   // console.log(count);
    let arr = [];
    for (let key in count){//pushing the results of count into a new array
        arr.push([key,count[key]]);
    }
    //console.log(arr);
    arr.sort(function(a,b){//sorting the arrays by highest word count
       return b[1] - a[1]
    });
    console.log(arr);
    
 let top3arr =  arr.slice(0,3);//taking the top 3 word in their array
 console.log(top3arr);
 let top3Words = _.map(top3arr,function(wordAndCount){//taking only the words out of their sub arrays
     return wordAndCount[0];
 })
 
 return top3Words;
    
};

var genderCount = function (array){
   let total = {};
    let female =   _.reduce(array,function(accumulator, currentValue, currentIndex){
      if(currentValue.gender === "female"){
          accumulator++;
      }
      return accumulator;
  },0)
  let male =_.reduce(array,function(accumulator, currentValue, currentIndex){
      if(currentValue.gender === "male"){
          accumulator++;
      }
      return accumulator;
  },0)
  let nonBinary = _.reduce(array,function(accumulator, currentValue, currentIndex){
      if(currentValue.gender === "non-binary"){
          accumulator++;
      }
      return accumulator;
  },0)
  total.female = female;
  total.male = male;
  total['non-binary'] = nonBinary;
  return total;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
