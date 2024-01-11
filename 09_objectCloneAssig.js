
console.log("<=======================Step 1==========================>")
let bankSbi = {
    bankName: "State Bank of India",
    branch: "parbhani",
    ifcCode: "SBIN002711",
    accountType: "Saving"
}
console.log(bankSbi);

console.log("<=======================Step 2==========================>")
let bankLocation ={
    street: "SM Road",
    city: "Parbhani",
    pin: "431509"
}
console.log(bankLocation);

console.log("<=======================Step 3==========================>")
const mergeObj = Object.assign({}, bankSbi, bankLocation );
console.table(mergeObj);

console.log("<=======================Step 4==========================>")
let rateOfInterest = {
    homeLoanInterest: "9.5% PA",
    personalLoanInterest: "10.5% PA",
    dueInterest: "9.3% PA"
}
console.log(rateOfInterest);

console.log("<=======================Step 5==========================>")
const sbiDetails = Object.assign({}, bankSbi, bankLocation, rateOfInterest );
console.table(sbiDetails);

console.log("<=======================Step 6==========================>")
for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];  
        console.log(` ${key}: ${element}`);
    }
}
