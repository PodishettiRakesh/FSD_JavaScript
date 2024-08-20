let array=(start,end)=>{
    let numbers=[];
    for(let i=start; i<=end; i++){
        numbers.push(i);
    }
    return numbers;
}
console.log(array(2,6));