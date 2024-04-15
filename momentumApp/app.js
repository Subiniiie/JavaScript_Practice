 const loginForm = document.querySelector("#login-form");
 const loginInput = document.querySelector("#login-form input");
 const loginButton = document.querySelector("#login-form button");

 const link = document.querySelector("a");


function onLoginSubmit(event) {
    event.preventDefault();
    console.log(loginInput.value);
}

function handleKinkClick(event) {
    // 기본 동작을 막음
    // "a"의 기본 동작 = 클릭하면 링크 이동
    event.preventDefault();
    console.dir(event)
    alert("clicked!");
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleKinkClick);
