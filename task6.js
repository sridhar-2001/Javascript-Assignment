//Task 1
function result(name, department, mark1, mark2, mark3, mark4, mark5) {
    let mark = mark1 + mark2 + mark3 + mark4 + mark5;
    let average = mark / 5;
    console.log("Name: " + name);
    console.log("Department: " + department);
    console.log("Total Mark: " + mark);
    console.log("Average: " + average);

    if (average >= 50) {
        if (average >= 90) {
            console.log("Grade A");
        }
        else if (average >= 75) {
            console.log("Grade B");
        }
        else if (average >= 60) {
            console.log("Grade C");
        }
        else {
            console.log("Grade D");
        }
    }
    else {
        console.log("Fail");
    }
}
result("Sridhar", "ECE", 90, 87, 55, 85, 90);
result("Parthiban", "EEE", 70, 35, 40, 30, 25);

//Task 2
let employee = {
    name: "Arun",
    role: "Developer",
    salary: 45000,
    experience: 2
};
function calculateSalary(employee) {
    let basicSalary = employee.salary;
    let bonus;
    if (employee.experience >= 2) {
        bonus = basicSalary * 10 / 100;
    }
    else if (employee.experience >= 5) {
        bonus = basicSalary * 15 / 100;
    }
    else {
        bonus = basicSalary + 0;
    }
    let finalSalary = basicSalary + bonus;

    console.log("Name: " + employee.name);
    console.log("Role: " + employee.role);
    console.log("Basic Salary: " + basicSalary);
    console.log("Experience: " + employee.experience);
    console.log("Bonus Amount: " + bonus);
    console.log("Final Salary: " + finalSalary);
}
calculateSalary(employee);

//Task 3
let products = [
    { name: "Laptop", price: 55000, category: "electronics" },
    { name: "Mouse", price: 800, category: "electronics" },
    { name: "Shirt", price: 1200, category: "fashion" },
    { name: "Shoes", price: 2500, category: "fashion" },
    { name: "Phone", price: 30000, category: "electronics" }
];

let filterValue = products.filter((current, index, total) => {
    return current.price > 2000;
})
console.log(filterValue);

let filterValue1 = products.filter((current, index, total) => {
    return current.category === "electronics";
});
console.log(filterValue1);

let findValue = products.find((current, index, total) => {
    return current.price < 1000;
});
console.log(findValue);

let totalValue = products.reduce((acc, current, index, total) => {
    return acc + current.price;
}, 0);
console.log(totalValue);

let someValue = products.some((current, index, total) => {
    return current.price > 50000;
});
console.log(someValue);

let everyValue = products.every((current, index, total) => {
    return current.price > 500;
});
console.log(everyValue);

//Task 4
let employee1 = [
    {
        id: 101,
        name: "Kavin",
        role: "Frontend Developer",
        salary: 40000
    },
    {
        id: 102,
        name: "Parthi",
        role: "Backend Developer",
        salary: 50000
    },
    {
        id: 103,
        name: "Kumar",
        role: "Designer",
        salary: 35000
    },
    {
        id: 104,
        name: "Sanjay",
        role: "Cloud Management",
        salary: 60000
    },
    {
        id: 105,
        name: "Dhanush",
        role: "Ui/UX designer",
        salary: 45000
    },
    {
        id: 106,
        name: "Pugazh",
        role: "Frontend Developer",
        salary: 25000
    }
];

let employeeName = employee1.map((current, index, total) => {
    return current.name;
});
console.log(employeeName);

let filterName = employee1.filter((current, index, total) => {
    return current.salary > 40000;
});
console.log(filterName);

let findname = employee1.find((current, index, total) => {
    return current.id === 103;
});
console.log(findname);

let totalSalary = employee1.reduce((accumulator, current, index, total) => {
    return accumulator + current.salary;
}, 0);
console.log(totalSalary);

let highestSalary = employee1.sort((a, b) => {
    return (b.salary - a.salary);
});
console.log(highestSalary[0]);
console.log(highestSalary);

let nameOnly = employee1.map((current, index, total) => {
    return current.name;
});

console.log("Names only: " + nameOnly);

//Task 5
let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];

let totalItem = cart.reduce((accumulator,current,index,total)=>{
    return accumulator + current.price * current.quantity;
},0);

let discount = 0;
if(totalItem > 50000){
    discount = totalItem * 0.10;
}

let finalAmount = totalItem - discount;

console.log("Total Amount: "+ totalItem);
console.log("Discount Price: " + discount);
console.log("Final Amount: "+finalAmount);

//Task 6
let students = [
    { name: "Arun", age: 21, mark: 85 },
    { name: "Priya", age: 22, mark: 92 },
    { name: "Karthi", age: 20, mark: 67 },
    { name: "Dinesh", age: 23, mark: 45 }
];

let studentName = students.map((current,index,total)=>{
    return current.name;
});
console.log("Students names: " + studentName);

let highScored = students.filter((current,index,total)=>{
    return current.mark > 80;
});
console.log(highScored);

let findName = students.find((current,index,total)=>{
    return current.name === "Priya";
});
console.log(findName);

let totalMark = students.reduce((accumulator,current,index,total)=>{
    return accumulator + current.mark;
},0);
let average = totalMark / students.length;
console.log(average);

let faliedStudent = students.some((current,index,total)=>{
    return current.mark < 40;
});
console.log(faliedStudent);

let everyStudent = students.every((current,index,total)=>{
    return current.mark > 40;
});
console.log(everyStudent);

let markWiseOrder = students.sort((a,b)=>{
    return b.mark - a.mark;
});
console.log(markWiseOrder);

//Task 7
let numbers = [12, 5, 8, 21, 44, 7, 30, 15];

let doubleNumber = numbers.map((current,index,total)=>{
    return current * 2;
});
console.log(doubleNumber);

let evenNumber = numbers.filter((current,index,total)=>{
    return current % 2 == 0;
});
console.log(evenNumber);

let greater15 = numbers.filter((current,index,total)=>{
    return current > 15;
});
console.log(greater15);

let greater20 = numbers.find((current,index,total)=>{
    return current > 20;
});
console.log(greater20);

let total = numbers.reduce((accumulator,current,index,total)=>{
    return accumulator + current;
},0);
console.log(total);

let checkNumber = numbers.some((current,index,total)=>{
    return current > 40;
});
console.log(checkNumber);

let everyNumber = numbers.every((current,index,total)=>{
    return current > 0;
});
console.log(everyNumber);

let sortNumbers = numbers.sort((a,b)=>{
    return b-a;
});
console.log(sortNumbers);

//Task 8
let a = "JavaScript is very powerful";
console.log(a.length);

console.log(a.toUpperCase());

console.log(a.toLowerCase());

console.log(a.includes("JavaScript"));

console.log(a.slice(0,1));

console.log(a.charAt(a.length - 1));

let sentence = a.split(" ");
console.log(sentence.length);

console.log(a.replace("JavaScript","Python"));

console.log(a.split(" "));

//Task 9
let employees = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2
    },
    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 50000,
        experience: 4
    },
    {
        id: 103,
        name: "Karthi",
        department: "IT",
        salary: 65000,
        experience: 6
    }
];


console.log("All Employees:");
console.log(employees);

let searchEmployee = employees.find((current,index,total)=>{
    return current.name === "Karthi";
});
console.log(searchEmployee);

let filterEmployee = employees.filter((current,index,total)=>{
    return current.department === "IT";
});
console.log(filterEmployee);

let filterEmployeeSalary = employees.filter((current,index,total)=>{
    return current.salary > 50000;
});
console.log(filterEmployeeSalary);

let totalSalary1 = employees.reduce((accumulator,current,index,total)=>{
    return accumulator + current.salary;
},0);
console.log(totalSalary1);

let highestPaid = [...employees].sort((a,b)=>{
    return b.salary - a.salary;
});
console.log(highestPaid[0]);

let experienced = employees.filter((current,index,total)=>{
    return current.experience > 3;
});
console.log(experienced);

let lowestPaid = [...employees].sort((a,b)=>{
    return a.salary - b.salary;
});
console.log(lowestPaid);
console.log(highestPaid);

let totalEmployees = employees.length;
let averageSalary = totalSalary1 / totalEmployees;

console.log("Total Employees: " + totalEmployees);
console.log("Total Salary: " + totalSalary1);
console.log("Highest Salary: " + highestPaid[0].salary);
console.log("Average Salary: " + Math.round(averageSalary));

























