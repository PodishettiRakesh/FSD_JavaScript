let range=(start,end)=>{
    let numbers=[];
    for(let i=start; i<=end; i++){
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

console.log(sum(range(1,3)));