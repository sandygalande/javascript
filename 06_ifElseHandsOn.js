
console.log("==========================Assignment 2=============================")
console.log("----------------------------Step 1---------------------------------")

var isEvenOrOdd = function(num){
    if (num % 2 == 0) {
        console.log(`${num} is Even Number`);
    } else {
        console.log(`${num} is Odd Number`);
    }
}
isEvenOrOdd(45);
isEvenOrOdd(70);
isEvenOrOdd(67);
isEvenOrOdd(98);

console.log("----------------------------Step 2---------------------------------")

var isVoteOrNot = function(age){
    if (age>=18) {
        console.log(`age ${age} person is eligible for vote.`);
        
    } else {
        console.log(`age ${age} person is not eligible for vote.`);
    }
}
isVoteOrNot(18);
isVoteOrNot(20);
isVoteOrNot(17);
isVoteOrNot(40);

console.log("----------------------------Step 3---------------------------------")

var string = function (string){
    if (string.length > 10) {
        console.log(`${string} string contain more than 10 character.`);  
    } else {
        console.log(`${string} string contain not more than 10 character.`);  
    }
}
string("JavaScript-ES6"); 


console.log("----------------------------Step 4---------------------------------")

var checkStart = function (word){
    if (word.startsWith("Java")) {
        console.log(`Given Word : ${word}, starts with "Java"`);
        
    } else {
        console.log(`Given Word : ${word}, dose not starts with "Java"`);
    }
}
checkStart("JavaScript Language");

