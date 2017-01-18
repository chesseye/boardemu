const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

// Global ref. to window to prevent GC.
let win

function createWindow () {
  win = new BrowserWindow({ width: 600, height: 600 })

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  app.quit()
})
