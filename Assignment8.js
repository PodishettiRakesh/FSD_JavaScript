let arrays=[[1,2,3],[[4,5],[6]]]
// let flatten=arrays.reduce((newArray,array)=>newArray.concat(array));
// console.log(flatten);

let flatten=arrays.flat(2);
console.log(flatten);