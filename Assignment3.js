// Data Types in JavaScript
// Primitive and Object data types
// In primitive => Number, String, Boolean, Null, Undefined, Symbol
// In Object => 

// Number datatype
// all float,hexa, numbers in javascript are number type only
let num=8.4;
let hexa = 0xf;
let num1= 2e4;
console.log(typeof  num);
console.log(typeof hexa);
console.log(num1);
console.log(typeof Number.MAX_VALUE * 10); //anything go beyond max value is an Infinity in JS
console.log(typeof 10101010101010010101010n); //this is bigint, we cannot perform mathematical operations with other type
console.log("--------------------")
//Strings
// all text include values are considered as Strings                               
let name= "rakesh";
console.log(name, typeof name); //string type
let surname="podishetti"
let fullName= name + " "+ surname;
console.log(fullName);
// we have some special characters like 
//  "/" it is an escape charcter
//  "/n" new line char and /t tap space char
//  "/b" it performs one back space
console.log("--------------------")
// boolean
// boolean have only two values either true or false
// we can perform conditions on differnt variables
console.log(5>7);
num3=6
console.log(6>=num3);
console.log("rakesh"==="rakesh");