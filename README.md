# 📜 Script Scroller

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.4-blue.svg)
![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-lightgrey.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

**A beautiful, transparent teleprompter app built with Electron**

Perfect for video creators, presenters, and content makers who want to deliver natural-looking scripts on camera.

[![Download for Windows](https://img.shields.io/badge/Download-Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white)](https://github.com/SQLtattoo/scriptScroller/releases/latest)
[![Download for macOS](https://img.shields.io/badge/Download-macOS-000000?style=for-the-badge&logo=apple&logoColor=white)](https://github.com/SQLtattoo/scriptScroller/releases/latest)
[![Download for Linux](https://img.shields.io/badge/Download-Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)](https://github.com/SQLtattoo/scriptScroller/releases/latest)

[Features](#-features) •
[Download](#-download) •
[How to Use](#-how-to-use) •
[Shortcuts](#️-keyboard-shortcuts) •
[For Developers](#-for-developers)

</div>

---

## 🎯 About

**Script Scroller** is a frameless, transparent teleprompter designed specifically for video creators who want to maintain natural eye contact with their camera while reading their scripts. Unlike traditional teleprompters, Script Scroller:

- 💨 **Stays out of the way** - Transparent, frameless design that blends with your screen
- 🎥 **Camera-friendly positioning** - Place it right below your webcam for natural eye line
- ⚡ **Smooth scrolling** - Customizable speed with fine-grained control
- 🎨 **Fully customizable** - Adjust font size and speed on the fly
- 💾 **Auto-saves everything** - Your script, window position, and settings are remembered
- 🌍 **Cross-platform** - Works on Windows, macOS, and Linux

Whether you're a YouTuber, presenter, teacher, or content creator, Script Scroller helps you deliver confident, natural-looking videos without memorizing lengthy scripts.

## 📥 Download

### 🎉 For End Users (Non-Developers)

**No installation of Node.js or development tools required!**

Simply download the installer for your platform and run it:

<div align="center">

### 👉 **[Download from Releases](https://github.com/SQLtattoo/scriptScroller/releases/latest)** 👈

</div>

**Available for all platforms:**
- 🪟 **Windows**: `Script.Scroller-X.X.X.Setup.exe` - Run the installer
- 🍎 **macOS**: `script-scroller-darwin-x64-X.X.X.zip` - Extract and drag to Applications
- 🐧 **Linux**: `.deb` (Debian/Ubuntu) or `.rpm` (Fedora/RHEL) - Install with your package manager

**That's it!** No coding knowledge needed. Download, install, and start creating amazing videos with your teleprompter.

> **📝 Note for Windows Users:**
> - The installer uses **Squirrel** (same technology as Slack, Discord, GitHub Desktop, and Microsoft Teams)
> - It has a **minimal, fast installer** - don't be surprised if it looks different from traditional Windows installers!
> - Installation is quick and automatic
> - After installation, find "Script Scroller" in your Start Menu
> - The app auto-updates seamlessly in the background

---

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

---

## � How to Use

1. **Download and install** Script Scroller for your platform (see [Download](#-download) section above)
2. **Launch** the app
3. **Paste your script** in the text area on the setup screen
4. **Adjust settings**:
   - Use the **Speed** slider to set your preferred scrolling speed (or use arrow keys later)
   - Use the **Font Size** slider to make text larger or smaller
5. **Click "Start Scrolling"**
6. **Position the window**:
   - Resize it to be **narrow and tall** for less eye movement
   - Place it **right below your webcam** so you naturally look at the camera
7. **Press Space** to start scrolling - it begins automatically!
8. **Control playback** with keyboard shortcuts (see below)

💡 **Pro Tip**: Run through your script a few times to find your ideal speed before recording!

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

---

## �👨‍💻 For Developers

Want to contribute or run from source? Follow the development setup below.

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

---

##  State Persistence

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
