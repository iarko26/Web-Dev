var updatecount=document.getElementById('counter');
var inc=document.getElementById('pos').addEventListener("click",function(incCount){
    let val=parseInt(updatecount.innerHTML);
    val++;
    updatecount.innerText=val;
});
var dec=document.getElementById('neg').addEventListener("click",function(decount){
    let val=parseInt(updatecount.innerHTML);
    val--;
    updatecount.innerText=val;
});








