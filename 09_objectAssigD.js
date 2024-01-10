

let professor = {
    name:"R. B. Bajare",
    age:45,
    designation:"Head of Department",
    subject:"Math",
    city:"Pune",
    degrees: {
        engineering:"CSC",
        PHD:"Adv Computing",
        MBA:"Marketing"
    },
    certificates:["Hacker Rank Participation", "Certificate in IFE course", "Certificate in Adv Programming"]
}
console.log("<======================Step 1==========================>")
console.log(professor);

console.log("<======================Step 2==========================>")
console.log(professor.degrees);

console.log("<======================Step 3==========================>")
console.log(professor.certificates);

console.log("<======================Step 4==========================>")
professor.totalExperice = "14 years";
console.log(`Add new property total Experience is: ${professor.totalExperice}`);

console.log("<======================Step 5==========================>")
professor.age = 47;
console.log(professor);

console.log("<======================Step 6==========================>")
professor.certificates.splice(2,0,"oracle Certified")
console.log(professor.certificates);

console.log("<======================Step 7==========================>")
const lastElement = professor.certificates[professor.certificates.length-1]
console.log(`Last Element is: ${lastElement}`);

console.log("<======================Step 8==========================>")
console.log(professor)

console.log("<======================Step 9==========================>")
for (const element of professor.certificates) {
    console.log(element); 
 }