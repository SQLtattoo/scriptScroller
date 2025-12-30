module.exports = {
  packagerConfig: {
    asar: true,
    name: 'Script Scroller',
    executableName: 'script-scroller'
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'script_scroller'
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
