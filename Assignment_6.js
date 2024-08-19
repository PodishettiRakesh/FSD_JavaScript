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