//Write a function that takes an array of numbers as an argument and returns the sum of all the numbers in the array

//it will only in one case 

// var arryofNumbers=[1,2,3,4,5];


// function SumArrNum(...arryofNumbers){
//     let sum=0;
//   for(let i of arryofNumbers){
//     sum+=i;
//   }
//   return sum;
    


// }
// let Print=SumArrNum(...arryofNumbers);
// console.log(Print);



//it will for multiple test cases

function SumArrNum(arryofNumbers){
    let sum=0;
  for(let i of arryofNumbers){
    sum+=i;
  }
  return sum;
    


}

var arryofNumbers=[1,2,3,4,5];
console.log(SumArrNum(arryofNumbers));

var arryofNumbers1=[2,4,6,7];
console.log(SumArrNum(arryofNumbers1));

var arryofNumbers2=[10,20,30];
console.log(SumArrNum(arryofNumbers2));