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
console.log("----------------")

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
console.log("----------------------------")

// arrayToList
function arrayToList(arr){
    let res=null;
    for(let i=arr.length-1; i>=0; i--){
        res={"value":arr[i],"rest":res}
        
    }
    return res;
}
console.log(arrayToList([1,2,3,4]));


function listToArray(list){
    let array=[]
    for(let i=list; i!=null;i=i.rest){
        array.push(i.value);
    }
    return array;
}
console.log(listToArray({ value: 1, rest: { value: 2, rest: { value: 3, rest: [Object] } } }))

console.log("------------------------------")
function prepend(num,list){
    return {
      value:num,
      rest:list
    }
  }


const nthPosition= (list, n)=>{
    if(!list) return undefined;
    else if (n==0){
        return list.value;
    }else{
        return nthPosition(list.rest, n-1);
    }

}
console.log(nthPosition(arrayToList([1,2,3,4,5]), 2));