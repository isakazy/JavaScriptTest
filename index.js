console.log("hello world"); 


for(var i = 0; i <= 10; i ++){
  //  console.log("hello for loop ")
}

var age = 20; 

if (age < 21 ){
    console.log("you are too young to have alcahol "); 
}
else if(age > 21 && age < 70 ){
    console.log("you are good to have alcohol"); 
}
else{
    console.log("you are probably dead "); 
}

var a = 5; 
var b = 10; 
var c = "I am a String "; 
var hi = "Hello "; 

var sum = a + b; 
var result = hi + c; 

console.log(sum);
console.log(result); 


var myText = "this is the start, "+ "this is the end of my text!"; 
console.log(myText); 

var lengthOfString = myText.length; 
console.log(lengthOfString); 


var letter; 

letter = myText.charAt(0);
console.log(letter); 
letter = myText[2]; 
console.log(letter);
letter = myText.indexOf(a); 
console.log(letter); 


function wordBlanks(myNown, myAdjective, myVerb, myAdverb){
    var result = "";

    result += "the "+ myNown + myAdjective + myVerb + myAdverb; 
    return result; 
}


console.log(wordBlanks("horse ", "Beautiful ", "flies ", "fast ")); 


var myArray = [12,123,32,23,324,123,234,123,"whaterte"]; 
 
var LengthOfArray = myArray.length; 
console.log(LengthOfArray); 

//var index = myArray.indexOf(4); 
console.log(index); 
var index2 = myArray[4]; 
console.log(index2); 
