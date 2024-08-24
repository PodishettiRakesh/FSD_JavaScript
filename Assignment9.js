// Q1. Explain the .map() function in JavaScript and provide three examples with detailed explanations.
// map() in js is used to create an new array by appling the given function on each element of an given array
// exmaples
let students=[{name:"rakesh", age:25},
    {name:"raki", age:24},
    {name:"nithin", age:35}
]

let studentNames=students.map(student=>student.name);
console.log(studentNames);//extracting name property from array of objects

