const { app, BrowserWindow } = require('electron')
const AutoLaunch = require('auto-launch')

// const appLauncher = new AutoLaunch({
//   name: 'xml-validation',
// })

// if (localStorage.getItem('isAuto') === true) {
//   appLauncher.enable()
// } else {
//   appLauncher.disable()
// }

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  })
  win.setMenuBarVisibility(false)
  //prod
  //   win.loadFile("index.html");
  //dev
  win.loadURL('http://localhost:3000')
}

app.whenReady().then(() => {
  createWindow()
})
