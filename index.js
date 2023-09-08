const {app , BrowserWindow} = require('electron')
const path = require('path')

function createWindow(){
    const win = new BrowserWindow({
        width: 800, 
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preloads.js')
        }
    })
    win.loadFile('./index.html')
}

//start the app when all it is ready
app.on('ready', () => {createWindow()})

//close the app when all windows are closed
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit()
    }
})