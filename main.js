const electron = require('electron');

const {app, BrowserWindow, ipcMain} = electron;

let sessionId;

app.on('ready', function () {
    view = new BrowserWindow({width: 1000, height: 800});
    view.loadFile('./template/login/login.view.html');

    view.setMenuBarVisibility(false);
    view.on('closed', function () {
        app.quit();
    });
});

ipcMain.on('login:data', function (e, sessionId) {
    this.sessionId = sessionId;
    view.loadFile('./template/Movie-list/Movie-list.view.html');
});
