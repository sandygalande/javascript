
class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
    
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");



const arrayEmps = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log("<===================Step 1=======================>");
const wiproEmployees = arrayEmps.filter(employee => employee.emp_company === 'Wipro');
wiproEmployees.forEach(employee => {
  console.log(`Employee Name: ${employee.emp_name}, Company: ${employee.emp_company}`);
});

console.log("<===================Step 2=======================>");

arrayEmps.forEach((employee) => {
    if ((employee.emp_dept === 'IT' || employee.emp_dept === 'HR') ) {
      console.log(employee);
    }
});

console.log("<===================Step 3=======================>");

arrayEmps.forEach((employee) => {
    if ((employee.emp_id > 50 ) ) {
      console.log(employee);
    }
});

console.log("<===================Step 4=======================>");

arrayEmps.forEach((employee) => {
    if ((employee.emp_name.startsWith("A") || employee.emp_name.startsWith("V") || employee.emp_name.startsWith("M") ) ) {
      console.log(employee);
    }
});

console.log("<===================Step 5=======================>");

let totalSalary = 0;
arrayEmps.forEach((employee) => {
  totalSalary += employee.emp_salary;
});
const averageSalary = totalSalary / arrayEmps.length;
console.log(`Average Salary: ${averageSalary}`);

console.log("<===================Step 6=======================>");
const arrayEmpsFromIT = arrayEmps.filter( (element) => {
    return element.emp_dept==='IT';
} );

const totalSum = arrayEmpsFromIT.reduce( (runningTotal, element) => {
    return runningTotal + element.emp_salary;
}, 0);
console.log(`Total Salary of employees for IT department : ${totalSum}`);

const average = arrayEmpsFromIT.reduce((rt, element) => {
    return rt+ element.emp_salary;
},0) 
console.log(`Average Salary of employees for IT department : ${average/arrayEmpsFromIT.length}`);

