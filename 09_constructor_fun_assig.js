
console.log("<=====================Assignment 2====================>");
function Bank(bankName, location, ifscCode, branchCode){
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
    // console.log(`Bank Name: ${this.bankName}, Location: ${this.location}, IFSC Code: ${this.ifscCode}, Branch Code ${branchCode} `);
}

console.log("<=======================Step 2=====================>");
const yesBank = new Bank("yesBank", "Pune", "YESB0000123", "123456");
console.log(yesBank);
const sbiBank = new Bank("sbiBank", "Pune", "SBIB0000456", "654123");
console.log(sbiBank);
const mahBank = new Bank("MahBank", "Pune", "MAHB0000123", "684123");
console.log(mahBank);
const axisBank = new Bank("AxisBank", "Pune", "AXISB0000789", "548961");
console.log(axisBank);

Bank.prototype.openTime = "9AM STI";
Bank.prototype.closeTime = "6PM STI";

console.log("<=======================Step 5=====================>");
console.log(`SBI Bank open Time is: ${sbiBank.openTime}`);
console.log(`SBI Bank close Time is: ${sbiBank.closeTime}`);

console.log("<=======================Step 6=====================>");
console.log(`Bank Name is: ${axisBank.bankName}`);
console.log(`SBI Bank close Time is: ${axisBank.closeTime}`);

console.log("<=======================Step 7=====================>");
console.log(`Bank Name is: ${yesBank.bankName}`);
console.log(`yesBank Branch Code is: ${yesBank.branchCode}`);
console.log(`SBI Bank open Time is: ${yesBank.openTime}`);


   
 

