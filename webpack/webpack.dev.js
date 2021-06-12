const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "..", "build"),
    port: 3000,
    // hot: true, enable module's hot replacement
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NAME: JSON.stringify("dev"),
      },
    }),
  ],
};
