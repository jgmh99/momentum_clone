const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CALSSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault(); 
    loginForm.classList.add(HIDDEN_CALSSNAME);
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName); 
    paintGreetings(userName); 
}
loginForm.addEventListener("submit", onLoginSubmit);

function paintGreetings(username){
    greeting.innerText = `어서오시게 ${username}`;
    greeting.classList.remove(HIDDEN_CALSSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null){
    loginForm.classList.remove(HIDDEN_CALSSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else{
    paintGreetings(savedUserName);
}
