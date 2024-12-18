const {app, BrowserWindow} = require('electron');
const path = require('path');

const createWindow = () => {
    const win = new BrowserWindow({
        icon: path.join(__dirname, 'icon.png'),
        width: 1300,
        height: 800,
        minWidth: 820,
        minHeight: 520,
        resizable: true
    })
    win.setMenuBarVisibility(false);
    win.setTitle('Quiz');
    win.loadFile('src/index.html');
}

app.whenReady().then(() => createWindow());
app.on('window-all-closed', () => app.quit());