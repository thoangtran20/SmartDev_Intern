const { response } = require("express");

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


var inputUsername = document.getElementById('username');
var inputPassword = document.getElementById('password');
var inputEmail = document.getElementById("email");

// Login Authencication

// var userLogin = "http://localhost:3000/user"
// function start() {
//     getCourses(handlelogin)
// }
// start();

// function getCourses(callback) {
//     fetch(userLogin)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(callback)
// }

// function handlelogin (User) {
//     const inputUsername=document.querySelector('#email')
//     const inputPassword=document.querySelector('#password')
//     const submits= document.querySelector(".btn")
//     window.localStorage.setItem('usersLocalStrorage', JSON.stringify(User))
//     submits.onclick = () => {
//        const arrayUsersJson = JSON.parse(window.localStorage.getItem('usersLocalStrorage'));
//        const isUser = arrayUsersJson.some(arrayUserJson => {
//            return (arrayUserJson.email == inputUsername.value && arrayUserJson.password == inputPassword.value) ? true : false
//        })
//        if (isUser) {
//            const userLogin = {
//                username: inputusername.value,
//                password: inputpassword.value
//            }
//            window.localStorage.setItem('currentUser', JSON.stringify(userLogin))
//            window.location.href = "home.html"
//        } else {
//            alert("Fail Login! Password is wrong! Please try again!")
//        }
//    }
// }

var formLogin = document.getElementById('form-login');
var buttonLogin = formLogin['login'];
buttonLogin.onclick = (e) => {
    var isValid = false;
    e.preventDefault();
    var listUsers = localStorage.getItem('listUsers');
    listUsers = JSON.parse(listUsers);
    
    listUsers.forEach(user => {
        if(user.username === formLogin['email'].value && user.password === formLogin['password'].value){
            isValid = true;
        }
    });
    if (isValid) {
        localStorage.setItem('currentUser', formLogin['email'].value.split('@')[0]);
        window.location.href = "../html/home.html";
        window.location;
    }
    else {
        alert("Fail Login! Please try again!");
    }   
}


// var formSigup = document.getElementById('form-signup');


// if(formSigup.attachEvent) {
//     formSigup.attachEvent('submit', onFormSubmit());
// } else {
//     formSigup.addEventListener('submit', onFormSubmit);
// }

// function onFormSubmit(e) {
//     var username = inputUsername.value;
//     var password = inputPassword.value;
//     var email = inputEmail.value;

//     if(username == CORRECT_USER && password == CORRECT_PASS && email == CORRECT_EMAIL) {
//         alert("Signup Sucessful!");
//     } else {
//         alert("Fail Signup! Please try again after!")
//     }
// }