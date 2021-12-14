const listUsers = [
    {
        email: 'admin@gmail.com',
        password: '123456'
    }, 
    {
        email: 'thoangtran20@gmail.com',
        password: 'thoang10@'
    }
];
var storage = localStorage.getItem('listUsers');
if (storage == null) {
    const setjson = JSON.stringify(listUsers);
    localStorage.setItem('listUsers', setjson);
}

// const currentUser = [
//     {
//         username: "admin",
//         password: "123456",
//     }
// ]

// var storage = localStorage.getItem("currentUser");
// if (storage == null) {
//     const setjson = JSON.stringify(currentUser);
//     localStorage.setItem('currentUser', setjson);
// }
