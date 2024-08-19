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
