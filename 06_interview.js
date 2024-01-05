
console.log("<========Assignment 1 (using if-else Statement)==========>");
function interviewEligibility(gradScore,hscScore,sscScore,candidateName){
    if (gradScore>=70 || hscScore>=80 || sscScore>90 ) {
        console.log(`=> Congrates ${candidateName} you are eligible for TCS interview.`); 
    } else {
        console.log(`=> sorry ${candidateName} Unfortunately you are not eligible for TCS interview.`); 
    }
}
interviewEligibility(80,86,90,"Sandip");
interviewEligibility(70,65,55,"Pratik");
interviewEligibility(60,79,88,"Vishal");