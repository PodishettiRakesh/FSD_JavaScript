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


// null
// null is datatype, when we intentionally assign no value to an variable
let x = null;
console.log(x);
console.log(typeof x);//object

// undefined 
let y;
console.log(y);
console.log("-------------")


// type conversion
// type conversion is an converting one datatype value to an other data type explicitly
let x1=7;
let x2=String(x1);
console.log(typeof x1);
console.log(typeof x2);
// above number is converted to String and we can do vice versa

let v1= true;
let v2= Number(v1);
let v3= String(v1);
console.log(v1,v2,v3); //true 1 true
console.log(typeof v1, typeof v2, typeof v3); //boolean number string
console.log("-----------------")

// type coercion
// the automatic conversion from one value to other value , it is done by javascript implicitly
let str = "rakesh"
console.log(str+7);

let v= false;
console.log(v+3);


// Arthemetic operators
// these operators are used to perform mathematical operations
// *, /, % are some operators
console.log(4/2);
console.log(4*2);


// Realtional Operators
// used to comapre values and also datatypes between two variables or two operations
console.log("2"==2);
console.log(4<=5);

// Logical operators