const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });
  win.setMenuBarVisibility(false);
  //prod
  //   win.loadFile("index.html");
  //dev
  win.loadURL("http://localhost:3000");
};

app.whenReady().then(() => {
  createWindow();
});
