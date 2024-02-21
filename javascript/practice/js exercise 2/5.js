//Write a function called 'sumEvenNumbers' that takes an array of numbers as a parameter and returns the sum of all even numbers in the array.

function paraarray(){
   var arraytoPass=[12,2,3,4,5,6];
  // var arraytoPass=[3,5,7];
    let print =sumEvenNumbers(...arraytoPass);//spread 
 
    console.log(print);
}
function sumEvenNumbers(...arraytoPass){
    let sum=0;
    // for(let  i=0;i<arraytoPass.length;i++){
    //     if(arraytoPass[i]%2==0){
    //         sum+=arraytoPass[i];
    //     }
    
    for(let i of arraytoPass){
        if(i%2==0){
            sum +=i;
        }
    }

    
    return sum;
}

 paraarray();
// let arraytoPass=[1,3,6,12];
// console.log(sumEvenNumbers(arraytoPass));