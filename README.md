# 📜 Script Scroller

A beautiful, transparent teleprompter app built with Electron. Perfect for video creators, presenters, and content makers who want to deliver natural-looking scripts on camera.

## ✨ Features

- **Frameless & Transparent** - Minimalist design that stays out of the way
- **Always on Top** - Stays visible over your recording software
- **Smooth Auto-Scrolling** - Customizable speed for comfortable reading
- **Deceleration Control** - Gradually slow down to a stop with the S key
- **State Persistence** - Automatically saves your script and settings
- **Fully Draggable & Resizable** - Position anywhere on your screen
- **Camera-Friendly** - Position near your webcam lens to maintain eye contact
- **Keyboard Shortcuts** - Full control without touching the mouse
- **Customizable** - Adjust font size and scrolling speed on the fly
- **Cross-Platform** - Works on Windows, macOS, and Linux

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org) (v14 or higher)

### Installation

```powershell
npm install
```

### Run the App

```powershell
npm start
```

### Build Standalone Executable

```powershell
npm run build
```

The portable executable will be created in the `dist` folder.

## 📖 How to Use

1. **Launch** the app with `npm start`
2. **Paste** your script in the text area
3. **Adjust** speed and font size to your preference
4. **Click** "Start Scrolling"
5. **Position** the window right below your webcam for natural eye contact
6. **Resize** the window to make it narrow and tall for better camera alignment
7. **Press Space** to start scrolling - it begins automatically!

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| **Space** | Play/Pause scrolling |
| **S** | Slow down to stop (smooth deceleration) |
| **↑/↓** | Increase/Decrease speed (±0.3 increments) |
| **R** | Reset to beginning |
| **F** | Toggle fullscreen |
| **Esc** | Show controls / Exit to setup |

**Note:** Arrow keys allow fine-grained speed control from 0.1 (very slow) to 10.0 (very fast).

## 🎥 Pro Tips for Video Recording

- **Window Positioning**: Place it directly below your camera lens so your eyes naturally look toward the camera
- **Narrow & Tall**: Resize the window to be narrow and tall - this creates less eye movement left-to-right
- **Font Size**: Larger fonts work better when the window is further from the camera
- **Speed**: Start slow and gradually increase as you get comfortable
- **Deceleration**: Press **S** for a smooth slowdown instead of an abrupt pause
- **Practice**: Run through your script a few times to find your ideal speed

## 💾 State Persistence

Script Scroller automatically saves your work:
- **Script content** - Your text is preserved between sessions
- **Window size & position** - Opens exactly where you left it
- **Settings** - Font size and scroll speed are remembered

The app always starts on the setup screen, ready for you to review or edit your script before scrolling.

## 🛠️ Technologies

- [Electron](https://www.electronjs.org/) - Cross-platform desktop framework
- HTML5 & CSS3 - Modern web technologies
- JavaScript - For smooth animations and controls

## 📄 License

MIT License - feel free to use, modify, and distribute!

## 💖 Made With Love

Created for video creators who want to look natural on camera while reading their scripts.

---

**Happy presenting!** 🎬
