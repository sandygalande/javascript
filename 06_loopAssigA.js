
console.log("<======================Assignment 2========================>");

console.log("<----------------------Step 1----------------------->");
let s1 = "I am very good IT Developer";
let vowelsCount =0;
for (let i= 0; i< s1.length; i++) {
    let char = s1.charAt(i).toLowerCase();
    if (char== 'a' || char== 'e'|| char== 'i'  || char== 'o' || char== 'u') {
        vowelsCount = vowelsCount + 1;
    }
}
console.log(`Vowels count is: ${vowelsCount}`);


console.log("<----------------------Step 2----------------------->");
let sum = 0; 
for (let i = 1; i < 6; i++) {
   sum = sum + i*i*i;   
}
console.log(`Sum of cube of Numbers from 1 to 5 is : ${sum}`);


console.log("<----------------------Step 3----------------------->");

console.log("=> First Given String Odd Position Character :");
function oddPositionedChars(str){
    for (let index = 0; index < str.length; index++) {
        let char = str.charAt(index);
        if(index%2==1 && char!=" "){
            console.log(str.charAt(index));
        }    
    }
}
oddPositionedChars("Hard work always pays back");

console.log("=> Second Given String Odd Position Character :");
function oddPositionedChars(str){
    for (let index = 0; index < str.length; index++) {
        let char = str.charAt(index);
        if(index%2 == 1 && char != " "){
            console.log(str.charAt(index));
        }    
    }
}
oddPositionedChars("Soon I will be UI IT Champ");



