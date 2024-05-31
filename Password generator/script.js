const passdisplay=document.querySelector('.passdisplay');
const lndisplay=document.querySelector('.lengthNumber');
const inslider=document.querySelector('.slider');
const copybtn=document.querySelector('.copypass');
const copymssg=document.querySelector('.copymssg');
const allchck=document.querySelectorAll('input[type="checkbox"]');
const uppercase=document.getElementById('uppercase');
const lowercase=document.getElementById('lowercase');
const numbers=document.getElementById('numbers');
const symbols=document.getElementById('symbols');
const indicator=document.querySelector('.indicator');
const gnbtn=document.querySelector('.btn-pass');
const symbolserr= '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';


var password='';
var passLength=8;
var count=0;




function pslider(){
    inslider.value=passLength;
    lndisplay.innerText=passLength;


}
pslider();


inslider.addEventListener('input',function(){
    passLength=parseInt(this.value);
    lndisplay.innerText=passLength;
    
    });

function getRadInt(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}

function getuppercase(){
    return String.fromCharCode(getRadInt(65,90));
}
function getlowercase(){
    return String.fromCharCode(getRadInt(97,122));
}
function getnumbers(){
    return getRadInt(0,9);
}
function getsymbols(){
    var ransym=getRadInt(0,symbolserr.length);
    return symbolserr.charAt(ransym);

}
function strindicator(color){
if(color==='#0f0'){
    indicator.src='./green-circle-icon.svg';
    console.log('strong');
}
else if(color==='#ff0'){
    indicator.src='./yellow-circle-svgrepo-com.svg'
    console.log('medium');
}
else{
    indicator.src='./red-circle-svgrepo-com.svg';
    console.log('weak');

}
}



    
/*It is not working in my browser but it is the best practice to do this way  */
// async function copyCon() {
//     if (window.isSecureContext) {
//         try {
//             await navigator.clipboard.writeText(passdisplay.value);
//             copymssg.outerHTML = "Copied to clipboard";
//         } catch (err) {
//             console.log(err); // Log the error
//             copymssg.outerHTML = "Failed to copy to clipboard";
//         }
//     } else {
//         console.log('The context is NOT secure');
//         // Implement alternative copy method here
//     }
//     copymssg.classList.add('active');
//     setTimeout(function () {
//         copymssg.classList.remove('active');
//     }, 1000);
// }

/*This is not good practice i do this just for do this copy methode done */

 async function copyContent(){
    try{
        passdisplay.select();
        document.execCommand('copy');
        copymssg.innerText='Copied';
    
    }
    catch(err){
        console.log(err);
        copymssg.innerText='Failed to copy to clipboard';
    }


copymssg.classList.add('active');
    setTimeout(function(){
        copymssg.classList.remove('active');
    },2000);
}
function chckstrength(){
let hasuppercase=false;
   let haslowercase=false;
   let hasnumbers=false;
   let hassymbols=false;
    if(uppercase.checked){
        hasuppercase=true;
    }
    if(lowercase.checked){
        haslowercase=true;
    }
    if(numbers.checked){
        hasnumbers=true;
    }
    if(symbols.checked){
        hassymbols=true;
    }

    if((hasuppercase && haslowercase && hassymbols && passLength >= 8) || 
       (hasuppercase && hassymbols && hasnumbers && passLength >= 8)   ||
        (hasnumbers && hassymbols && passLength >= 8) ){
        strindicator('#0f0');
    }
    else if((haslowercase && hasnumbers && passLength >= 6) || 
            (hasuppercase && hassymbols && passLength >= 6) || 
            (hasuppercase && haslowercase && passLength >= 6)) {
        strindicator('#ff0');
    }
    else{
        strindicator('#f00');
    }

}
function handlecheck(){

    count=0;
    allchck.forEach(function(checkbox){
        if(checkbox.checked){
            count++;
        }
    });
if(passLength<count){
    passLength=count;
    pslider();
}


}

allchck.forEach(function(checkbox){
    checkbox.addEventListener('change',handlecheck);
});

function shufflePassword(array){
    for(let i=array.length-1;i>0;i--){
        let j=Math.floor(Math.random()*(i+1));
        let temparray=array[i];
        array[i]=array[j];
        array[j]=temparray;
    }
    let str='';
    array.forEach(function(c){
        str+=c;
    });
    return str;

    
}
copybtn.addEventListener('click',function(){
    if(passdisplay.value){
        copyContent();
    }
    else{
        alert('No password to copy');
    }
});

gnbtn.addEventListener('click',function(){
    if(count===0){
        alert('Please select atleast one option');
        return;
    }

    if(passLength<count){
        passLength=count;
        pslider();
    }
password='';
var funcpass=[];
if(uppercase.checked){
    funcpass.push(getuppercase);
}
if(lowercase.checked){
    funcpass.push(getlowercase);
};
if(numbers.checked){
    funcpass.push(getnumbers);

};
if(symbols.checked){
    funcpass.push(getsymbols);
};
for(var i=0;i<funcpass.length;i++){
    password+=funcpass[i]();
}
for(var i=0;i<passLength-funcpass.length;i++){
    var x=getRadInt(0,funcpass.length);
    password+=funcpass[x]();

}

password=shufflePassword(Array.from(password));
console.log("shuffled password is:  "+password);
passdisplay.value=password;
console.log("displayed password is:  "+passdisplay.value);
chckstrength();


});