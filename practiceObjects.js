var myDog = {
    "name": "Sancho",
    "legs": 3, 
    "tails": 2, 
    "friends": ["friends at work", "friends at home", "Friends at university"]
}; 

// we can update the object, in this insatance i am updating the object for Mydog 
// we can also add new properties to objects as follows 

myDog.name = "Sanchoise"; 
myDog.legs = 4; 
myDog.tails = 1;
myDog.friends = []; 

myDog.bark = "bow bow"; // this is one way 
myDog["cry"] = " pssspspspsp"; 

// we can also delete properties fron our object. we use delete key word

delete myDog.tails; 
delete myDog.friends; 



var myCat = {
    "name": "Ryjyi", 
    "hight": "12sm",
    "weight": "1.5KG", 
    "age": 6
}; 

// in the following instance i am updating myCat object
// we can also add new properties to objects as follows 

myCat.name = "Yamam";
myCat.hight = 12; 
myCat.weight = 33; 
myCat.age = 33; 

myCat.makeSound = "meeaww";  // one way of adding a new property 
myCat["fight"] = "kkkkkkkk"; 


// we can also delete properties from our object. we user delete keyword 

delete myCat.age; 
delete myCat.weight; 





console.log(myDog.name); 
console.log(myCat.name); 


var testObject = {
    "an antree": "hamburger", 
    "my side": "veggies",
    "the drink": "water"
};

console.log(); 
console.log(testObject["an antree"]); 
console.log(testObject["my side"]); 
console.log(testObject["the drink"]);


var TestObject2 = {
    12: "Namath", 
    16: "Montana",
    19: "Unites"
}; 


var number12 = 16; 

console.log(TestObject2[number12]); 
var testNum = TestObject2[number12]; 
console.log(testNum);
