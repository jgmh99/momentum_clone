const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

const greeting = document.querySelector("#greeting");
const HIDDEN_CALSSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault(); //기본동작을 막아주는 역할
    // console.log(event, loginInput.vlaue); //event에 해당하는 obj출력
    loginForm.classList.add(HIDDEN_CALSSNAME);
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName); //localStorage에 저장
    // greeting.innerText = `어서오시게 ${userName}`;
    // greeting.classList.remove(HIDDEN_CALSSNAME);
    paintGreetings(userName); // 위 2줄 함수로 만들어서 ㅇㅇ
}
loginForm.addEventListener("submit", onLoginSubmit) // 함수에 ()를 붙인다는건 바로 실행한다는 의미

//15-16 36-37 중복코드 줄여주는 함수~
function paintGreetings(username){
    greeting.innerText = `어서오시게 ${username}`;
    greeting.classList.remove(HIDDEN_CALSSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null){
    //savedUserName이 null이면 form이 보이게
    loginForm.classList.remove(HIDDEN_CALSSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else{
    // 그 외에는 greeting보여줄껴
    // greeting.innerText = `어서오시게 ${savedUserName}`;
    // greeting.classList.remove(HIDDEN_CALSSNAME);
    paintGreetings(savedUserName);
}
//15-16 29-30 라인 같은거니까 함수로 만들어주자 up to 22line
