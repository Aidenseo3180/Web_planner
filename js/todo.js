const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");  //input을 toDoForm(todo-form이란 id를 가진거에서 찾아냄)
const toDoList = document.getElementById("todo-list");

let toDos = [];   //array for saving toDos

const TODOS_KEY = "todos";

//------functions---

function handleToDoSubmit(event){   //submit event를 argument로 받음
    event.preventDefault();         //기본행동을 preventDefault()로 막음 (자동 refresh 못하게)
    const newToDo = toDoInput.value;    //값을 저장하고
    toDoInput.value = "";   //toDoInput을 비움 (text를 빈칸으로 만들려고)

    const newToDoObj = {        //newToDo를 주는 Object를 생성 (key, value로 만듦!)
        id : Date.now(),        //Date.now()는 현재시간(ms)을 주는데, 이게 시간이 갈때마다 바뀜. 랜덤한 값같이! 그래서 랜덤한 값을 편하게 주려고 쓰는것
        text : newToDo         //이 id와 맞는 text는 newToDo(값)로 설정
    };

    toDos.push(newToDoObj);    //newToDo (새롭게 들어온 Todo)를 array에 삽입함 
    paintToDo(newToDoObj);     //이 들어온 Todo들을 그려줌
    saveToDos();            //그리고 localStorage에 저장
}

//ul에 li를 그리는 역할
function paintToDo(newToDo){    //newToDo Object (newToDoObj)를 argument로 줘서 뭘 할지 알려줌
    const li = document.createElement("li");    //li를 먼저 만들고 (리스트를 위해)
    li.id = newToDo.id; //li의 id와 newToDo 오브젝트의 id를 갖게 함 (그래서 어떤 li가 어떤 걸 가지고 있는지 알 수 있게)
    const span = document.createElement("span");    //span으로 내용을 채움
    span.innerText = newToDo.text;   //그리고 이 span 안에 newToDo.text(값,앞으로 할 것) 이 들어감
    const button = document.createElement("button");    //button도 만들어줌 (span의 내용을 지울 용도)
    button.innerText = "🗑";

    button.addEventListener("click", deleteToDo);       //클릭하면 deleteToDo 실행
    li.appendChild(span);   //li 안에 span이 들어감
    li.appendChild(button); //button도 넣어줌
    toDoList.appendChild(li);   //todoList 안에 li을 넣음
}

//delete todo list
function deleteToDo(event){  //event 정보를 argument로 받음. 어떤 리스트를 없애야할 지 모르니까
    //console.dir(event.target);  //그래서 event -> target을 보면 어떤 button이 클릭되었는지 알게됨. parentElement를 보면 li가 부모라고 나옴. 이걸 이용!
    //console.log(event.target.parentElement);    //그래서 이렇게 찾을 수 있음 (target.parentElement하면 button의 부모를 뜻함)
    const li = event.target.parentElement;  //그래서 이렇게 지울 걸 찾을 수 있음
    li.remove();    //화면 (li) 에서 지움
    
    toDos = toDos.filter((currentToDo) => currentToDo.id !== parseInt(li.id));    //방금 클릭한 li의 id를 가지고 있는 currentToDo를 지우니까, 
    //방금 클릭한 li의 id를 안갖고 있는 얘들이 toDos에 남음 (true니까, false인 li의 id == currentToDo.id는 toDos 배열에 못들어감)
    //li.id의 타입을 체크해보면 string이라고 나옴!! (하지만 currentToDo는 int임) 그래서 parseInt로 형변호나 해주는것

    //여기 있는 currentToDo의 이름은 상관 없음! 이건 DB에 있는 요소중 하나를 뜻하는 말이니까 (forEach처럼)

    saveToDos();
    //그리고 현재 toDos를 다시 저장 (안에 들어있는것들이 바꼇으니까)
}

function saveToDos(){   //save to localStorage
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));    //localStorage에 저장 (key, value)
    //JSON.stringify : array를 string으로 바꿔 저장. string으로 저장된 것들은 다 같은 key를 가지고 있으니 겹쳐져서 string형태의 array처럼 보이는것 
    //(실제론 array가 아닌, string임)

    //그리고 이걸 JSON.parse로 string배열을 만들 수 있음 (string을 사용해서)
    //"[\"a\",\"b\",\"c\"]"" -> ["a", "b", "c"]

}

//----main part----

toDoForm.addEventListener("submit", handleToDoSubmit);  //submit이 실행될 때 handleToDoSubmit을 호출

const saveToDo = localStorage.getItem(TODOS_KEY);   //localStorage에서 todos라는 이름의 key를 가진 것들을 가져옴 (그래서 각각 string을 가져옴)

if (saveToDo !== null){ //null이 아니면 (무언가가 있으면)
    const parsedToDos = JSON.parse(saveToDo);  //이 saveToDo에서 온 string들을 array로 바꿔줌

    toDos = parsedToDos;    //localStorage에 있던 것들을 toDos에 넣음 (왜냐하면 toDos는 application이 시작할때 비어있으니까! 빈 []로 시작하니까)
    //한마디로 이미 있던 정보들을 toDos에 넣어주는것

    //parsedToDos는 이제 array이니까 이런 array 메서드들을 쓸 수 있음
    parsedToDos.forEach(paintToDo);  //그래서 forEach로 array에 있는 각각의 item들을 가지고 올 수 있음
    //paintToDo를 사용가능! 그리는 거니까 paintToDo("a"),  paintToDo("b"), ...처럼 들어가니까
}





