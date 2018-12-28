const electron = require('electron');

const {app, BrowserWindow, ipcMain} = electron;

let sessionId;
let view;
app.on('ready', function () {
    // view.setMenuBarVisibility(false);

    view = new BrowserWindow({width: 1000, height: 800});

    view.on('closed', function () {
        app.quit();
    });

    view.loadFile('./template/login/login.view.html');
});

ipcMain.on('login:data', function (e, sessionId) {
    this.sessionId = sessionId;
    view.loadFile('./template/Movie-list/Movie-list.view.html');
});
