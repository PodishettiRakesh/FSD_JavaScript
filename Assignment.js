const students = [
    { name: 'Aishwarya', score: 85 },
    { name: 'Bhanu', score: 65 },      
    { name: 'Chaitanya', score: 95 },  
    { name: 'Devi', score: 55 },       
    { name: 'Esha', score: 78 }  
  ];
console.log("Hello World");

// filter students with score greater than 75
// traditional for loop
const topStudents1=[];
for(let i=0; i<students.length; i++){
    if(students[i].score>75){
        topStudents.push(students[i]);
    }
}
// console.log(topStudents);

//Using filter with a regular function
const topStudents2 = students.filter(function(student){
    return student.score>75;
})
console.log(topStudents2);

