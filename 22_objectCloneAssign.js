

const arrayNums = [20, 3, 4, 56, 90, 400, 49];

console.log("<====================Step 1===================>");
const clonedArray = arrayNums.slice();
clonedArray.push(55,66);

console.log("Original Array:", arrayNums);
console.log("Cloned Array:", clonedArray);

console.log("<====================Step 2===================>");
const clonedArrays = [...arrayNums];
arrayNums.splice(4,0,10,25);

console.log(arrayNums);

console.log("<====================Step 3===================>");
const arrayEven = [2, 30, 14, 8];
const mergedArray = [...arrayNums, ...arrayEven];

console.log("Merged Array is:", mergedArray);

console.log("<====================Step 4===================>");
const employee_info = {
    emp_id: 27,
    emp_name: "John Doe",
    salary: {
        july_month: "40,0000INR",
        aug_month: "50,0000INR",
        jun_month: "65,0000INR"
    },
    address: {
        locality:{
            colony: "OM Vrindavan Society",
            street: "Kanch Pokli, 431202",
        },
        city: "Mumbai",
        state: "Maharashtra",
        country: "India"
    },
    mobiles: ["+91 8600 3456 88", "1800-4567-32", "+91- 9096 5678 77"]
}

console.log(employee_info);

console.log("<====================Step 5(a)===================>");
console.log("Address: Locality-",employee_info.address.locality.colony);
console.log("City-",employee_info.address.city);
console.log("State-",employee_info.address.state);
console.log("Country-",employee_info.address.country);

console.log("<====================Step 5(b)===================>");
console.log("Mobile Numbers:");
employee_info.mobiles.forEach((number)=>{
    console.log(number);
});

console.log("<====================Step 6(a)===================>");
const clonedObject = JSON.parse(JSON.stringify(employee_info));
clonedObject.salary.july_month = "80,0000INR";
console.table(clonedObject);


console.log("<====================Step 6(b)===================>");
employee_info.address.country = "United Kingdom";
console.table(employee_info);

console.log("<====================Step 6(c)===================>");
console.table(employee_info);
console.table(clonedObject);

