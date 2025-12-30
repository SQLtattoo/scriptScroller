module.exports = {
  packagerConfig: {
    asar: true,
    name: 'Script Scroller',
    executableName: 'script-scroller',
    icon: './icon' // Forge will automatically append .ico, .icns, or .png
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'script_scroller',
        setupIcon: './icon.ico',
        iconUrl: 'https://raw.githubusercontent.com/SQLtattoo/scriptScroller/main/icon.ico'
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
