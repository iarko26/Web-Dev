//Write a function to change the text of a button on the click event.
let changeName=document.querySelector('.wrapper');
changeName.addEventListener('click',function(event){
if(event.target.tagName='button'){
  
    event.target.textContent = 'Click me';
     
       
  
}
else{
    event.target.textContent='like me'
}

});