let arrays=[[1,2,3],[[4,5],[6]]]
// let flatten=arrays.reduce((newArray,array)=>newArray.concat(array));
// console.log(flatten);

let flatten=arrays.flat(2);
console.log(flatten);

function forloop(actualvalue, testfunction, updatedfunction, bodyfunction){
    let value=actualvalue;
    while(testfunction(value)){
        bodyfunction(value);
        value=updatedfunction(value);
    }
    
}

forloop(3, n=>n>0, n=>n-1, console.log);
