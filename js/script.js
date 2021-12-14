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

var postAPI = 'https://jsonplaceholder.typicode.com/posts';

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
        var htmls = courses.map(function(courses) {
            return <div>
                <h3>{courses.title}</h3>
                <div>{courses.titlse}</div>
            </div>
        })
        console.log(courses);
    })
    .catch(function(err) {
        console.log(err);
        alert("Error!")
    })

