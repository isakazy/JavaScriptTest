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


function phoneticLookup(val){
    result = ""; 
    var lookup = {
        "alpha": "Adams",
        "bravo":  "Boston", 
        "charlie": "Chicago", 
        "delta": "Denver", 
        "Echo": "easy", 
        "foxtron": "frank"
    }; 
    result = lookup[val]; 
    return result; 


}

console.log(phoneticLookup("bravo")); 

var myObject = {
    "color": "gray", 
    "wheels": 4, 
    "seats": 5, 
    "purpose": "personal"
}; 

function checkObject(checkProps){
    if(myObject.hasOwnProperty(checkProps)){
        return myObject[checkProps];
    }
    return "not found"; 
}

console.log(checkObject("wheel")); 


// in the folloiwng scenario we created an array of objects 

var myMysic = [
   {
    "Artist": "Bullie Joel", 
    "song": "Piano Man", 
    "release_Year": 1973, 

    "format": [
        "CD", 
        "8T",
        "LP"
    ], 
    "gold": true

   },


   {
    "Artist": "Rammstein", 
    "Song": "Puppe", 
    "Realease_Year": 2020, 
    "format": [
        "CD",
        "8T",
        "LP"
    ], 
    "gold": true
   }

]; 

// in the following scenario we  are learning nested objects (object inside object)


var maCar = {
    "car": {
        "inside":{
            "gloveBox": "map", 
            "passanger Seat": "umbrella"
        }, 
        "outside": {
            "trunk": "jack"
        
    }
}

}

console.log(maCar.car.inside["passanger Seat"])


// in the following example we see the array of objects that has another list inside an object 

var myFlowers = [
    {
        type: "flower", 
        list: [
            "rose", 
            "tulip", 
            "dendeleon "
        ]
    }, 


    {
        type: "trees",
        list: [
            "Fin",
            "bire",
            "birch"
        ]

    }

    
]; 

var resutlOf = console.log(myFlowers[0].list[1]); 


// in the following example we are creating an array of objects called collection 

var collection = [
    {
        "1997": {
            "albom": "Slippery when wet", 
            "artist": "Bon Jovi", 
            "tracks" : [
                "let it rock", 
                "you give love a bad name"
            ]
        },


        "2022": {
            "albom": "",
            "artist": "prince", 
            "tracks" : [
                "1999", 
                "little red corvette"
            ]
        }, 


        "1245": {
            "artist": "Robert Palmer", 
            "tracks": [ ] 
        }, 


        "12323": {
            "albom": "ABBA"
        }
    }
]; 



var contact = [

    {
        "FirstName": "Akira", 
        "LastName": "Laine", 
        "Number": "2342423434",
        "Likes": ["Pizza", "Coding", "Brownie Points"]
    }, 
    {
        "FirstName": "Harry",
        "LastName": "Potter", 
        "Number": "234234123123", 
        "likes": ["Hogwards", "Magic", "Hagrid"]
    }, 
    {
        "FirstName": "Sherlock",
        "LastName": "Holms", 
        "Number": "342424324",
        "Likes": ["Intriguiing cases", "Violin"]
    },
    {
        "FirstName": "Ktistine",
        "LastName": "Vos",
        "Number": "unknown",
        "Likes": ["JavaScript", "gaming", "Foxes"]
    }

]; 

function lookUp(name, property){

    for(var i = 0; i < contact.length; i ++ ){
        if(contact[i].FirstName === name ){
            return contact[i][property] || "No such Property"; 
        }
    }
    return "No such contact"
}

var data = lookUp("Sherlock", "LastName"); 
console.log(data);


