
console.log("<======================Assignment 1=========================>")
let factorial = function factorialOfNum(num){
   if (num===0 || num===1) {
    return 1;
   } else if (num === null || num === undefined) {
    return "Invalid Input";
   }else{
    let result = 1;
    for (let index = 2; index <= num; index++) {
        result = result * index; 
    }
    return result;
   }
}
console.log(`The Factorial of 5 is => ${factorial(5)}`)
console.log(`The Factorial of 3 is => ${factorial(3)}`)
console.log(`The Factorial of null is => ${factorial(null)}`)
console.log(`The Factorial of 8 is => ${factorial(8)}`)
console.log(`The Factorial of undefined is => ${factorial(undefined)}`)
console.log(`The Factorial of 9 is => ${factorial(9)}`)
console.log(`The Factorial of 0 is => ${factorial(0)}`)
