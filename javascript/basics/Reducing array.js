let arr1=[-1,-2,3,4];
// var total=0;
// for(let val of arr1){
//     total+=val;
// }
// console.log(total);

let total=arr1.reduce((accumulator,currlvalue)=>accumulator+=currlvalue);
console.log(total);