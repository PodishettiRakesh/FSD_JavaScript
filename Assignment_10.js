class Vec{
    constructor(a,b){
        this.a=a;
        this.b=b;
    }

    plus(secondVector){
        let a=this.a+secondVector.a;
        let b = this.b+secondVector.b;
        let vector=new Vec(a,b);
        return vector;
    }

    
}
console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
// console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// // → Vec{x: -1, y: -1}
// console.log(new Vec(3, 4).length);