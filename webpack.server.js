const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");

const webpackNodeExternals = require("webpack-node-externals");
const config = {
  // for nodeJS
  target: "node",
  entry: "./src/index.js",
  output: {
    filename: "bundle.server.js",
    path: path.resolve(__dirname, "dist"),
  },
  // externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, config);
