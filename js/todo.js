const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); 
const toDoList = document.getElementById("todo-list");

let toDos = [];   //array for saving toDos

const TODOS_KEY = "todos";

//------functions---

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value; 
    toDoInput.value = ""; 

    const newToDoObj = {
        id : Date.now(), 
        text : newToDo 
    };

    toDos.push(newToDoObj);   
    paintToDo(newToDoObj);
    saveToDos();         
}

//ul에 li를 그리는 역할
function paintToDo(newToDo){   
    const li = document.createElement("li");    
    li.id = newToDo.id; 
    const span = document.createElement("span");  
    span.innerText = newToDo.text;  
    const button_2 = document.createElement("button");
    button_2.innerText = "✔";
    const button_1 = document.createElement("button");  
    button_1.innerText = "🗑";

    button_1.addEventListener("click", deleteToDo);  
    button_2.addEventListener("click", deleteToDo);
    li.appendChild(span); 
    li.appendChild(button_2);
    li.appendChild(button_1);
    toDoList.appendChild(li); 
}

//delete todo list
function deleteToDo(event){  
    //console.dir(event.target); 
    //console.log(event.target.parentElement); 
    const li = event.target.parentElement;
    li.remove();
    
    toDos = toDos.filter((currentToDo) => currentToDo.id !== parseInt(li.id));  

    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos)); 
}

//----main part----

toDoForm.addEventListener("submit", handleToDoSubmit);

const saveToDo = localStorage.getItem(TODOS_KEY);

if (saveToDo !== null){
    const parsedToDos = JSON.parse(saveToDo);

    toDos = parsedToDos;  
}





