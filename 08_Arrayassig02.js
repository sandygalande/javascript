
console.log("<=====================Given Array===================>");
const arrayNumber = [20,31,40,25,23,11,29,9,60,2,11];
console.log(arrayNumber,"\n");

console.log("<=====================Step 1===================>");
console.log(`total element available in given array is: ${arrayNumber.length}\n`);

console.log("<=====================Step 2===================>");
const firstElement = arrayNumber[0];
console.log(`First Element is: ${firstElement}`);
const lastElement = arrayNumber[arrayNumber.length-1];
console.log(`Last Element is: ${lastElement}\n`);

console.log("<=====================Step 3===================>");
const thirdLastElement = arrayNumber[arrayNumber.length-3];
console.log(`Third Last Element is: ${thirdLastElement}\n`);

console.log("<=====================Step 4===================>");
console.log("The all even Numbers using for of loop:")
for (const element of arrayNumber) {
    if (element%2 == 0) {
        console.log(element);
    }
}

console.log("<=====================Step 5===================>");
console.log("The all odd Numbers using for of loop:")
for (const element of arrayNumber) {
    if (element%2 == 1) {
        console.log(element);
    }
}

console.log("<=====================Step 6===================>");
console.log("Even positioned elements:")
let sum =0;
for (let i = 0; i < arrayNumber.length; i=i+2) {
    const element = arrayNumber[i]; 
    console.log(element);
    sum=sum+element;
}
console.log(`Sum of even positioned elements = ${sum}\n`)

console.log("<=====================Step 7===================>");
console.log("Odd positioned elements:")
let sum1 =0;
for (let i = 1; i < arrayNumber.length; i=i+2) {
    const element = arrayNumber[i]; 
    console.log(element);
    sum1=sum1+element;
}
console.log(`Sum of odd positioned elements = ${sum1}\n`)

console.log("<=====================Step 8===================>");
console.log("Given Elements are:")
let sum2 = 0
for (const element of arrayNumber) {
    console.log(element);
    sum2 = sum2 + element;
}
console.log(`Sum of all elements = ${sum2}\n`)

console.log("<=====================Step 9===================>");
console.log("The numbers are multiple by 5:")
for (const element of arrayNumber) {
    if (element%5 ===0) {
        console.log(element)
    }
}

console.log("<=====================Step 10===================>");
const isAvailable = arrayNumber.includes(115);
console.log(`Is number 115 available in given array = ${isAvailable}\n`);

console.log("<=====================Step 11===================>");
const available = arrayNumber.includes(23);
console.log(`Is number 23 available in given array = ${available}\n`);

console.log("<=====================Step 12===================>");
console.log("Insert numbers -> 55,66 at index 3:")
arrayNumber.splice(3, 0, 55, 66 )
console.log(arrayNumber,"\n");

console.log("<=====================Step 13===================>");
let arrayNum = [20,31,40,25,23,11,29,9,60,2,11];
console.log(arrayNum);
const removed =arrayNum.splice(4,3);
console.log(`Deleted elements:`);
console.log(removed);
console.log(`New Array:`);
console.log(arrayNum);


