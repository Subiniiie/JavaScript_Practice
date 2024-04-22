const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector('#greeting');

const link = document.querySelector("a");
link.addEventListener("click", handleLinkClick);

function handleLinkClick(event) {
    // 기본 동작을 막음
    // "a"의 기본 동작 = 클릭하면 링크 이동
    event.preventDefault();
    console.dir(event)
    alert("clicked!");
}


const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const savedUsername = localStorage.getItem(USERNAME_KEY);


function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    // USERNAME_KEY = key
    // username = const username으로 만든 value
    localStorage.setItem(USERNAME_KEY, username);
    // 같은 값 출력
    // greeting.innerText = "Hello " + username;
    paintGreetings();
}

function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);    
}

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings();
    loginForm.classList.add(HIDDEN_CLASSNAME);
}
