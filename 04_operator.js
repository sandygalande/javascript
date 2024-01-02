

var num = 5;
var result = num % 2;
var resultValue = result == 0 ? " Given number is Even " : "It is Odd number"; 
console.log(resultValue);

var n1 = "100";
var n2 = 100;
var result = n1 == n2 ;
console.log(` Comparision using == operator ==> ${ result } `);


var result = n1 === n2 ;
console.log(` Comparision using === operator ==> ${ result } `);

var a=10
var b= a++ // postfix
console.log(b);

var a=10
var b= ++a // prefix
console.log(b);

var result = 0/0
console.log(result); // NaN=Not a Number

var result = 100 + true; // Implicit= automatic conversion (true:1)
console.log(result); 

var result = 99 - false; // // Implicit= automatic conversion (false:0)
console.log(result);

console.log("1"+"1"); // concat

var s1 = "101"; 
console.log(typeof s1);

var s2= +s1;
console.log(s2);
console.log(typeof s2); // Number to String Conversion

var d=  +"200"
console.log(d);
console.log(typeof d); // string to number conversion

var z = +"sandip";
console.log(z); // Invalid Operation










