
//reference (adress copy)
let a={value:10};//10
let b=a;//10
a.value++;//11
console.log(a.value);//11
console.log(b.value);//11
//--------------------------------
let d={value:11};
function increment(value){
d.value++;
}
increment(d.value);
console.log(d.value);
//--------------------------------
//primitive (value copy)
let e=10;
function inc(e){
  e++;
}
inc(e);
console.log("ans:",e);