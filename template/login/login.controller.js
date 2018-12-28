const electron = require('electron');

const {ipcRenderer} = electron;

const loginForm = document.querySelector('form');

loginForm.addEventListener('submit', login);

function login(e) {
    e.preventDefault();
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    //post request login + send sessionId to main.js
    ipcRenderer.send('login:data', 'sessionId')
}
