const { app, BrowserWindow } = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        title: "POS",
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    // win.loadFile('index.html')
    win.loadURL(`file://${__dirname}/dist/index.html`)
    win.webContents.openDevTools();





}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
        setInterval(function() {
            // navigator.bluetooth.requestDevice({ filters: [{ services: ['battery_service'] }] })
            //     .then(device => {
            //         // Human-readable name of the device.
            //         console.log(device.name);

            //         // Attempts to connect to remote GATT Server.
            //         return device.gatt.connect();
            //     })
            //     .then(server => { /* … */ })
            //     .catch(error => { console.error(error); });
        }, 2000);
    }
})