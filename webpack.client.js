const path = require("path");
const merge = require('webpack-merge');
const baseConfig = require("./webpack.base");
const config = {
  entry: "./src/client/client.js",

  output: {
    filename: "bundle.client.js",
    path: path.resolve(__dirname, "dist")
  }
};

module.exports  =merge(baseConfig, config);