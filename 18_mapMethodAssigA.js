


const arrayNumbers = [20, 11, 40, 2, 23, 11, 9, 31, 60, 2, 19];

console.log("<================Step 1=====================>");

const arrayTrans = arrayNumbers.map( (currentValue) => {
    return currentValue * 10;
} )
console.log(arrayTrans);

console.log("<================Step 2=====================>");

const arrayTransformed = arrayNumbers.map( (currentValue) => {
    return currentValue * currentValue * currentValue;
} )
console.log(arrayTransformed);

console.log("<================Step 3=====================>");
const newArray3 = arrayNumbers.map((number, index) => number + index);
console.log(newArray3);

