const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')
function createWindow () {
  // 创建浏览器窗口
  const win = new BrowserWindow({ width: 800,
    height: 600,
    webPreferences: {
      devTools: true

    }})

  // 然后加载应用的 index.html。
  //   win.loadURL('http://localhost:5000')

  win.webContents.openDevTools()

  win.loadURL(`file://${path.join(__dirname, '/../build/index.html')}`)

//   win.loadFile('index.html')
}

app.on('ready', createWindow)
