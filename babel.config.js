module.exports = function () {
  const presets = [
    "@babel/preset-react",
    ["env", { targets: { electron: "4.0" }, "useBuiltIns": true }]
  ];
  // Use ?
  // "@babel/plugin-proposal-decorators";
  // "@babel/plugin-proposal-class-properties";
  // "@babel/plugin-syntax-dynamic-import";
  // const plugins = [ ... ];

  return {
    presets,
    // plugins
  };
}

