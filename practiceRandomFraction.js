function randomFraction() {
    return Math.random(); // Call Math.random() to generate a random fraction number
}

console.log(randomFraction());


// random whole number 

// first way of creating a whole random number
var randomNumber = Math.floor(Math.random() * 100); 
console.log(randomNumber);


//method for creating a random whole number
function randomWholeNumber(){
    return Math.floor(Math.random() * 200); 
}
console.log(randomWholeNumber());