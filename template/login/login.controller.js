const electron = require('electron');

const {ipcRenderer} = electron;

const loginForm = document.querySelector('form');

loginForm.addEventListener('submit', login);

function login(e) {
    e.preventDefault();
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    const sessionId = sendRequest(username, password);
    console.log(sessionId);
    if (sessionId.length === 64) {
        ipcRenderer.send('login:data', sessionId)
    } else {
        const alert = document.querySelector('#alert');
        const alertText = document.createTextNode('Login data incorrect');
        alert.appendChild(alertText);
    }
}

function sendRequest(username, password) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST",
        "http://scorewinner.ch:8081/api/login?name=" + username + "&password=" + password, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}
