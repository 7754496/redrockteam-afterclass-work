1.
const obj={
    name:"angel beats!",
    getName(){
        return this.name;
    },
};

2.
class Animation(){
    constructor(){
        this.name="angel beats!";
    }
    getName(){
        return this.name;
    }
}

const obj=new Animation();

3.
const Animation=function(){
    this.name="angel beats!";
    this.getName=function(){
        return this.name;
    }
}

const obj=new Animation();
console.log(obj);