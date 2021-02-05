/** @type {import("snowpack").SnowpackUserConfig } */

module.exports = {
  mount: {
    public: "/",
    src: "/dist",
  },
  plugins: [
    "@snowpack/plugin-babel",
    "@snowpack/plugin-postcss",
    "@snowpack/plugin-react-refresh",
    "@snowpack/plugin-typescript",
  ],
  routes: [],
  optimize: {},
  packageOptions: {
    knownEntrypoints: ["react/jsx-runtime"],
  },
  devOptions: {},
  buildOptions: {},
};
