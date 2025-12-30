# Script Scroller - AI Coding Agent Instructions

## Architecture Overview

This is a **simple Electron app** with a two-file architecture:
- **main.js** - Electron main process (window management, IPC, state persistence)
- **teleprompter.html** - Renderer process (UI, scrolling logic, all inline in single HTML file)

No bundler, no frameworks - just vanilla JavaScript for maximum simplicity.

## Key Components

### State Management
- **Window state** (position, size, maximized) and **app state** (script, scroll position, settings) persist to `window-state.json` in user data directory
- State is saved on close via IPC: renderer → main process → filesystem
- State is loaded on startup via IPC: renderer ← main process ← filesystem
- Location: `app.getPath('userData')/window-state.json` (cross-platform)

### Window Configuration
- Frameless (`frame: false`), transparent, always-on-top window
- Custom title bar with minimize/maximize/close buttons in top-right
- Maximize button toggles icon: `□` (normal) ↔ `❐` (maximized)
- Draggable window body (`-webkit-app-region: drag`) with controls excluded (`-webkit-app-region: no-drag`)

### Scrolling Mechanism
- Uses `requestAnimationFrame` for smooth 60fps scrolling
- `currentPosition` tracks vertical offset; decremented by `scrollSpeed * 0.5` per frame
- Transform applied: `scriptContainer.style.transform = translateY(${currentPosition}px)`
- Speed adjustment: Arrow keys change by **±0.3** increments
- Minimum speed: **0.1** (never fully stops with down arrow alone)
- Deceleration mode (S key): multiplies speed by 0.95 each frame until < 0.1, then stops

### IPC Communication Patterns
```javascript
// Renderer → Main (fire-and-forget)
ipcRenderer.send('minimize-window')
ipcRenderer.send('save-state', state)

// Renderer → Main (async request/response)
const state = await ipcRenderer.invoke('get-state')

// Main → Renderer (event broadcast)
mainWindow.webContents.send('window-maximized')
```

## Development Workflow

### Run locally
```powershell
npm start
```

### Build distributable
```powershell
npm run build  # Outputs to dist/ folder
```

### No build step required for development
All code is in plain HTML/JS/CSS - just edit and restart with `npm start`.

## Code Patterns

### Speed Control Philosophy
- **Up arrow**: increases speed (no upper practical limit in code, slider caps at 10)
- **Down arrow**: decreases to minimum 0.1, never auto-stops
- **Space**: instant pause/resume toggle
- **S key**: smooth deceleration to full stop (0.95x multiplier per frame)
- Any speed adjustment cancels active deceleration

### UI State Transitions
Two screens toggle via CSS classes:
- `#setup-screen` / `#teleprompter-screen` with `.active` and `.hidden` classes
- Overlay controls fade with `.hidden` class (opacity transitions)
- Status text updates: "Playing" | "Paused" | "Stopped" | "Slowing down..."

### Cross-Platform Considerations
- Uses Electron APIs that work identically on Windows/macOS/Linux
- File paths use `app.getPath('userData')` for OS-appropriate locations
- Custom title bar means non-native UI on all platforms (macOS users expect top-left traffic lights - this uses top-right controls)

## Common Tasks

### Adding new keyboard shortcuts
Edit the `document.addEventListener('keydown')` handler in teleprompter.html around line 490.

### Adding new persisted settings
1. Add to state object in `close-btn` click handler (teleprompter.html ~line 485)
2. Add restoration logic in `ipcRenderer.invoke('get-state').then()` (teleprompter.html ~line 495)
3. State automatically saves to disk via main.js `saveState()` function

### Modifying window properties
Edit `createWindow()` in main.js - properties like `transparent`, `alwaysOnTop`, `resizable`.

### Changing scrolling physics
- Speed increment: Update `+ 0.3` / `- 0.3` in ArrowUp/ArrowDown handlers
- Minimum speed: Change `Math.max(0.1, ...)` in ArrowDown handler
- Deceleration rate: Modify `decelerationRate = 0.95` constant
- Frame speed multiplier: Change `scrollSpeed * 0.5` in `scroll()` function

## Gotchas

- Don't call `cancelAnimationFrame` without checking `animationId` exists
- Deceleration mode requires `isDecelerating` flag reset in pause/resume/reset/speed-change handlers
- Maximize button icon must sync via IPC events (`window-maximized`/`window-unmaximized`)
- Speed display uses `.toFixed(1)` for sub-1.0 values, plain value for ≥1.0
- Window state save happens in renderer's close handler, not main process close event
