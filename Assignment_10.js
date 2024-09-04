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

    minus(secondVector){
        let a = this.a-secondVector.a;
        let b = this.b-secondVector.b;
        let newvector=new Vec(a,b);
        return newvector;
    }

    length(){
        return Math.sqrt(Math.pow(this.a,2)+Math.pow(this.b, 2));
    }


}
console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length());

class Group{
    constructor(){
        this.memebers=[];
    }
    add(num){
        if(!this.memebers.includes(num)){
            this.memebers.push(num);
        }
    }
}
let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false