
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

const arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log("<=====================Step 1========================>");
console.log(`Sort the "arrayEmployees" in descending order of Employee Id's=>`);
arrayEmployees.sort((a,b)=> b.emp_id-a.emp_id);
arrayEmployees.forEach((employee)=>{
    console.log("ID:", employee.emp_id, "Name:",employee.emp_name,"Department:",employee.emp_dept)
});

console.log("<=====================Step 2========================>");
console.log(`Sort the "arrayEmployees" in ascending order of Employee Department=>`);
arrayEmployees.sort((a,b)=> a.emp_dept.localeCompare(b.emp_dept));
arrayEmployees.forEach((employee)=>{
    console.log("ID:", employee.emp_id, "Department:", employee.emp_dept, "Company:", employee.emp_company);
});

console.log("<=====================Step 3========================>");
console.log(`Sort the "arrayEmployees" in descending order of Employee Salary=>`);
arrayEmployees.sort((a,b)=> b.emp_salary-a.emp_salary);
arrayEmployees.forEach((employee)=>{
    console.log("Name:", employee.emp_name, "Salary", employee.emp_salary, "Company:",employee.emp_company);
});