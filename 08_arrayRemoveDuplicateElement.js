
console.log("================Step 1================");
const arrayNum = [11, 3, 4, 11, 4, 7, 3];
const uniqueArray = [];
for (let i = 0; i < arrayNum.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < uniqueArray.length; j++) {
        if (arrayNum[i]=== uniqueArray[j]) {
            isDuplicate = true;
            break;
        }  
    }
    if (!isDuplicate) {
        uniqueArray.push(arrayNum[i]);  
    } 
}
console.log("=> Given Array is:");
console.log(arrayNum);
console.log("=> Remove Duplicate element from Array:");
console.log(uniqueArray);



console.log("================Step 2================");
const str = "How are you mate";
const words = str.split(" ");

const modifiedWords = words.map(word => {
  const firstLetter = word[0].toUpperCase();
  const lastLetter = word[word.length - 1].toUpperCase();
  const middlePart = word.slice(1, -1);
  return firstLetter + middlePart + lastLetter;
});

const modifiedString = modifiedWords.join(" ");

console.log(`=> Given String is: ${str}`);
console.log(modifiedString);


