

// MADAM

function isPalindrome(str) {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;

}
const result = isPalindrome("MADAM");
console.log(`Given word MADAM is Palindrome: ${result}`);


// ANAGRAM
// 'heart' and 'earth' are anagrams.
const str1 ="heart"; // sort in ascending order ==> aehrt
const str2 = "earth"; // sort in ascending order ==> aehrt

const resultStr1 = str1.split("").sort().join("");
const resultStr2 = str2.split("").sort().join("");

console.log(resultStr1 == resultStr2 ?true : false);