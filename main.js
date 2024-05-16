const { app, BrowserWindow } = require('electron')

const path = require('path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 900,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
    },
  })
  win.setMenuBarVisibility(false)
  //prod
  // win.loadFile(path.join(__dirname, 'public'), 'index.html')
  // win.loadFile('index.html')
  //dev
  win.loadURL('http://localhost:3000')
}

app.whenReady().then(() => {
  createWindow()
})
