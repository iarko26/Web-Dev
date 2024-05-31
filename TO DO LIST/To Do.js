let todoin;
let addtodo;
let filteroption;
let todolist;
document.addEventListener('DOMContentLoaded', function() {
    todoin=document.querySelector('.todo-inputs');
    addtodo=document.querySelector('.todo-button');
    filteroption=document.querySelector('.filter-todos');
    todolist=document.querySelector('.todo-list');

   addtodo.addEventListener('click',todoadd);
   filteroption.addEventListener('click',filtertodo);
   todolist.addEventListener('click',deletetodo);
   getTodos();



});
const todoadd=(e)=>{
    e.preventDefault();
    let divtodo=document.createElement('div');
    divtodo.classList.add('todo');
    let newtodo=document.createElement('li');
    newtodo.classList.add('todo-item');
    newtodo.innerText=todoin.value;

    divtodo.appendChild(newtodo);


    let completebtn=document.createElement('button');
    completebtn.innerHTML='<i class="fas fa-check"></i>';
    completebtn.classList.add('complete-btn');
    divtodo.appendChild(completebtn);

    let trash=document.createElement('button');
    trash.innerHTML='<i class="fas fa-trash"></i>';
    trash.classList.add('trash-btn');
    divtodo.appendChild(trash);

    todolist.appendChild(divtodo);
    savelocal(newtodo.innerText);
    todoin.value='';
    

    
    




  




    

}

function deletetodo(e){
    let todoitem=e.target;
    if(todoitem.classList[0]==='trash-btn'){
        let todo=todoitem.parentElement;
        todo.classList.add('fall');
        deleteval(todo);
        todo.addEventListener('transitionend',function(){
            todo.remove();
        });
    }
if(todoitem.classList[0]==='complete-btn'){
    let todo=todoitem.parentElement;
    todo.classList.toggle('completed');
    updatelocal(todo);
}







}


const getTodos=()=>{
    let todos;
    if(localStorage.getItem('todos')===null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo){
        let divtodo=document.createElement('div');
        divtodo.classList.add('todo');
        let newtodo=document.createElement('li');
        newtodo.classList.add('todo-item');
        newtodo.innerText=todo.text;
    
        divtodo.appendChild(newtodo);
    
    if(todo.completed===true){
        divtodo.classList.add('completed');
    }
        let completebtn=document.createElement('button');
        completebtn.innerHTML='<i class="fas fa-check"></i>';
        completebtn.classList.add('complete-btn');
        divtodo.appendChild(completebtn);
    
        let trash=document.createElement('button');
        trash.innerHTML='<i class="fas fa-trash"></i>';
        trash.classList.add('trash-btn');
        divtodo.appendChild(trash);
    
        todolist.appendChild(divtodo);
    });
    return todos;


    




}

function savelocal(todoText){
    let todos;
    if(localStorage.getItem('todos')===null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem('todos'));
    }
   todos.push({text:todoText,completed:false});
    localStorage.setItem('todos',JSON.stringify(todos));
}
function deleteval(todo){
    let todos;
    if(localStorage.getItem('todos')===null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem('todos'));
    }
    let todoText=todo.children[0].innerText;
    let index=todos.findIndex((todoobj)=>{
         return todoobj.text===todoText;
    });
    todos.splice(index1,);
    localStorage.setItem('todos',JSON.stringify(todos));


}
function updatelocal(todo){
    let todos;
    todos=JSON.parse(localStorage.getItem('todos'));
    let todoText=todo.children[0].innerText;
    let index=todos.findIndex((todoobj)=>{
         return todoobj.text===todoText;
    });

  todos[index].completed=!todos[index].completed;
    localStorage.setItem('todos',JSON.stringify(todos));

}
function filtertodo(e){
    todolist.childNodes.forEach((todo)=>{
        switch(e.target.value){
            case 'all':
                todo.style.display='flex';
                break;
            case 'completed':
                if(todo.classList.contains('completed')){
                    todo.style.display='flex';
                }
                else{
                    todo.style.display='none';
                }
                break;
            case 'uncompleted':
                if(!todo.classList.contains('completed')){
                    todo.style.display='flex';
                }
                else{
                    todo.style.display='none';
                }
                break;
        }
    })

}

