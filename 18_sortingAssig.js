
const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
console.log(arrayRollNumbers)

console.log("<=================Step 1 (Reverse)================>");
arrayRollNumbers.reverse();
console.log("Reverse Array:",arrayRollNumbers);

console.log("<===================Step 2(sort)==================>");
arrayRollNumbers.sort();
console.log(arrayRollNumbers);

console.log("<================Step 3(ascending order)================>");
arrayRollNumbers.sort((a,b)=>{
    return a>b ? 1 : -1
});
console.log(arrayRollNumbers);

console.log("<===================Step 4==================>");
let gretestNumber = arrayRollNumbers[arrayRollNumbers.length-1];
console.log("Gretest Number is:",gretestNumber);

console.log("<===================Step 5==================>");
let smallestNumber = arrayRollNumbers[0];
console.log("Smallest Number is:",smallestNumber);

console.log("<===================Step 6==================>");

const uniqueArray = [];
for (let i = 0; i < arrayRollNumbers.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < uniqueArray.length; j++) {
        if (arrayRollNumbers[i]=== uniqueArray[j]) {
            isDuplicate = true;
            break;
        }  
    }
    if (!isDuplicate) {
        uniqueArray.push(arrayRollNumbers[i]);  
    } 
}
console.log("=> Given Array is:");
console.log(arrayRollNumbers);
console.log("=> Remove Duplicate element from Array:");
console.log(uniqueArray);