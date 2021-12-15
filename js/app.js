console.log("app.js");
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});


sign_in_btn.addEventListener("click", () => {
    container.classList.add("sign-in-mode");
});

sign_up_btn.addEventListener("click", () => {
    container.classList.remove("sign-in-mode");
});


// Logic code

var logInForm =  document.querySelector(".sign-in-form");
var loginButton = logInForm['login'];

loginButton.onclick = (e) => {
    var isvalid = false;
    e.preventDefault();
    var listUsers = localStorage.getItem('listUsers');
    listUsers = JSON.parse(listUsers);
    listUsers.forEach(user => {
        if (user.username == logInForm['username'].value && user.password == logInForm['password'].value) 
            isvalid = true; 
    });

    if (isvalid) {
        localStorage.setItem('currentUser', logInForm['username'].value);
        window.location.href = "home.html";
        window.location;
    }
}
