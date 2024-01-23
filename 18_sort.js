

const array = ["Jenny", "Elon", "Stew", "Bill"];
console.log("====Before reverse======")
console.log(array);
console.log("====After reverse======")
array.reverse();
console.log(array);


const arr = ["Jenny", "Elon", "Stew", "Bill"];
console.log("====Before sorting in Ascending order======");
console.log(arr);
console.log("====After sorting in Ascending order======");
arr.sort(); // By default sort in ascending order
console.log(arr);

console.log("====After sorting in Descending order======");
arr.reverse();
console.log(arr);

console.log("======Sorting Number array=======");
const arrayNum = [20, 1, 50, 9, 79, 8];
console.log("====Before sorting======");
console.log(arrayNum);
console.log("====After sorting in ascending order======");
//arrayNum.sort(); // This will not give us the expected result
arrayNum.sort((a, b)=> {
   return a>b ? 1 : -1;
});
console.log(arrayNum);

console.log("====After sorting in descending order======");
arrayNum.sort((a, b)=> {
    return a>b ? -1 : 1;
});
// arrayNum.reverse() // or  we could reverse it
console.log(arrayNum);


