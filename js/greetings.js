const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden";  
const USERNAME_KEY = "username"; 

// ---- functions---

function onSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASS); 
    const username = loginInput.value;

    localStorage.setItem(USERNAME_KEY, username);

    
    greetingWelcome(username); 
}

function greetingWelcome(username){  
    greeting.innerText = `How are you doing today, ${username}`; 
    greeting.classList.remove(HIDDEN_CLASS); 
}

//---main section--


const savedUsername = localStorage.getItem(USERNAME_KEY); 

if (savedUsername === null){ 
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", onSubmit); 

}
else{ 
   greetingWelcome(savedUsername); 
}
