//Task 1
//var is the function scope, we can reassign and redeclare in same scope.
//let and const are block scope 
//In let we can reassign but we can't redeclare it again.
//In const we can't reassign and redeclare.

//Task 2
//Yes, "var" can be redeclare  but "let" and "const" connot redeclare.

//Task 3
// var x = 5;
// let y = 10;
// const z = 15;
// x = 20; //the value is changed
// y = 25; //the value is changed
// //z = 30; //if we declare this it show error because we cannot change the value of const.
// console.log(x, y, z);  // Output : 20 , 25 , 15

//Task 4
//Declaring means creating a variable .
// Initializing means giving value to that variable.

//Task 5
//let a; here we just decalred the variable not given any value.
//console.log(a); Output : undefined

//Task 6
//Hoisting is the process of declaring the variable before its code exection.
//example:
//console.log(a);
//var a = 10;

//Task 7
//undefined means decalred the variable but the value is not assigned.
//null means assigned value but the value represent abscene of value.

//Task 8
//console.log(typeof null); //object
//console.log(typeof undefined); //undefined
//console.log(typeof []); //object
//console.log(typeof {}); //object

//Task 9
//"==" (loose equal) checks the value on both side if its equal or not.
//"===" (strict equal) checks the value on both side if its equal or not and also check both data type are same.

//Task 10
//"++i" its pre-increment. first the value is increased then the value is used.  
//"i++" its post-increment .current value is used then the value is increased.

//Task 11
let x = 10;
let y = "5";
console.log(x + y); // Output : 105, the value of y is string and the '+' symbol act has concatination
console.log(x - y); // Output : 5
console.log(x * y); // Output : 50
console.log(x / y); // Output : 2

//Task 12
//There are three logical operator.
//[i] '&&' (AND) - it checks if the all values are "true" then only its "true". If single value is "false", it takes has "false".
//example:
//let age = 25;
//let hasLicense = true;
//console.log(age >= 18 && hasLicense); // Output : true

//if any one value is "false"
//console.log(age >= 18 && false); // false

//[ii] '||' (OR) - Even one value is "true" it takes has true. All the values are "false" means only it takes has "false".
//example:
//let isStudent = false;
//let isEmployee = true;
//console.log(isStudent || isEmployee); // true

//[iii] '!' (NOT) - It give value has opposite. "true" means "false". "false" meas "true".   
//example:
//console.log(!true);   // false
//console.log(!false);  // true

//Task 13
//console.log(5 > 3 && 10 > 5);
//true && true
//Output : true

//console.log(5 > 10 || 10 > 5);
//false || true
//Output : true

//console.log(!(5 > 3));
// !(true)
// Output : false

//Task 14
//It is like true or false function but it prints sthe statment like "if...else" statement.
//example:
//let age = 20;
//let result = age >= 18 ? "Adult" : "Not an adult";
//console.log (result);

//Task 15
//Implicit type casting converts automatically that data type.
//Explicit type casting and done by mannually convert the data type.

//Task 16
console.log(Number("123")); // Output : 123
console.log(Number("hello")); // output: NaN
console.log(Number(true)); // Output : 1
console.log(Number(false)); // Output : 0
console.log(Boolean(0)); // Output : false
console.log(Boolean("hello")); //Output : true

//Task 17
//NaN means Not an Number it represent invalid or undefined.

//Task 18
// "if else" used for condition and comparision.
// "switch" case used to compare one value with multiple value.

//Task 19
let age = 20;
if(age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
// Output : Adult

//Task 20
//nested if means that if statement inside contain another if statement
let age1 = 20;
let hasID = true;
if (age >= 18) {
  if (hasID) {
    console.log("You can enter.");
  }
}

//Task 21
let num = 8;
let checkNum = num % 2 == 0 ? "Even" : "Odd";
console.log(checkNum);

//Task 22
//"while" loop : If we don't know the range we can use this loop. It first chek the condition then only it goes to statement.
//"do while" loop : In this first it takes the statement then only it check the condition. 

//Task 23
for(let i = 1; i <= 5; i++) {
    console.log(i);
} //output: 1 2 3 4 5

//Task 24
// In "for of" we can used for string and array.
// In "for in" we can used for object only.

//Task 25
let num1 = 1;
let sum = 0;
while(num1 <= 100){
    sum = sum + num1;
    num1++;
}console.log(sum);

//Task 26
//splice() is used to remove the particular value and adding the value in removed place.
//slice() is used to show the particular value to the user side, It copy that portion.


//Task 27
let arr = [1, 2, 3];
arr.push(4); //1 2 3 4
arr.pop(); //1 2 3
arr.unshift(0); // 0 1 2 3
arr.shift(); // 1 2 3
console.log(arr); // output : 1 2 3

//Task 28
//Function declaration - It is used to give name for that function.
//function name(parameter)

//example:
// function add(a, b) {
//   return a + b;
// }
// console.log(add(2, 3));

//Function Expression - It can be assigned by variable.

//example:
// const add = function(a, b) {
//   return a + b;
// };
// console.log(add(2, 3));

//Task 29
//arrow function is a shorter way to write a function . It uses the => symbol.
//example:
//const add = (a, b) => {
//   return a + b;
// };
// console.log(add(10, 20));

//Task 30
function greet() {
    return "Hello";
}
let message = greet();
console.log(message);
//Output : Hello


