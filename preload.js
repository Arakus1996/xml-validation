const { contextBridge } = require('electron')
const path = require('path')
const fs = require('fs')
const { shell } = require('electron')

contextBridge.exposeInMainWorld('electron', {
  getFileNames: () => {
    let files = fs.readdirSync(path.join(__dirname)).map(fileName => fileName)
    return files.join('\n')
  },
  deleteFile: path => fs.unlinkSync(path),
  openDirectory: path => shell.openPath(path),
})
