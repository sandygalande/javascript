
console.log("<======================Assignment 1========================>");
console.log(" <-----Given String reverse with ingore spaces-----> ");
function reverseString(str){
    let revstr ="";
    for (let index = str.length-1; index >= 0; index--) {
         let char = str.charAt(index);
        if (char != " ") {
            revstr = revstr + str[index];    
        }    
    }
    console.log(`=> ${str}, reverse is => ${revstr}`);
}


reverseString("Hard work always pays back");
reverseString("Soon I will be Angular IT Champ");
