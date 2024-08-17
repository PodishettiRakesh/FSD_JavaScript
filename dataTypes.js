// 1.Numbers
console.log(24);

let number= 34;
console.log(number+10);

console.log( typeof 24.5);
console.log(typeof number);

console.log(1e3);

console.log(Infinity, Math.max()); //why Math.min() is returning Infinity instead of negative Infinity?
console.log("-----------------------------")
console.log()

// Strings

console.log("learning java script");
console.log("learning javascript is\nvery easy");
let sentenece=`learning javascript using
eloquent is simple`;
console.log(sentenece);
console.log('we can also write strings using single quotes');
console.log(`-----------------------------`)

// boolean data type
console.log(4<3);
console.log(1 || 0);
console.log(1 && 0);

let value1=5;
let value2 ='5';
console.log(value1==value2);
console.log(value1===value2);
console.log(5<4 || 4>3);
console.log("------------------------------")

// Operators
let num=5;
console.log(++num);
console.log(num++);
console.log(num+5);
console.log(num%3);
console.log(num>7 ? 1: 0);
console.log(num==num ? "samevalue": "differentvalue");
console.log('-----------------------')

//special values NULL and Undefined
let x;
console.log(x);
console.log(x/3);
console.log(typeof c);
let z=null;
console.log(z);
console.log(typeof z); //why it is returning the object, is object also an dataType in javaScript?


// Type coercion
console.log('5'+4);
console.log(4*'5');
console.log(typeof ('5'+4));
console.log(typeof (4+'5'));

let string="50";
console.log(string-10);
console.log(typeof (string-10));


