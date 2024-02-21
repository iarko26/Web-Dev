var n = document.getElementById('Name');
var p = document.getElementById('pass');
var em = document.getElementById('email')
var x = document.getElementById('myForm');


var name_error=document.getElementById('name_error');
var email_error=document.getElementById('email_error')
var pass_error=document.getElementById('pass_error')
x.addEventListener('submit',(e)=>{
    var valid=true;
   
    
   
    if(n.value === "" || n.value === null && !(/[a-z]/.test(n.value) && /[A-Z]/.test(n.value))){
      
e.preventDefault();
name_error.innerHTML="name is required";
valid=false;
}
else{
    name_error.innerHTML=""
}
if (em.value === "" || em.value === null || !(/\S+@\S+\.\S+/.test(em.value))){
   
    e.preventDefault();
    email_error.innerHTML=" valid email is required";
    valid=false;
}
else{
    email_error.innerHTML=""
}
if (p.value.trim().length < 8 || !/[A-Z]/.test(p.value) || !/[\W_]/.test(p.value) || p.value.trim() === "") {
    
    e.preventDefault();
    pass_error.innerHTML = "valid password is required";
    valid=false;
}
else{
    pass_error.innerHTML = "";
}
if(valid){
alert("your form has been submitted");
}

});
