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
let reverseArray= arr=>{
    let l=arr.length;
    let res=[]; 
    for(let i=l-1; i>=0;i--){
        res.push(arr[i]);
    }
    return res;
}
console.log(reverseArray([1,2,3,4,5]))

let reverseArrayInPlace= arr=>{
    let last= arr.length-1;
    let first= 0;
    while(first<=last){
        let n1=arr[first];
        arr[first]=arr[last];
        arr[last]=n1;
        first++;
        last--;
    }
    return arr;
}
console.log(reverseArrayInPlace([1,2,3,4,5]));

