// Q1. Explain the .map() function in JavaScript and provide three examples with detailed explanations.
// map() in js is used to create an new array by appling the given function on each element of an given array
// exmaples
let students=[{name:"rakesh", age:25},
    {name:"raki", age:24},
    {name:"nithin", age:35}
]

let studentNames=students.map(student=>student.name);
console.log(studentNames);//extracting name property from array of objects

let nums=[1,2,3,4,5,6];
let multi3=nums.map((num)=>num*3);
console.log(multi3);

let uppercaseNames=students.map(student=>student.name.toUpperCase());
console.log(uppercaseNames);

// reduce() , this function helps to get an single value by reducing the array by applying an test function on each element
let sum=nums.reduce((sum,num)=> sum+num);
console.log(sum);

let arrays=[[1,2,3],[4,5,6]];
let flattenArray=arrays.reduce((newArr,arr)=>newArr.concat(arr));
console.log(flattenArray);


let fruits = ["apple", "banana", "orange", "apple", "orange", "banana", "banana"];
let count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(count);

// filter() function creates an new array with all elements that pass the given test function
let numbers=[1,2,3,4,5,6,8,9,12];
let multiple3=numbers.filter(num=>num%3==0);
console.log(multiple3);