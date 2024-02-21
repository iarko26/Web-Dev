/*
let marks=45
if(marks>=90){
    console.log("A+");
}
else if(marks>=80){
console.log("B+");
}
else if(marks>=70){
    console.log("C+");

}
else{
    console.log("D")
}
*/
//switch cases
let num=3;
switch(num){
    case 1:console.log("A");
    break;
    case 2:console.log("B");
    break;
    case 3:console.log("C");
    break;
    default:console.log("D");

}


let rect={
    length:2,
    width:4
};
if('colors' in rect){
    console.log('Present');
}
else{
    console.log('Absent');
}