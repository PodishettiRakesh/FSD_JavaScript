function countB(str){
    let count=0;
    for(let i=0; i<str.length;i++){
        if(str[i]=="B"){
            count+=1;
        }
    }
    return count;
}

console.log(countB("abba ABBA BABA baba"));