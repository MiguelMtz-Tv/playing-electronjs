const {
    app , 
    BrowserWindow,
    Menu,
    MenuItem
} = require('electron')

const path = require('path')
const menu = new Menu()

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

menu.append(new MenuItem({
    label: 'Revisar',
    submenu:[{
        label:'Some',
        accelerator: process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
        click: () => {
           new BrowserWindow({
            width: 500,
            height: 300,
           }).loadFile('second.html')
        }
    }]
}))

Menu.setApplicationMenu(menu)

//start the app when all it is ready
app.on('ready', () => {createWindow()})

//close the app when all windows are closed
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit()
    }
})