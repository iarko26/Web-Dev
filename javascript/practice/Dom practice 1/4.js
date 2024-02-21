//Write a function to toggle the display of a div element on click event
function Togglefunc(divID){
    var x = document.getElementById(divID);
    if(x.style.display==="none"){
        x.style.display= "block";
    }
    else{
        x.style.display= "none";
    }

}
// function Togglefunc(divID){
//     var x=document.getElementById(divID);
//     if(x.style.backgroundColor==='red'){
//         x.style.backgroundColor='blue';
//     }
//     else{
//         x.style.backgroundColor='red'
//     }
    
// }