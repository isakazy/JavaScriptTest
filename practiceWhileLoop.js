
// while loop example 
var myArray = []; 

var i = 0; 
while(i <= 5){
    myArray.push(i); 
    i ++; 
}
console.log(myArray);


// for loop example 
var forArray = []; 

for(var i = 0; i <= 5; i ++){
    forArray.push(i); 
}
console.log(forArray); 





var twoArray = [];
for(var i = 0; i <= 10; i += 2 ){
twoArray.push(i)
}
console.log(twoArray)


var threeArray = [];
 for(var i = 1; i <= 10; i += 2 ){
    threeArray.push(i); 
 }
 console.log(threeArray);



 var reversedArray = [];
 for(var i = 10; i >= 0; i -- ){
    reversedArray.push(i); 
 }
 console.log(reversedArray);



 var revArrayTwo = []; 
 for( var i = 10; i >= 0; i -= 2 ){
    revArrayTwo.push(i); 
 }
 console.log(revArrayTwo); 
  

 var revOddArray = []; 
for(var i = 10; i >= 0;  i --){
    if(i % 2 != 0 ){
        revOddArray.push(i); 
    }
    
}
console.log(revOddArray); 

// summ of array 
var testArray = [1,2,3,55,234,12,432,123123,4234,12]; 

var sum = 0; 
for(var i = 0; i < testArray.length; i ++ ){
    sum += testArray[i]; 
}
console.log(sum);


var sum2 = 0; 
for(var i = 0; i < twoArray.length; i ++ ){
    sum2 += twoArray[i]; 
}
console.log(sum2); 

// sum of nested for loop 

function productOfAll(arr){

    var sumOfAll = 1; 

    for(var i = 0; i < arr.length; i ++ ){ // first etteration is going through the outer array 
        for(var j = 0; j < arr[i].length; j ++){ // second etteration is going through the inner array 
            sumOfAll *= arr[i][j]; // product of all 
        }
    }
    return sumOfAll; 
}


var testNested = [[1,3,4,5], [3,23,4,234,2],[423,3,4,2], [43,2,16,8,9]]; 

console.log(productOfAll(testNested)); 



var doArray = [];
var i = 10; 

do{
    doArray.push(i); 
    i ++; 
}
while(i < 5 )
    console.log(doArray); 


