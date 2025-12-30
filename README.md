# 📜 Script Scroller

A beautiful, transparent teleprompter app built with Electron. Perfect for video creators, presenters, and content makers who want to deliver natural-looking scripts on camera.

## 📥 Download

### 🎉 For End Users (Non-Developers)

**No installation of Node.js or development tools required!**

Simply download the installer for your platform and run it:

👉 **[Download Script Scroller](https://github.com/SQLtattoo/scriptScroller/releases/latest)**

**Available for all platforms:**
- 🪟 **Windows**: `Script.Scroller-1.0.0.Setup.exe` - Double-click to install
- 🍎 **macOS**: `Script.Scroller-darwin-x64-1.0.0.zip` - Extract and drag to Applications
- 🐧 **Linux**: `.deb` (Debian/Ubuntu) or `.rpm` (Fedora/RHEL) - Install with your package manager

**That's it!** No coding knowledge needed. Download, install, and start creating amazing videos with your teleprompter.

---

### 👨‍💻 For Developers

Want to contribute or run from source? See the development setup below.

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

## 🚀 Quick Start (For Developers)

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

### Build Installers

Create platform-specific installers for distribution:

```powershell
npm run make
```

This will create installers in the `out/make/` directory:
- **Windows**: `.exe` installer (Squirrel)
- **macOS**: `.zip` archive (requires building on macOS)
- **Linux**: `.deb` and `.rpm` packages (requires building on Linux)

**Note:** Due to platform limitations, each OS installer must be built on its native platform. For convenience, we use GitHub Actions to build all platforms automatically when you push a version tag.

### Create a Release (Automated Build for All Platforms)

To build installers for Windows, macOS, and Linux automatically:

1. Update version in `package.json`
2. Commit your changes
3. Create and push a version tag:

```powershell
git tag v1.0.0
git push origin v1.0.0
```

GitHub Actions will automatically build installers for all platforms and create a release with downloadable assets.

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
