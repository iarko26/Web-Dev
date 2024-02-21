 //to see event
 /*
monitorEvents(document);
*/
//---------------------- ADDeventlistener -------------------------
/*
document.addEventListener('click',function(){
    // alert("You should check")
    console.log("clicked");
});

//-----------------------------------------
let con=document.querySelector('.content');
con.addEventListener('click', function () {
    con.style.color='red';

});

//------------------------------------------
var High=document.querySelectorAll('.H2')
High.forEach(function(hg){
hg.addEventListener('click',function()
{
   hg.style.color='green';
}
);
});

//-----------------------------another way
function changecolor(){
    var High=document.querySelectorAll('.H2');
    High.forEach(function(hg)
    {
        hg.style.backgroundColor='green';
    } );
   
}
document.addEventListener('click',changecolor);


//---------------------- Removeeventlistener -------------------------
function print(){
    var high=document.querySelector('.Container');
    alert(high);
}
document.addEventListener('click',print);
document.removeEventListener('click',print);


//---------------------- phaseofevents ----------------------------------
//event bubbling 
var div=document.querySelector('div');
var button=document.querySelector('button');
div.addEventListener('click',listner);
button.addEventListener('click',listner);
function listner(event){
    // console.log('ok print');
    // console.log(event.currentTarget);
    console.log(this);
}

//event capturing
var div=document.querySelector('div');
var button=document.querySelector('button');
div.addEventListener('click',listner,
{capture:true


});
button.addEventListener('click',listner,
{
capture:true
});
function listner(event){
    // console.log('ok print');
    // console.log(event.currentTarget);
    console.log(this);
}

//event  target
var div=document.querySelector('div');
var p=document.querySelector('p');
var button=document.querySelector('button');
div.addEventListener('click',listner);
p.addEventListener('click',listner,false);
button.addEventListener('click',listner);
function listner(event){
    // console.log('ok print');
    // console.log(event.currentTarget);
    console.log(this);
}
 
//------------------------------------------event object-------------------------------------------

var p1=document.querySelector('p');
p1.addEventListener('click',(event)=>{
console.log(event);
});

//------------------------------------------link prevent--------------------------------------------
var links=document.querySelectorAll('a');
var thirdlink=links[1];
thirdlink.addEventListener('click',(event)=>{
event.preventDefault();
alert("you cant get");
});

//------------------------------------------avoid to many events--------------------------------------------
let mydiv=document.createElement('div');
function para(event){
console.log("print"+event.target.textContent);

}
mydiv.addEventListener('click',para);
for(let i=1;i<=10;i++){
let newel=document.createElement('p');
newel.textContent='this is javascript'+i;

mydiv.appendChild(newel)
}
document.body.appendChild(mydiv)
*/
let element=document.querySelector('#wrapper');

element.addEventListener('click',function(event){
    if(event.target.nodeName ==='SPAN'){
        console.log('print'+event.target.textContent);
    }
   

});