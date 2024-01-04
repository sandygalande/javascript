console.log("<=============================Assignment 2==============================>");
var marriageEligibility = function (gender, age) {
  if (gender === "Male" && age >= 21) {
    console.log(
      `Gender is ${gender} & Age is ${age}, then you are eligible for marriage.`
    );
  } else if (gender === "Female" && age >= 18) {
    console.log(
      `Gender is ${gender} & Age is ${age}, then you are eligible for marriage.`
    );
  } else {
    console.log(
      `Gender is ${gender} & Age is ${age}, then you are not eligible for marriage.`
    );
  }
};
marriageEligibility("Male", 17);
marriageEligibility("Male", 25);
marriageEligibility("Female", 28);
marriageEligibility("Female", 16);
marriageEligibility("Other", 35);
marriageEligibility("Other", 41);
