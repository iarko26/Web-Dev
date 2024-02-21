function assert(x,val,messsage="assertion failed"){
console.assert(x===val,messsage);
if(x!==val){
    throw new Error(messsage);
}
}
let y=6

assert(y,5, "value of x is not 5"); 