//Task 1
let name = "Sridhar";
const ageAAA = 25;
var city = "Chennai";
let college = "K Ramakrishnan college of Engineering";

console.log(name);
console.log(ageAAA);
console.log(city);
console.log(college);

city = "Salem";

name = "Parthiban";

// age = 27;

// let name = "Chinna";
// const age = 30;
var city = "Trichy";
// let college = "Dhanalakshmi college of Engineering";


//Task 2
console.log("Welcome");
alert("How are you?");
confirm("Are you sure?");
prompt("Enter your name:");
document.write("welcome to the world of JavaScript");

//Task 3
let name1 = prompt("Enter your name: ");
let age1 = prompt("Enter your age: ")
let city1 = prompt("Enter your city: ");
let qulification = prompt("Enter your qualification: ");
console.log(name1);
console.log(age1);
console.log(city1);
console.log(qulification);

//Task 4
let a = "Javascript";
let b = 100;
let c = 99.5;
let d = true;
let e = false;
let f = undefined;
let g = null;
console.log(typeof (a));
console.log(typeof (b));
console.log(typeof (c));
console.log(typeof (d));
console.log(typeof (e));
console.log(typeof (f));
console.log(typeof (g));

//Task 5
let student = ["Deva", "Chinna", "Sanjay", "Partha", "Saksena", "Avinash"]
console.log("First student: " + student[0]);
console.log("Second student: " + student[1]);
console.log("Last student: " + student[student.length - 1]);
console.log("Total Student: " + student);
console.log("Number of Student: " + student.length);

//Task 6
let employee = {
    name: "Aviansh",
    age: 24,
    role: "Full stack developer",
    skills: ["HTML", "CSS", "JS"],
    isWorking: true,
    qualification: ["BE", "ME"]
}
console.log("Employee name: " + employee.name);
console.log("Age: " + employee.age);
console.log("Role: " + employee.role);
console.log("First Skill: " + employee.skills[0]);
console.log("Last Qualification: " + employee.qualification[employee.qualification.length - 1]);
console.log("Working Status: " + employee.isWorking);

//Task 7
let a1 = 20;
let b1 = 5;
var add = a1 + b1;
var sub = a1 - b1;
var mul = a1 * b1;
var div = a1 / b1;
var mod = a1 % b1;
var expo = a1 ** b1;
console.log("Addition: " + add);
console.log("Subtraction: " + sub);
console.log("Multiplication: " + mul);
console.log("Division: " + div);
console.log("Modulus: " + mod);
console.log("Exponentiation: " + expo);

//Task 8
let shirt = 999;
let pant = 1499;
let shoes = 1999;
let bag = 799;

var total = shirt + pant + shoes + bag;

console.log("Total: " + total);

//Task 9

//A
let a2 = 10;
let b2 = a2++;
// o/p : a2=11, b2=10
console.log(a2);
console.log(b2);

//B
let a3 = 10;
let b3 = ++a3;
// o/p : a3=11, b3=11
console.log(a3);
console.log(b3);

//C
let a4 = 10;
let b4 = a4--;
// o/p : a4=9, b4=10
console.log(a4);
console.log(b4);

//D
let a5 = 10;
let b5 = --a5;
// o/p : a5=9, b5=9
console.log(a5);
console.log(b5);

//Task 10
let num = 10;
num += 5;
console.log(num);
num -= 5;
console.log(num);
num *= 2;
console.log(num);
num /= 4;
console.log(num);
num %= 3;
console.log(num);
num **= 2;
console.log(num);

//Task 11
console.log(10 > 5); // o/p: true
console.log(10 < 5); // o/p: false
console.log(10 >= 10); // o/p: true
console.log(10 <= 9); // o/p: false

//Task 12
console.log(true && true); // o/p: true
console.log(true && false); // o/p: false
console.log(false && true); // o/p: false
console.log(false && false); // o/p: false

//Task 13
console.log(true || true); // o/p : true
console.log(true || false); // o/p : true
console.log(false || true); // o/p : true
console.log(false || false); // o/p : false

//Task 14
console.log(!true); // o/p : false
console.log(!false); // o/p : true
console.log(!(5 > 10)); // o/p : true 
console.log(!(10 > 5)); // o/p : false

//Task 15
console.log(5 == "5" && !(5 === 5) || 6 > 7);
// true && false || false
// false || false
// o/p : false
console.log(10 > 5 && 8 < 12 || 4 === "4");
// true && true || false
// true || false
// o/p : true
console.log(7 === 7 && 10 != "10" || 5 >= 5);
// true && false || true
// false || true
// o/p : true
console.log(15 < 10 || 20 > 15 && 5 == "5");
// false || true && true
// true && true
// o/p : true

//Task 16
let age = 20;
age >= 18 ? console.log("Eligible to Vote") : console.log("Not eligible");

//Task 17
let password = false;
password == true ? console.log("Login Successful") : console.log("Wrong Password");

//Task 18
let name2 = "Venkatesh";
let age2 = 24;
let city2 = "Pennadam";
//Concatenation
console.log("My name is " + name2 + ". I am " + age2 + " years old. I live in " + city2 + ".");
//Terinary Method
console.log(`My name is ${name2}. I am ${age2} years old. I live in ${city2}.`)

//Task 19
let aa = String(100);
let bb = String(true);
let cc = String(undefined);
let dd = String(null);
let ee = String([1, 2]);

console.log(typeof (aa));
console.log(typeof (bb));
console.log(typeof (cc));
console.log(typeof (dd));
console.log(typeof (ee));

console.log(aa);
console.log(bb);
console.log(cc);
console.log(dd);
console.log(ee);

//Task 20
console.log(Number()); //0
console.log(Number("")); //0
console.log(Number("123")); //123
console.log(Number("a1")); //Nan = 0
console.log(Number(true)); //1
console.log(Number(false)); //0
console.log(Number(undefined)); //Nan = 0
console.log(Number(null)); //0

//Task 21
console.log(Boolean()); //false
console.log(Boolean("")); //false
console.log(Boolean("hello")); //true
console.log(Boolean(123)); //true
console.log(Boolean(true)); //true
console.log(Boolean(false)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(null)); //false
console.log(Boolean([])); //true
console.log(Boolean({})); //ture

//Task 22
let ageA = prompt("Enter your age:");
if (ageA >= 18){
    console.log("You can Vote");
}
else{
    console.log("You can't Vote");
}

//Task 23
let number = prompt("Enter the number:")
if (number > 0){
    console.log("Positive");
}
else if (number < 0){
    console.log("Negative");
}
else{
    console.log("Zero");
}

//Task 24
let mark = prompt("Enter your mark:");
if(mark >= 90 && mark<=100){
    console.log("A Grade");
}
else if(mark >= 80 && mark <= 89){
    console.log("B Grade");
}
else if(mark >= 70 && mark <= 79){
    console.log("C Grade");
}
else if(mark >= 60 && mark <= 69){
    console.log("D Grade");
}
else{
    console.log("Fail");
}

//Task 25
let ageAA = prompt("Enter your age:")
let heightHH = prompt("Enter your height(in cm)")
let weightWW = prompt("Enter you weight(in kg)")
if (ageAA >= 18) {
    if (heightHH >= 160) {
        if (weightWW >= 60) {
            console.log("Congratulations! You are selected");
        } else {
            console.log("You are not under weight");
        }
    } else {
        console.log("You are not under height");
    }
}
else {
    console.log("You are not under age");
}

//Task 26
let trafficLight = "yellow";
switch (trafficLight){
    case "red" : console.log("Stop"); break;
    case "yellow" : console.log("Ready"); break;
    case "green" : console.log("Go"); break;
    default : console.log("Signal mot working");
}

//Task 27
let day = 5;
switch(day){
    case 1 : console.log("Monday"); break;
    case 2 : console.log("Tuesday"); break;
    case 3 : console.log("Wednesday"); break;
    case 4 : console.log("Thursday"); break;
    case 5 : console.log("Friday"); break;
    case 6 : console.log("Saturday"); break;
    case 7 : console.log("Sunday"); break;
    default : console.log("Invalid day"); break;  
}

//Task 28
let userDetail ={
    name :prompt("Enter your name:"),
    age : prompt("Enter your age"),
    city : prompt("Enter your city:")
}

let marks ={
    Tamil: Number(prompt("Enter Tamil mark")),
    English: Number(prompt("Enter English mark")),
    Maths: Number(prompt("Enter Maths mark"))
}

let total1 = marks.Tamil + marks.English + marks.Maths;
let average = total1 / 3;
let vote;
let grade;

if(average >= 90){
    grade ='A';
}
else if(average >= 80){
    grade = 'B';
}
else if(average >= 70){
    grade ='C';
}
else if(average >= 60 ){
    grade = 'D';
}
else{
    grade = "Fail";
}

if(userDetail.age >=18){
    vote = "Eligible";
}
else{
    vote = "Not Eligible"
}

console.log(`Name: ${userDetail.name}`);
console.log(`Age: ${userDetail.age}`);
console.log(`City: ${userDetail.city}`);
console.log(`Total: ${total1}`);
console.log(`Average: ${average}`);
console.log(`Grade: ${grade}`);
console.log(`Voting: ${vote}`);































