
console.log("==========Call Method========");
let person = {
    firstName: "Gajanan",
    age: 37,
    isMarried: true
}
function greet(message, msg){
    console.log(`Hello ${message}, ${this.firstName}, ${msg}`);
} 

// greet{`Good Morning`};

greet.call(person, `Good Morning`, `How are you ?`);

console.log("==========Apply Method==========");
function show(message, msg){
    console.log(`Hello ${message}, ${this.firstName}, ${msg}`);
} 
show.apply(person, [`Good Morning`, `How are you ?`]);


console.log("==========bind Method==========");
function display(message, msg){
    console.log(`Good Morning`, `How are you ?`);
}