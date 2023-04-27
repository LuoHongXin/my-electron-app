const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const createWindow = () => {
   // 打开一个窗口
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  ipcMain.handle('toMain', () => '我收到了渲染进程通知给我的toMain消息')
  // 加载指定路径页面
  mainWindow.loadURL('http://10.10.111.240:8080/')
}
// 应用准备好后创建窗口
app.whenReady().then(() => {
  createWindow()
})