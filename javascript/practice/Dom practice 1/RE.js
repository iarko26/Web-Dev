/* contains alphabet  */

// function reg(str){
//     const regx=/^[a-zA-Z]+$/;
//    if(regx.test(str)){
//          return true;
//    }
//     else{
//          return false;
//     }

// }
// console.log(reg('abc'));
// console.log(reg('123'));
// console.log(reg('abc123'));
// console.log(reg('#$%'));

/*Contains atleast digit  */

function reg(str){
const regx= /\d/;
if(regx.test(str)){
    return true;
}
else{
    return false;
}



 }
    console.log(reg('abc'));
    console.log(reg('123'));
    console.log(reg('abc123'));
    console.log(reg('#$%'));
    console.log(reg('1abc'));