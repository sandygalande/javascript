
console.log("=> Step 1) Log the first and last element ===>");
const fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log("\t","Original Array =",fruits_seasonal);
const firstElement = fruits_seasonal[0];
console.log(`\t - First Element is : ${firstElement}`);
const lastElement = fruits_seasonal[fruits_seasonal.length-1];
console.log(`\t - Last Element is : ${lastElement}\n`);

console.log(`=> Step 2) Add element Papaya before the element "Banana" ===>`);
const fruits_seasonal1 = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log("\t","Original Array =",fruits_seasonal1);
fruits_seasonal1.splice(0, 0, "Papaya" )
console.log("\t",fruits_seasonal1, "\n");

console.log(`=> Step 3) Remove "Mango" from the array ===>`);
const fruits_seasonal2 = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log("\t","Original Array =",fruits_seasonal2);
fruits_seasonal2.splice(3, 1,);
console.log("\t",fruits_seasonal2, "\n");

console.log(`=> Step 4) Add element "Pineapple" at the last position ===>`);
const fruits_seasonal3 = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log("\t","Original Array =",fruits_seasonal3);
fruits_seasonal3.push("Pineapple");
console.log("\t",fruits_seasonal3, "\n");

console.log(`=> Step 5) Insert an element "Dragon Fruit" before "Water Melon" ===>`);
const fruits_seasonal4 = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log("\t","Original Array =",fruits_seasonal4);
fruits_seasonal4.splice(4, 0, "Dragon Fruit");
console.log("\t",fruits_seasonal4, "\n");

console.log(`=> Step 6) Replace an element "Orange" with "Kiwi" ===>`);
const fruits_seasonal5 = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log("\t","Original Array =",fruits_seasonal5);
fruits_seasonal5.splice(1, 1, "Kiwi");
console.log("\t",fruits_seasonal5, "\n");

console.log("=> Step 7) Log the element starting from index 1 to 4 ===>");
const fruits_seasonal6 = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log("\t","Original Array =",fruits_seasonal6);
let fruit = fruits_seasonal6.slice(1,4);
console.log("\t",fruit, "\n");

console.log("=> Step 8) Only select last 3 element ===>");
const fruits_seasonal7 = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log("\t","Original Array =",fruits_seasonal7);
let fruits = fruits_seasonal6.slice(fruits_seasonal7.length-3);
console.log("\t",fruits);
