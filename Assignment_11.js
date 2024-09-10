class MultiplicationUnitFailure extends Error{}

function primitiveMultiply(a,b){
    if(Math.random()<0.2){
        console.log("number");
        return a*b;

    }else{
        console.log("error");
        throw new MultiplicationUnitFailure("Klunk");
        
    }
}

function reliableMultiply(a,b){
    while (true){
        try{
            return primitiveMultiply(a,b);
        } catch (error){
        if(!(error instanceof MultiplicationUnitFailure))
            throw error;
        }
    }
}

console.log(reliableMultiply(4,3));