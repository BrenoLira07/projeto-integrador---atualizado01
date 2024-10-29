const users = [
    { username: 'Breno', password: '@12345' },
    { username: 'Laura', password: '@12345' }
];

function checkInputs() {
    const userInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    const loginButton = document.getElementById('loginButton');

    
    loginButton.disabled = !(userInput && passwordInput);
}

function login() {
    const userInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    const user = users.find(u => u.username === userInput && u.password === passwordInput);

    if (user) {
        alert('Login bem-sucedido!');
        localStorage.setItem('loggedIn', true);
        window.location.href = '/src/index.html'; 
    } else {
        document.getElementById('message').innerText = 'Usuário ou senha incorretos';
    }
}
