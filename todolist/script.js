const input=document.getElementById("input-box");
const button=document.getElementById("btn");
const todolist=document.getElementById("todolist");

button.addEventListener("click" , addtodo);
todolist.addEventListener("click",deletetodo)


function addtodo(event){
    event.preventDefault();
    const todoDiv=document.createElement('div')
    todoDiv.classList.add("todo-container")

    const todoitem=document.createElement('li')
    todoitem.classList.add("todo-item")
    todoitem.innerText=input.value;
    todoDiv.appendChild(todoitem)

    const deletebutton=document.createElement('button')
    deletebutton.classList.add("delete-btn")
    
    deletebutton.innerHTML='<i class= "fa-solid fa-trash-can" ></i>'
    todoDiv.appendChild(deletebutton)


    const completebutton=document.createElement('button')
    completebutton.classList.add("complete-btn")
    completebutton.innerHTML='<i class= "fa-solid fa-check" ></i>'

    todoDiv.appendChild(completebutton)


   todolist.appendChild(todoDiv)
}
function deletetodo(event){
    const item=event.target;
    if(item.classList[0] ==="delete-btn"){
        item.parentElement.remove();
    }
    
    if(item.classList[0] ==="complete-btn"){
        const compitem=item.parentElement;
        compitem.classList.toggle("completed");
    }
}
