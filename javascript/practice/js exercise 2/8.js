//Write a function that takes an object and returns an array of all the keys in the object
let createobj={
    StdName:'Arnob',
    stdID:'21-45050-2',
    Age:21
};
var caraRR=[];

function OBJ(){
        let obj=Object.assign({},createobj);
        for(let key in obj){
            caraRR.push(key);

        }
        return caraRR;

    
}
let resultOBJ=OBJ();
console.log(resultOBJ);