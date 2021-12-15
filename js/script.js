// const { response } = require("express");

let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}



// var postAPI = 'https://jsonplaceholder.typicode.com/posts';

//stream
// fetch(postAPI)
//     .then(function(response) {
//         return response.json();
//         // JSON.parse: JSON -> JavaScript type
//     })
//     .then(function(posts) { 
//         var htmls = posts.map(function(posts) {
//             return <li>
//                 <h2>${posts.title}</h2>
//                 <p>${posts.body}</p>
//             </li>            
//         });
//         var html = htmls.join('');
//     }) 


// Call API from json-server

// Course API

var courseApi = "http://localhost:3000/courses";
const getCourses = async (data)=>{
  await fetch(courseApi)
    .then(res => res.json())
    .then(data);
}

fetch(courseApi)
    .then(function(response) {
        return response.json();
    })
    .then(function(courses) {
        const box = document.querySelector(".box") 
        var htmls = courses.map(function(courses) {
            return `<span class="amount">${courses.price}</span>
            <img src="${courses.img}" alt="">
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
            </div>
            <h3>${courses.name}</h3>
            <p>${courses.description}</p>
            <a href="#" class="btn">Learn More</a>
            <div class="icons">
                <p><i class="far fa-clock"></i> 3 hours </p>
                <p><i class="far fa-calendar"></i> 6 months </p>
                <p><i class="far fa-book"></i> 24 modules </p>
            </div>`
        });

        html = htmls.join('');
        box.innerHTML = html;
        document.getElementById('course-block').innerHTML = html;
    })
    .catch(function(err) {
        console.log(err);
        alert("Error!")
    })
  
// Teacher API

var teacherApi = "http://localhost:3000/teacher";
const getCourses = async (data)=>{
  await fetch(teacherApi)
    .then(res => res.json())
    .then(data);
}

fetch(teacherApi) 
    .then(function(response) {
        return response.json();
    }) 
    .then(function(teacher) {
        const box = document.querySelector(".box") 
        var htmls = teacher.map(function(teacher) {
            return `<img src="${teacher.img}" alt="">
            <h3>${teacher.name}</h3>
            <span>Teacher</span>
            <p>${teacher.description}</p>
            <div class="share">
                <a href="#" class="fab fa-facebook-f"></a>
                <a href="#" class="fab fa-twitter"></a>
                <a href="#" class="fab fa-instagram"></a>
                <a href="#" class="fab fa-linkedin"></a>
            </div>`
        }) 

        html = htmls.join('');
        box.innerHTML = html;
        document.getElementById('teacher-block').innerHTML = html;
    })
    .catch(function(err) {
        console.log(err);
        alert("Error!")
    })

// Call Api in RapidAPI

fetch("https://udemy-courses-coupon-code.p.rapidapi.com/api/udemy_course/", {
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "udemy-courses-coupon-code.p.rapidapi.com",
    "x-rapidapi-key": "9041e6ef80msh4983053313a3931p14def8jsnf768a6b435ce"
  }
})

