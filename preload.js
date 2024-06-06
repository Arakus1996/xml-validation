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
  readDirectory: path => {
    try {
      const result = fs.readdirSync(path)
      return result.filter(item => item !== 'logs')
    } catch {
      return
    }
  },
  readFile: path => fs.readFileSync(path, 'utf8'),
  mkdir: path => {
    try {
      fs.mkdirSync(path)
    } catch {
      return
    }
  },
  writeFile: (path, text) => {
    fs.writeFileSync(path, text)
  },
})
