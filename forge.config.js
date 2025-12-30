module.exports = {
  packagerConfig: {
    asar: true,
    name: 'Script Scroller',
    executableName: 'script-scroller',
    icon: './icon', // Forge will automatically append .ico, .icns, or .png
    appCopyright: 'Copyright © 2025 byScript Scroller'
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'script_scroller',
        setupIcon: './icon.ico',
        iconUrl: 'https://raw.githubusercontent.com/SQLtattoo/scriptScroller/main/icon.ico',
        loadingGif: undefined,
        setupExe: 'Script.Scroller-Setup.exe',
        noMsi: true
      }
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin', 'linux']
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        options: {
          maintainer: 'Script Scroller Team',
          homepage: 'https://github.com/SQLtattoo/scriptScroller',
          description: 'Beautiful transparent teleprompter for video creators'
        }
      }
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {
        options: {
          homepage: 'https://github.com/SQLtattoo/scriptScroller',
          description: 'Beautiful transparent teleprompter for video creators'
        }
      }
    }
  ],
  plugins: []
};
