// Explain the difference between null and undefined in JavaScript.
// undefined
/*`
undefined means variable has been declared but not assigned value to it.

ex:
let num;
console.log(num); output: undefined
`*/

// null
/*`
null is an value that we can intentionally set a variable to have no value.

let x= null;
console.log(x); the output is null.
`*/

// Q2
console.log('10'+5);
/*output: 105 
the above output is string type because it perform typr coercion,
converting number 5 into string and do string concatination.
*/
console.log('10' - 5); //output: 5
/* unlike + operator, '-' operator only works with numbers so it converts string 10 to number 
and performs numberic subtarction*/
console.log(true+1); //output is 2
// numeric addition performed because in javascript true coerced to number 1.
console.log(false+undefined); //output is NaN
/* because undefined which is not a number is involving in the numeric operation */


// Q3 Difference between == and ===
/* == operator is used to compare the value of two variables are equal or not. but ot will not check the type of the value.

    === operator the check the both values and types of the variables are equal or not, if equal returns true or else false. 
    */


// Q4 predict output for follwing expression
console.log(0 == false); //true  reason: false is considered as 0, so both values become 0 and results in true
console.log(0 === false); //false reason: both are different datatypes , === operator checks both datatype and value is same or not
console.log('' == 0); //true  reason: empty string is considered as 0 , then both values become same and results in true
console.log(''=== 0); //false reason: different datatypes results in false
console.log(typeof ''); //string


// Q5 predict output for follwing expression
console.log(0 || 1 && 2 || 3); //output: 2
/*first && operator is performed and give result 2, then expression will be 0||2 || 3
first || operator give result 2 and second || operater between 2 and 3 give output as 2.
 */
console.log(false || (true && false) || true);

console.log(0 && 1 || 2 && 3); //output: 3
/*first AND logic operator gives 0
  second AND operator gives 3 
  and OR operator between 0 & 3 results in 3 */


// Q6
let a=10, b=20, c=30;
console.log(a+b*c); //610
console.log((a+b)*c); //900
/* for above both snippets , it follows bodmas rule. In which the order of operations start from bracket and ends with subtraction */
console.log(a+b>c ? a:b); //20 
// Above snippet is an terinary operation, the given expression result in false, so output will be 'b' which is 20

console.log((a>b) && (b>c) || (a>c)) ; // false 
/*a>b is false
b>c is false
a>c is false
false && false || false will give output as false */


// Q7
console.log([1,2,3] + {}); //output: [123object object]
/*+ operator perfomes the concatination 
in javascript an array is converted to string when performs concatenation 
and also an object is converts into object */ 
console.log({} + []);
console.log([] == ![]);//true...*
console.log('' == []);// output: true because with type coercion empty array converted to emoty string


// Q8
console.log(+""); //output 0, in JS when + operator perfored on empty string it convert to string to a  number 0
console.log(+true); //output:1, unary + converts true to number 1
console.log(+false); //output:0, unary + converts false to number 0
console.log(+null); // output:0 ,unary + converts null to 0
console.log(+undefined); // NaN ,we cannot perform + operator on undefined beacuse it is not a number