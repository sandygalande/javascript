
console.log("<===================Step 1=====================>");

function isPalindrome(str) {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("dad")); // true
console.log(isPalindrome("hello")); // false

console.log("<===================Step 2=====================>");

function isAnagram(str1, str2) {
  const sortedStr1 = str1.toLowerCase().split('').sort().join('');
  const sortedStr2 = str2.toLowerCase().split('').sort().join('');
  return sortedStr1 === sortedStr2;
}

console.log(isAnagram("Silent", "Listen")); // true
console.log(isAnagram("Hello", "World")); // false
console.log(isAnagram("Such", "much")); // true

