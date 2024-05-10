function myFunctuion(){
    console.log("hello, this is my first function")
}
myFunctuion(); 

function calculater(a, b, c ){
    if(c == "+"){
        console.log(a + c )
    }
    else if (b == "-"){
        console.log(a - c )
    }

}
calculater(12, "-" , 33); 


function trueOrFalse(trueOrWhat){
    if(trueOrWhat){
        return "yes this is true "; 
    }
    else{
        return "this is not true";
    }

}

//console.log(trueOrFalse(false)); 

function testEqual(val){
    if(val == 12){
        return "they are equal";
    }
    else{
        return "they are not equal"; 
    }
}

//console.log(testEqual("12")); 



function testStaticEqual(val){
    if(val === 12){
        return "they are equal";
    }
    return "they are not equal"; 

}

//console.log(testStaticEqual("12"))



function seeIfEqual(a, b ){
    if(a === b ){
        return "thet are equal";
    }
    return "they are not equal"; 
}

console.log(seeIfEqual(12, "12")); 


function testSwith(val){
    var answer = ""; 
    switch(val){
        case  1:
            answer = "alpha";
            break;
        case 2 :
            answer = "beta"; 
            break; 
        case 3 : 
            answer = "gamma";
            break;
        case 4 : 
            answer = "delta"
            break; 
        default:
                answer = "please provide a number from 1 to 4, Thaks!"; 
                break;
            
    }
    

    return answer; 
}

console.log(testSwith(12)); 

function testCases(){
    var answer2 = ""; 
switch(val){
    case 1:
    case 2:
    case 3: 
         answer2 = "from 1 to 3"; 
         break; 
    case 4: 
    case 5: 
    case 6: 
        answer2 = "from 4 to 6";
        break; 
    default:
        answer2 = "please provide a valid number, from 1 to 6"; 
        break

}
    
}

function chaiToSwith(val){
answer3 = "";
switch(val){
    case "bob":
        answer3 = "Marley";
        break;
    case 42:
        answer3 = "The Answer";
        break;
    case 1: 
        answer3 = "there is no #1"; 
         break;
    case 99:
        answer3 = "Missed me by this much!";
        break;
    case 7: 
        answer3 = "ate Nine"; 
        break;
    default:
        answer3 = "this is the end of the game, please read the rulls"; 
        break; 
}
return answer3; 

}

console.log(chaiToSwith("bob"));


function aAndBTest(a, b){
    if( a < 0 || b < 0 ){
        return undefined; 
    }

}
var count = 0;
function cc(card){

    switch(card){
        case 2: 
            count ++;
            break; 
        case 3:
            count ++;
            break;
        case 4: 
             count ++;
             break;
        case 5:
            count ++ 
            break; 
        case 6:
            count ++; 
            break; 
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count --; 
            break; 
            default:
                console.log("please play accordding the rools"); 

    }
    var holdBat = "hold"
    if(count > 0 ){
        holdBat = "Bet"; 
    }
    return count + " "+ holdBat; 
}

