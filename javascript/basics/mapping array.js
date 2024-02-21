let numbers=[1,2,3,4,5];
console.log(numbers);
let items=numbers.map(function (val){
    return 'student_no' + val;
})
console.log(items);
//object
let num=[1,2,-1,-2];
let ite=num.filter(function(value){
    return value>=0;
});
let it=ite.map(function(n){
    return {value:n};
});
console.log(it);
//arrow function
// let num=[1,2,-1,-2];
// let ite=num.filter(value=>value>=0);
// //let it=num.filter(value=>value>=0).map(n=>({value:n}));//good readibility

// console.log(it);