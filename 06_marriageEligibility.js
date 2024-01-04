
console.log("<==========================Assignment 2===========================>");
var marriageEligibility = function (gender,age){
    if (age>=21 && age>=18) {
        console.log(`Age ${age} is eligible for marriage.`);    
    } else {
        console.log(`Age ${age} is not eligible for marriage.`); 

    }
}
marriageEligibility("Male",17);
marriageEligibility("Male",25);
marriageEligibility("Female",28);
marriageEligibility("Female",16);
marriageEligibility("Other",35);
marriageEligibility("Other",41);