

var gradeSystem = function (marks){
    if (marks<0 || marks>100 || marks== undefined || isNaN(marks)) { // Invalid Input 
        console.log(`${marks} ==> Invalid Input...`);
    } else { // Fail or Pass 
        if (marks<35) {
            console.log(`${marks} Unfortunately you are failed...`); 
        } else { // Pass
            if (marks>=35 && marks<50) {
                console.log(`${marks} you are Pass. Grade ==> c`);
                
            } else if (marks>=50 && marks<75) {
                console.log(`${marks} you are Pass. Grade ==> B`);   
            } else {
                console.log(`${marks} you are Pass. Grade ==> A`);   
            } 
        }    
    }
}
gradeSystem(68);
gradeSystem(100);
gradeSystem(89);
gradeSystem(-10);
gradeSystem(110);
gradeSystem(undefined);
gradeSystem(null);
gradeSystem(NaN);
gradeSystem("60%");
