

const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

console.log("<========================Step 1=====================>");
arrayNumbers.forEach((element, index) => {
  console.log(`Index: ${index}, Element: ${element}`);
});

console.log("<========================Step 2=====================>");
console.log("Positive numbers from give array:")
arrayNumbers.forEach((element) => {
  if (element > 0) {
    console.log(element);
  }
});

console.log("<========================Step 3=====================>");
console.log("Negative Numbers:")
const negativeNumbers = [];
arrayNumbers.forEach((element) => {
  if (element < 0) {
    negativeNumbers.push(element);
  }
});
console.log(negativeNumbers);

console.log("<========================Step 4=====================>");
console.log("Even Numbers:")
arrayNumbers.forEach((element) => {
  if (element % 2 === 0) {
    console.log(element);
  }
});

console.log("<========================Step 5=====================>");
const sum = arrayNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(`Sum of all elements is : ${sum}`);

console.log("<========================Step 6=====================>");
console.log("Even index elements:")
arrayNumbers.forEach((element, index) => {
  if (index % 2 === 0) {
    console.log(element);
  }
});
