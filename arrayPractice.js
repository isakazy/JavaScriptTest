var numArray = [12,32,23]; 
numArray[1] = 100; 
console.log(numArray); 


// getting a value of a nested array 

var nestedArray = [[1,2,3,4,5], [3232,423,32,23,], [4,64,34,32,34,55]]; 

var vaule = nestedArray[1][1]; 
console.log(vaule)


var arrayToPush = ["water", "ocean", "cucumber"]; 

var originalArray = ["whatever", "car", "push"]; 

originalArray.push(arrayToPush); 

console.log(originalArray); 

var newArray = originalArray.pop(arrayToPush);
console.log("below is a new array "); 
console.log(newArray); 

// one more time 
var newArrayTwo = originalArray.pop(arrayToPush); 
console.log("this is the second pop from original to new "); 
console.log(newArrayTwo);

