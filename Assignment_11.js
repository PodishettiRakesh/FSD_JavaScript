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

// console.log(reliableMultiply(4,4));

const box = new class {
    locked = true;
    #content = [];
  
    unlock() { this.locked = false; }
    lock() { this.locked = true;  }
    get content() {
      if (this.locked) throw new Error("Locked!");
      return this.#content;
    }
  };

function withBoxUnlocked(body){
    let initiallyLocked=box.locked;

    if(!initiallyLocked){
        return body();
    }

    box.unlock()

    try{
        return body();
    } finally {
        if(initiallyLocked){
            box.lock();
        }
    }
}


console.log("Test 1: Adding an item to the box");
withBoxUnlocked(() => {
  box.content.push("gold piece");
});
console.log(box.content); 
console.log(box.locked);


// --------------------------------------

let number = /^[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/;

for (let str of ["1", "-1", "+15", "1.55", ".5", "5.",
                 "1.3e2", "1E-4", "1e+12"]) {
  if (!number.test(str)) {
    console.log(`Failed to match '${str}'`);
  }
}

