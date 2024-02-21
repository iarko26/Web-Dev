//function declaration
run();//hoisting
function run(){
    console.log("running");
}
//function assignment
////it will not work beacause of hoisting only work in function call
 function walk(){
    console.log("walking");
}
let keepwalk=walk();
keepwalk;

let x=1;
x='a';
console.log(x);
// function sum(a,b){
//     console.log(arguments);
//     return a+b;
// }
// console.log(1,2);//print 1 2
// console.log(sum(1,3));//4
// console.log(sum(1));//NaN
// let ans= sum(1,2,3,4,5);//object
//multiple arguements
function s(c,d){
    let total=0;
    for(let value of arguments){
     total+=value;
    
    }
    return total;
   }
let a=s(1,2,3,4,6,7);
console.log(a);



//rest operator
function sum(num,...args){
    console.log(args);
}
sum(1,2,3,5);
//default parameter
function interest(p,r=10,y=5){
    return p*r*y/100;
}
console.log(interest(100))

let person={
    firstname:'Arnob',
    Lastname:'Ghosh'
};

function fullname(){
    return `${person.firstname}  ${person.Lastname}`;
}
console.log(fullname());


//setter getter
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
car.latest='window';
console.log(car.latest);

//----------------
let school={
    Fullname:"arnob ghosh",
    stid:12345,
    grade:[],
    get results(){
        return `${this.Fullname}, ${this.stid},${this.grade.join(' , ')} `;
    },
    set results(grade){
        this.grade.push(grade);
    }
    };
school.results='A';
console.log(school.results);
