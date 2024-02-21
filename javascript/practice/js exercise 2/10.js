function Max(arr,Prop){
if(arr.length===0){
    return null;
}

let OBJ=arr[0];
for(let i=1;i<arr.length;i++){
    if(arr[i][Prop]>OBJ[Prop]){
       OBJ=arr[i];
        
   
}



}
return OBJ;
}

const arr1 = [
    { name: "apple", price: 1 },
    { name: "banana", price: 2 },
    { name: "orange", price: 3 }
  ];
  let result=Max(arr1,'price');
  console.log(result);
  
  
  const arr2 = [
    { name: "Arnob", age: 20 },
    { name: "Argho", age: 21 },
    { name: "Harry", age: 24 }
  ];

  let result1=Max(arr2,'age');
  console.log(result1);