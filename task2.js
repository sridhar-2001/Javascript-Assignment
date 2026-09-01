//Task 1

var studentName = "Sridhar";
let studentAge = 24;
const collegeName = "K Ramakrishnan college of Engineering";

console.log(studentName);
console.log(studentAge);
console.log(collegeName);

studentName = "Parthi";
studentAge = 25;

// collegeName = "Dhanalakshmi college";
// console.log(collegeName); 

var studentName = "Chinna";
//let studentAge = 27;

//Task 2

let name = prompt("Enter your name:");
let age = prompt("Enter your age:");
let city = prompt("Enter your city:");

console.log("Name: "+name);
console.log("Age: "+age);
console.log("City: "+ city);

//Task 3

let name1 = prompt("Enter your name:");
alert("Welcome " + name1);

//Task 4

let  birthYear = prompt("Enter your Birth Year:");
let currentYear = 2026;
let age1 = currentYear - birthYear;
console.log("Birth Year:" +birthYear);
console.log("Age: "+age1);

//Task 5

var a = "Hello";
var b = 100;
var c = 25.5;
var d = true;
var e = false;
var f ;
var g = null;
console.log(typeof(a));
console.log((typeof(b)));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(e));
console.log(typeof(f));
console.log(typeof(g));

//Task 6

let studentData ={
    name : "Dhanabal",
    age : 25,
    city : "Madurai",
    qualfication:["BE","ME"],
    isStudent : true
}
console.log(studentData);
console.log(studentData.name);
console.log(studentData.age);
console.log(studentData.qualfication);
console.log(studentData.isStudent);

//Task 7

let fruits = ["Apple","Mango","Orange","Banana","Grapes","Papaya"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length-1]);
console.log(fruits.length);

//Task 8

let a1 = 20;
let b1 = 5;
var add = a1 + b1;
var sub = a1 - b1;
var mul = a1 * b1;
var div = a1 / b1;
var mod = a1 % b1;
var expo = a1 ** b1;
console.log("Addition: " + add);
console.log("Subtraction: "+ sub);
console.log("Multiplication: "+ mul);
console.log("Division: "+ div);
console.log("Modulus: "+ mod);
console.log("Exponentiation: "+ expo);


//Task 9

let shirt = 999;
let pant = 1499;
let shoes = 1999;

let total = shirt + pant + shoes;

console.log("Total: "+ total);

//Task 10

let mark = {
    Tamil: 80,
    English: 75,
    Maths: 90
}

let totalMark = mark.Tamil + mark.English + mark.Maths;
let average = totalMark / 3;

console.log("Total marks: "+totalMark);
console.log("Averaage mark: "+average);

//Task 11

let a3 = 10;
let b3 = a3++;

//output: a3=11, b3=10

console.log(a3);
console.log(b3);

//Task 12

let a4 = 10;
let b4 = ++a4;

//output a4=11, b4=11

console.log(a4);
console.log(b4);

//Task 13

let a5 = 20;
let b5 = a5--;

//output: a5=19, b5=20

console.log(a5);
console.log(b5);

//Task 14

let a6 = 20;
let b6 = --a6;

//output: a6=19, b6=19

console.log(a6);
console.log(b6);

//Task 15

let a7 = 5;
let b7 = a7++;
let c7 = ++a7;
let d7 = b7--;

//output: a7=7, b7=4, c7=7, d7=5

console.log(a7);
console.log(b7);
console.log(c7);
console.log(d7);

//Task 16

let num = 10;

//used seperate operation one by one, if the one operation completed changed into comment and do another operation. 
// num += 5;
// num -= 5;
// num *= 2;
// num /= 2;
// num %= 5;
 num **=3;

console.log(num);

//Task 17

let student={
    name : "Sridhar",
    age : 18,
    city : "Trichy",
    subjects : ["Tamil","English","Maths","Sceince","Social"],
    isStudent : true
}

console.log("Student name: "+ student.name);
console.log("Student age: "+ student.age);
console.log("City: "+ student.city);
console.log("First Subject: "+ student.subjects[0]);
console.log("Last Subject: "+ student.subjects[student.subjects.length-1]);
console.log("Total subjects: "+ student.subjects);
console.log("No.of.subjects: "+ student.subjects.length);
console.log(student);


//Task 18

let user1 = Number(prompt("Enter First Number :"));
let user2 = Number(prompt("Enter Second Number:"));

let add1 = user1 + user2;
let sub1 = user1 - user2;
let mul1 = user1 * user2;
let div1 = user1 / user2;
let mod1 = user1 % user2;
let exp1 = user1 ** 2;
let exp2 = user2 **2;

console.log("Addition: " + add1);
console.log("Subtraction: " + sub1);
console.log("Multiplication: " + mul1);
console.log("Division: " + div1);
console.log("Modulus: " + mod1);
console.log("Power1: " + exp1);
console.log("Power2: " + exp2);













