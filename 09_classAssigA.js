

console.log("<====================Assignment 1========================>")
console.log("<=========================Step 1========================>")
class Vehicle{
    constructor(model, make, color, year, mileage){
        this.model = model;
        this.make = make;
        this.color = color;
        this.year = year;
        this.mileage = mileage;
    }
    getDetails(){
       console.log(`Model:${this.model}, Make:${this.make}, Color:${this.color}, year:${this.year}, Mileage:${this.mileage}`);
    }
}
const fortuner = new Vehicle("Fortuner","Toyota","Black",2019,"14.2KM/L");
console.log(fortuner);
const city = new Vehicle("City","Honda","Blue",2020,"17.8KM/L");
console.log(city);
const harrier = new Vehicle("Harrier","TaTa","White",2019,"15KM/L");
console.log(harrier);
const thar = new Vehicle("Thar","Mahindra","Black",2021,"15.2KM/L");
console.log(thar);
const creta = new Vehicle("Creta","Hyundai","White",2020,"17KM/L");
console.log(creta);

console.log("<=========================Step 2========================>")
class College{
    constructor(collegeName, universityName, location, establishedYear){
        this.collegeName = collegeName;
        this.universityName = universityName;
        this.location = location;
        this.establishedYear = establishedYear;
    }
    getDetails(){
        console.log(`College Name:${this.collegeName}, University Name:${this.universityName}, Location:${this.location }, Established year:${this.establishedYear}`);
     }
}
const sinhgad = new College("Sinhgad","SPPU","Pune",1996);
console.log(sinhgad);
const wilson = new College("Wilson College","Mumbai University","Mumbai",1832);
console.log(wilson);
const deogiri = new College("Deogiri College","Bamu University","chhatrapati Sambhajinagr",1960);
console.log(deogiri);
const shri= new College("Shri Shivaji College","Swami Ramanand Teerth Marathwada University","Parbhani",1961);
console.log(shri);

console.log("<=========================Step 3========================>")
function traverseObject(obj){
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const element = obj[key];  
            console.log(` ${key}: ${element}`);
        }
    }
}
traverseObject(sinhgad);
console.log("\n");
traverseObject(wilson);
console.log("\n");
traverseObject(deogiri);
console.log("\n");
traverseObject(shri);


