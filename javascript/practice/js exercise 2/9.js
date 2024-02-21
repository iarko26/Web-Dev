//Write a function that takes an array of objects and returns an array of all the values of a specified property name
let arrobj = [
    { 'Gname': 'call of duty', 'price': '$14' },
    { 'Gname': 'Gta vi', 'price': '$100' },
    { 'Gname': 'Fifa 23', 'price': '$10' }
  ];
  function ArrOBJ(arrobj,PropN){
    let val=arrobj.map(OBJ=>OBJ[PropN]);
    return val;
  }
let result=ArrOBJ(arrobj,'Gname');
console.log(result);
let result1=ArrOBJ(arrobj,'price');
console.log(result1);
let result2=ArrOBJ(arrobj,'Category');
console.log(result2);
