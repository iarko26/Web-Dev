let car={
    Model:"Premio",
    Brand:"Toyota",
    parts:"wheel",
    get latest(){
        return `${this.Brand} ${this.Model} ${this.parts}`;
    },
    set latest(changeparts){
        this.parts=changeparts;
    }

    
};

//console.log(car.latest);

try{
 
    car.latest=true;
   
}

catch(e){
        alert(e);
}
console.log(car.latest);