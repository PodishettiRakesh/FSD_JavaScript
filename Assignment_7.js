let range=(start,end, step=1)=>{
    let numbers=[];
    for(let i=start; i<=end; i+=step){
        numbers.push(i);
    }
    return numbers;
}
// console.log(range(2,6));

let sum=nums=>{
    let value=0;
    for(let i =0; i<nums.length; i++){
        value+=nums[i];
    }
    return value;
}
console.log(sum(x=range(1,10,2)));
console.log(x);

// Reversing an Array
