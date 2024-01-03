
console.log("==========================Assignment 1=============================")
console.log("----------------------------Step 1---------------------------------")
function maleMarriageEligibility(gender,age,boyName){
    var result = age>=21 ? `=> Hey ${boyName} you are eligible for Marriage` : `=> Hey ${boyName} you are not eligible for Marriage\n`;
    console.log(result);
}
maleMarriageEligibility("Male",25,"Billgates");
maleMarriageEligibility("Male",17,"Stew Jobs");

console.log("----------------------------Step 2---------------------------------")

function femaleMarriageEligibility(gender,age,girlName){
    var result = age>=18 ? `=> Hey ${girlName} you are eligible for Marriage` : `=> Hey ${girlName} you are not eligible for Marriage`;
    console.log(result);
}
femaleMarriageEligibility("Female",16,"Jenifer");
femaleMarriageEligibility("fFemale",27,"Malinda Gates");
