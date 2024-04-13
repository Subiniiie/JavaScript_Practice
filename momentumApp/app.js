 const loginForm = document.querySelector("#login-form");
 const loginInput = document.querySelector("#login-form input");
 const loginButton = document.querySelector("#login-form button");


function handleLoginBtnClick() {
    const username = loginInput.value;
   if (username === "") {
    alert("Please write Your name.");
   } else if (username.length > 15) {
    alert("Your name is too long!");
   }
}



loginButton.addEventListener("click", handleLoginBtnClick);