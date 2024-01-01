

console.log("-------------------Step 1----------------------")
function squareOfWordLength(){
    var givenString=`"JavaScript"`
    console.log(`1.1) Given String is= ${givenString}`)
    var totalChar= givenString.length;
    console.log(`     Length of string is= ${totalChar}`);
    var square =givenString.length * givenString.length;
    console.log(`     Square of string length is= ${square}`);

    var givenString=`"Google Chrome"`
    console.log(`1.2) Given String is= ${givenString}`)
    var totalChar= givenString.length;
    console.log(`     Length of String is= ${totalChar}`);
    var square =givenString.length * givenString.length;
    console.log(`     Square of string length is= ${square}`);

    
    var givenString=`"Developer Smart"`
    console.log(`1.3) Given String is= ${givenString}`)
    var totalChar= givenString.length;
    console.log(`     Length of String is= ${totalChar}`);
    var square =givenString.length * givenString.length;
    console.log(`     Square of string length is= ${square}`);
}
squareOfWordLength()

console.log("-------------------Step 2----------------------")
function string(){
    var givenString=`"I am Angular Developer"`
    console.log(`2) Given String is=${givenString}`);

    var totalChar= givenString.length;
    console.log(`   length of String is= ${totalChar}`);

    var result = givenString.split(" ");
    console.log(`   Total words in the string is= ${result.length} `);

    var result= totalChar / result.length;
    console.log(`2.1) Division of string length and total number of words is= ${result}`);

    var mul = totalChar * result;
    console.log(`2.2) multiplication of string length and total words available in string is = ${mul}`)

}
string();

