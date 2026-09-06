//Task 1
for (let a = 1 ; a <=10 ; a++){
    console.log(a);
}

//Task 2
for (let b = 10 ; b >= 1 ; b--){
    console.log(b);
}

//Task 3
for (let c = 1 ; c <= 20 ; c++){
    if(c % 2 == 0){
        console.log(c);  
    }
}

//Task 4
for (let d = 1 ; d <= 20 ; d++){
    if(d % 2 != 0){
        console.log(d);  
    }
}

//Task 5
let e = Number(prompt());
for (var i = 1 ; i <= 10 ; i++){
    console.log(i * e);
}

//Task 6
let f = 10;
while(f >= 1){
    console.log(f);
    f--;
}

//Task 7
let g = 1;
let sum = 0;
while(g <= 10){
    sum = sum + g;
    g++;  
}
console.log(sum);

//Task 8
let h = 1;
do{
    console.log(h);
    h++;
}
while(h <= 5);

//Task 9 
let i = 10; // initilization
do {
    console.log(i); // print that i value (o/p : 10)
    i++; //10+1
} while (i <= 5); //10 <= 5 => false 

//Output : 10 

//Task 10
let name = "javascript";
for(let j of name){
    console.log(j);
}

//Task 11
let fruit = ["Apple","Banana","Orange","Grapes","Mango"]
for(let k of fruit){
    console.log(k);
}

//Task 12
let student = ["Ramya","Priya","Arun","Bala","Ram"]
for(let l of student){
    console.log("Student: "+l);
}

//Task 13
let employee = {
    name : "Arun",
    age : 25,
    role : "Developer",
    city : "Chennai"
}
for(let m in employee){
    console.log(m, employee[m]);
}

//Task 14
let product={
    productName : "Realme Buds air 8",
    price : 4300,
    brand : "Realme",
    category : "Earbuds",
    stock : true
}
for(let n in product){
    console.log(n,product[n]);
}

//Task 15
function welcome() {
    console.log("Welcome to Javascript");
}
welcome();
welcome();
welcome();

//Task 16
function greet(name){
    console.log("Welcome " + name);
}
greet("Sridhar");
greet("Parthi");
greet("Suriya");

//Task 17
function students(name,age,dept){
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Department: " + dept);
}
students("Sridhar",24,"ECE");
students("Sowndarya",24,"CSE");
students("Pradeep",23,"EEE");

//Task 18
function add(a,b) {
    return a+b;
}
let result = add(10,20);
console.log(result);

//Task 19
function salary(amount){
    return amount;
}
let givenAmount = salary(50000);
console.log(givenAmount);

//Task 20
function salary(salary){
    return salary;
}
let amount = salary(40000);
function bonus(bonus) {
    console.log(amount + bonus);
}
bonus(8000);

//Task 21
function employees(name,dept="Developer"){
    console.log(name,dept);
}
employees("Arun");
employees("Priya","Designer");

//Task 22
function square(number) {
    return number * number;
}
console.log(square(2));
console.log(square(5));
console.log(square(8));
console.log(square(12));
console.log(square(16));

//Task 23
let calculate = function(a,b){
    return a+b;
};
console.log(calculate(10,5));

//Task 24
let multiply = (a,b) =>{
    return a*b;
};
console.log(multiply(4,8));

//Task 25
// function test() {

//     if (true) {

//         var a = 10;
//         let b = 20;
//         const c = 30;

//         console.log(a); // print 10
//         console.log(b); //print 20
//         console.log(c); //print 30
//     }

//     console.log(a); // print 10
//     console.log(b); // its not printed
//     console.log(c); //its not printed
// }
//test();

//let and const are block scope this value can be only accesee inside the block 
//var is global scope this can access outside the block also.

//Task 26
// console.log(a);
// var a = 10;

//it shows undefined, the variable only hoisted but the value is not hoisted.


//Task 27

// console.log(b);
// let b = 20;
//It shows ReferenceError, It stays Temporal dead zone until it reaches the declaration.
//It cannot be accessed before its declaration.

//Task 28

// console.log(c);
// const c = 30;
//It shows ReferenceError, It stays Temporal dead zone until it reaches the declaration
//It cannot be accessed before its declaration.

//Task 29
(function(){
    console.log("Welcome to javascrpit");
})
();

(function(product,discount){
    console.log(`Now going on Sale ${product} at discount of ${discount}%.`);
})("Watch",20)

//Task 30
function welcome() {
    console.log("Welcome");
}
function execute(callback) {
    callback();
}
execute(welcome);
//excute is higher order function
//welcome is call back function

//Task 31
function* cashback(){
    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better Luck Next Time";
}
let allCash = cashback();
for (let a of allCash){
console.log(a);
}

//Task 32
let employee1 =[
    {
        name : "Sridhar",
        age : 24,
        department : "ECE",
        role : "Developer",
        salary : 40000 
    },
    {
        name : "Suriya",
        age : 25,
        department : "IT",
        role : "Designer",
        salary : 50000
    },
    {
        name : "Ram",
        age : 23,
        department : "CSE",
        role : "Backend",
        salary : 30000
    }
];

//'for of' function
for (let emp of employee1) {
    console.log("Employee Detail : ");
    console.log(emp);
}

//'for in' function
console.log("Employee Keys and Values :");
for (let emp of employee1) {
for (let key in emp){
    console.log(key +" : "+emp[key]);
}
}

//Using 'for' function
function dispEmployee(name,age,department,role,salary){
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Department: " + department);
    console.log("Role: " + role);
    console.log("Salary: " + salary);
}

//Parameter passing
for(let emp of employee1){
    dispEmployee(
    emp.name,
    emp.age,
    emp.department,
    emp.role,
    emp.salary
    )
    console.log(" ");
}

//Return type
function getSalary(emp) {
    return emp.salary;
}

console.log("Employee Salary:");
for(let emp of employee1){
    let salary = getSalary(emp);
    
    console.log(`Name: ${emp.name}, Salary: ${salary}`);
}

//Salary Check
for(let emp of employee1){
    if(emp.salary >= 40000)
        console.log(`${emp.name} has salary of ${emp.salary}`);
}

//Using arrow function
let annualSalary = (salary) => salary * 12;
for(let emp of employee1){
    console.log(`${emp.name} annual salary is ${annualSalary(emp.salary)}`);
}

//Generator
function* employeeBenefit(){
    yield "Medical Insurance"
    yield "Transport"
    yield "Food Allowance"
    yield "Bouns"
}
let benefit = employeeBenefit();
console.log(benefit.next().value); 
console.log(benefit.next().value); 
console.log(benefit.next().value); 
console.log(benefit.next().value);