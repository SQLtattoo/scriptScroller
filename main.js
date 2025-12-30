const { app, BrowserWindow, ipcMain, Menu } = require('electron');
const path = require('path');
const fs = require('fs');

let mainWindow;
const stateFile = path.join(app.getPath('userData'), 'window-state.json');

// Load saved state
function loadState() {
  try {
    if (fs.existsSync(stateFile)) {
      return JSON.parse(fs.readFileSync(stateFile, 'utf8'));
    }
  } catch (err) {
    console.error('Error loading state:', err);
  }
  return null;
}

// Save state
function saveState(state) {
  try {
    const bounds = mainWindow.getBounds();
    const fullState = {
      ...state,
      bounds: bounds
    };
    fs.writeFileSync(stateFile, JSON.stringify(fullState, null, 2));
  } catch (err) {
    console.error('Error saving state:', err);
  }
}

function createWindow() {
  const savedState = loadState();
  const defaultBounds = { width: 900, height: 900, x: undefined, y: undefined };
  const bounds = savedState?.bounds || defaultBounds;

  mainWindow = new BrowserWindow({
    width: bounds.width,
    height: bounds.height,
    x: bounds.x,
    y: bounds.y,
    minWidth: 850,
    minHeight: 850,
    frame: false, // No title bar
    transparent: true, // Transparent background
    alwaysOnTop: true, // Always stay on top
    resizable: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  mainWindow.loadFile('teleprompter.html');

  // Remove menu bar
  Menu.setApplicationMenu(null);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Handle window control
ipcMain.on('minimize-window', () => {
  if (mainWindow) mainWindow.minimize();
});

ipcMain.on('close-window', () => {
  if (mainWindow) mainWindow.close();
});

// Handle window size constraints
ipcMain.on('remove-size-constraints', () => {
  if (mainWindow) {
    mainWindow.setMinimumSize(0, 0);
  }
});

ipcMain.on('resize-to-minimum', () => {
  if (mainWindow) {
    mainWindow.setMinimumSize(850, 850);
    const currentBounds = mainWindow.getBounds();
    if (currentBounds.width < 850 || currentBounds.height < 850) {
      mainWindow.setSize(850, 850);
    }
  }
});

// Handle state saving
ipcMain.on('save-state', (event, state) => {
  saveState(state);
});

// Handle state retrieval
ipcMain.handle('get-state', () => {
  return loadState();
});
