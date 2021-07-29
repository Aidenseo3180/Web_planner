const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden";  //string만 포함된 변수는 대문자로 표시, string을 저장할 때 사용
const USERNAME_KEY = "username";    //"username"이 반복되니까 변수를 만듦

// ---- functions---

function onSubmit(event){
    event.preventDefault(); //기본행동들을 억제 (refresh 안됨)
    loginForm.classList.add(HIDDEN_CLASS);  //class = "hidden"을 login-form에 넣음 (안보이게 됨)
    const username = loginInput.value;  //들어온 이름을 username에 저장

    localStorage.setItem(USERNAME_KEY, username);
    //username key에다가 변수 username을 저장
    
    greetingWelcome(username);  //username을 argument로 넣음
}

function greetingWelcome(username){    //반복되는 문장이니 function으로 만듦
    greeting.innerText = `How are you doing today, ${username}`;  //greeting에 text에 hello, argument로 들어온 username을 넣어줌
    greeting.classList.remove(HIDDEN_CLASS);    //숨겨져 있던 greeting에 있던 class = "hidden" 을 없앰!
    //그래서 보이게 됨!
}

//---main section--


const savedUsername = localStorage.getItem(USERNAME_KEY);      //savedUsername으로 "username"이란 key를 얻어옴

if (savedUsername === null){    //만약 savedUsername이 없을땐
    loginForm.classList.remove(HIDDEN_CLASS);   //class = "hidden" 을 없앰 (보기게 만듦)
    loginForm.addEventListener("submit", onSubmit);    //onSubmit을 부름!!

}
else{   //만약 있으면
   greetingWelcome(savedUsername);  //savedUsername이 존재하니 이걸 넣어줌 (변수 username은 없음. onSubmit이 아니니까)
}
