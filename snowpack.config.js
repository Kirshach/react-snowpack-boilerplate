/** @type {import("snowpack").SnowpackUserConfig } */

module.exports = {
  mount: {
    public: '/',
    src: '/dist',
  },
  plugins: [
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-babel',
    '@snowpack/plugin-postcss',
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-react-refresh',
    [
      '@snowpack/plugin-run-script',
      {
        cmd: 'eslint src --ext .js,jsx,.ts,.tsx',
        watch: 'esw -w --clear src --ext .js,jsx,.ts,.tsx',
      },
    ],
  ],
  routes: [],
  optimize: {},
  packageOptions: {
    knownEntrypoints: ['react/jsx-runtime'],
  },
  devOptions: {},
  buildOptions: {},
};
