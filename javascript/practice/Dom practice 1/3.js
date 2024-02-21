//Write a function to remove a CSS class from an element on scroll event.
function removeCss(elementID,className){
    var ele=document.getElementById(elementID)
  window.addEventListener('scroll',()=>{
if(ele.classList.contains(className)){
ele.classList.remove(className);
}
  });
}
let box1=document.querySelector('#box1');
removeCss('box1','highlight');
let box2=document.querySelector('#box2');
removeCss('box2','active');