const listUsers = [
    {
        'username': 'admin',
        'password': 'password'
    },
];
var storage = localStorage.getItem('listUsers');
if (storage == null || 1==1) {
    const setjson = JSON.stringify(listUsers);
    localStorage.setItem('listUsers', setjson);
}
