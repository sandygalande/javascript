

// console.log("----------------------Step 1-------------------------")
// function squareOfWordLength(){
//     var givenString= "JavaScript";
//     console.log(`1.2) Given String is= ${givenString}`);
//     var totalChar= givenString.length;
//     console.log(`     Length of string is= ${totalChar}`);
//     var square =givenString.length * givenString.length;
//     console.log(`     Square of string length is= ${square}`);

//     var givenString= "Google Chrome";
//     console.log(`1.2) Given String is= ${givenString}`);
//     var totalChar= givenString.length;
//     console.log(`     Length of String is= ${totalChar}`);
//     var square =givenString.length * givenString.length;
//     console.log(`     Square of string length is= ${square}`);

    
//     var givenString= "Developer Smart";
//     console.log(`1.3) Given String is= ${givenString}`);
//     var totalChar= givenString.length;
//     console.log(`     Length of String is= ${totalChar}`);
//     var square =givenString.length * givenString.length;
//     console.log(`     Square of string length is= ${square}`);
// }
// squareOfWordLength()

// console.log("----------------------Step 2-------------------------")
// function string(){
//     var givenString= "I am Angular Developer";
//     console.log(`2) Given String is=${givenString}`);

//     var totalChar= givenString.length;
//     console.log(`   length of String is= ${totalChar}`);

//     var result = givenString.split(" ");
//     console.log(`   Total words in the string is= ${result.length} `);

//     var div= totalChar / result.length;
//     console.log(`2.1) Division of string length and total number of words is= ${div}`);

//     var result= totalChar * result.length;
//     console.log(`2.2) Multiplication of string length and total number of words is= ${result}`);
// }
// string();


console.log("=============================Step 1===================================")
function squareOfWordLength(s1){
    var totalChar= s1.length;
    console.log(`Length of given string is= ${totalChar}`);
    var square =s1.length * s1.length;
    console.log(`Square of string length is= ${square}\n`);
}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");

console.log("=============================Step 2===================================")
function string(){
    var givenString= "I am Angular Developer";
    console.log(`Length of given string is= ${givenString.length}`);
    var result= givenString.split(" ");
    console.log(`Total words in the string is = ${result.length}\n `)
    var div= givenString.length / result.length;
    console.log(`2.1) String Length divided by total number of words available in the string is= ${div}`);
    var result= givenString.length * result.length;
    console.log(`2.2) String Length and Multiple by total number of words available in the string is= ${result}`);
}
string()





    
