function countB(str){
    let count=0;
    for(let i=0; i<str.length;i++){
        if(str[i]=="B"){
            count+=1;
        }
    }
    return count;
}

// console.log(countB("abba ABBA BABA baba"));


function countB(str, char="B"){
    console.log(char);
    count=0;
    for(let i=0; i<str.length;i++){
        if(str[i]==char){
            count+=1;
        }
    }
    return count;
}
console.log(countB("abbaa ABBA BABA baba"));
console.log(countB("abbaaa ABBA BABA baba", "a"));
console.log("------------------")
// Extra Assignment
// Define the function min that takes two arguments and returns their minimum. We should not
// use Math.min() we need to implement one our own.

const result = (a,b)=>a>=b?b:a;
console.log(result(6,4));


// We’ve seen that we can use % (the remainder operator) to test whether a number is even or
// odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a
// positive whole number is even or odd:

const check_even= (number) =>{
    if(number==0){
        return true;
    }else if(number==1){
        return false;
    }else{
        return check_even(number-2);
    }
}
console.log(check_even(12));
console.log(check_even(11));
// console.log(check_even(-1)); //it gives stack over flow error
