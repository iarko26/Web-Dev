// //for loop
// for(let i=1;i<5;i++){
//     console.log("Arnob" +i);
// }

// //while loop
// let i=0;
// while(i<5){
//     console.log(i);
//     i++;
// }

//For in loop
let rect={
    length:2,
    width:4
};
// for(let key in rect){
// console.log(key,rect[key]);
// }
//For of (iterable:arrays,maps)
for(let key of Object.entries(rect)){
    console.log(key);
}
