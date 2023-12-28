
console.log("==================Assignment 01======================")

console.log("---------------------Step 01------------------------")

function firstFun(){
    console.log("First Function");
}
firstFun();

function secondFun(){
    console.log("Second Function");
}
secondFun();

console.log("---------------------Step 02------------------------")

function personalDetails(firstName, lastName, collegeName){
    console.log("First Name=",firstName);
    console.log("Last Name=",lastName);
    console.log("College Name=",collegeName);
}
personalDetails("Sandip", "Galande", "SAOE Kondhwa, Pune");

console.log("---------------------Step 03------------------------")

function swapValues(x, y){
    console.log("Before Swap", "x=", x, " y=", y);
    var temp = x;
    x = y;
    y = temp;
    console.log("After Swap", "x=", x, " y=", y);
}
swapValues("Virat","Anushka");
swapValues(1000,2000);

console.log("---------------------Step 04------------------------")

function addThreeValues(n1, n2, n3) {
    console.log("Given value is= ", n1, n2, n3);
    var result = n1 + n2 + n3;
    return result;
  }
  var returnValue = addThreeValues(10.23, 600, 40);
  console.log("Addition is= ", returnValue);

  var returnValue = addThreeValues("Hello", "Good", "Morning");
  console.log("Addition is= ", returnValue);