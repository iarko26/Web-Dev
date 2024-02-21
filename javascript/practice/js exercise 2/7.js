//Write a function that takes an array of strings as an argument and returns a new array with only the strings that have a length greater than 5
//without arguments
let arr=['hello','arnob','Hello world','hi'];

let aos=arr.filter(aos=>aos.length>5);
console.log(aos);
//with arguments
function filterArraystrings(arguments){
var fiterstring=[];
for(let i=0;i<arguments.length;i++){
    if(arguments[i].length>5){
        fiterstring.push(arguments[i]);
    }

    
}
return fiterstring;
}
let result=filterArraystrings(['hello','how are you','hi']);
console.log(result);
let result1=filterArraystrings(['122345','12334','Arnob ghosh']);
console.log(result1);