
//Write a program that takes a number and calculates the sum of all numbers from 1 to that number.
function sumofallNumbers(sumN){
    var s=0;
    for(let i=1;i<=sumN;i++){
       // console.log(s+=i);
       s+=i;
    }
    return s;

    
}
console.log(sumofallNumbers(10));