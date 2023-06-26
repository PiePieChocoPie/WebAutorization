let login = document.querySelector('#login');
let password = document.querySelector('#password');
let submit = document.querySelector('#submit');

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

    alert('${loginUser}, Вы прошли регистрацию' );
}) 