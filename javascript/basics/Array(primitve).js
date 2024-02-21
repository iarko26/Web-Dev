let numbers=[1,2,3,4];

console.log(numbers[0]);
//insertion
 let n=[1,4,6,2];
 //end
 console.log(n.push(3));
 //console.log(n);
 //start
 console.log(n.unshift(5));
 //console.log(n);
 //middle
 console.log(n.slice(2,0,8));
 //console.log(n);
 //searching
 console.log(numbers.indexOf(2));
//searching from a specific index
console.log(numbers.indexOf(5,1));
 //check number exist in array
 if(numbers.indexOf(5)!=-1){
    console.log("Present");
 }
 else{
    console.log("Absent");
 }
 //console.log(n.includes(10));

 //removing element
 //end
 console.log(n.pop(3));
 console.log(n);
 //start
 console.log(n.shift(5));
 console.log(n);
 //middle
 console.log(n.splice(2,1));
 console.log(n);

 //empty array
 let n1=n;
 //n.length=0;
 console.log(n1.splice(0,n.length));

//  let n=[];
//  console.log(n);
 