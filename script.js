let login = document.querySelector('#login');
let password = document.querySelector('#password');
let submit = document.querySelector('#submit');

const fs = require('fs')

let users = {};

function User (login, password){
    this.login = login;
    this.password = password;
    
}
function createID (users){
    return Object.keys(users).length;
}
submit.addEventListener('click', () =>{
    const loginUser = login.value;
    const passwordUser = password.value;

    const user = new User(loginUser,passwordUser );

    const userID = 'User' + createID(users); 
    users[userID] = user;

    console.log(users);
    fs.writeFile('users.txt', data + '\n' + users[userID])

    //alert('${loginUser}, Вы прошли регистрацию' );
}) 
function autorization() {
    const loginUser = login.value;
    const passwordUser = password.value;
    for (let key in users){
        if ((users[key].login == loginUser) && (users[key].password == passwordUser)){
            console.log('Авторизация успешна = ' + users[key].login + ' + ' + users[key].password);
            window.location.href = 'home.html';
            break;
        }
        //console.log(users[key]);
    }
}