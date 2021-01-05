const config = {
  // Loaded before presets
  plugins: [
    // Dynamic import syntax (for code splitting)
    "@babel/plugin-syntax-dynamic-import",
  ],
  presets: [
    // Compiles modern JS syntax down to ES5
    "@babel/preset-env",

    // React JSX support
    "@babel/preset-react",
  ],
};

module.exports = config;
