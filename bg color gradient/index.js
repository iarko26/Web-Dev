let button1=document.querySelector('.button1');
let button2=document.querySelector('.button2');
let input=document.querySelector('.input-color');
let body=document.querySelector('body');
let copy=document.querySelector('#icon-btn-copy');



/*Conversion */
// const hex2rgb = (hex) => {
//     let r, g, b;
//   if (hex.length === 7) {
//         r = parseInt(hex.slice(1,3), 16);
//         g = parseInt(hex.slice(3,5), 16);
//         b = parseInt(hex.slice(5,7), 16);
//     } else {
//         return "Invalid Hex Code";
//     }
//     return `rgb(${r},${g},${b})`;
// }
const randomcolor=()=>{

  
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    const hex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    let rgb=`rgb(${r},${g},${b})`;
    return {rgb,hex};




    
    
    


}


let leftcolor=randomcolor();
let rightcolor=randomcolor();
const handleclick=(event)=>{
    const color=randomcolor();
    if(event.target.classList.contains('button1')){
        leftcolor=color;
        event.target.textContent=color.hex;
    }
    else{
        rightcolor=color;
        event.target.textContent=color.hex;
    }
    let grad=`linear-gradient(to right,${leftcolor.rgb},${rightcolor.rgb})`;
    input.value=`${leftcolor.rgb}, ${rightcolor.rgb}`;
    body.style.background=grad;


    



}
async function copycontent(){
    try{
        input.select();
        document.execCommand('copy');
        console.log('copied');

    }
    catch(err){
        console.log('error');
    }



}
copy.addEventListener('click',function(){
copycontent();


})
button1.addEventListener('click',handleclick);
button2.addEventListener('click',handleclick);

var typeData=new Typed(".copycode",{
    strings:['Copy the color code and paste it in your css file'],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,

});
