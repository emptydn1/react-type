const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CopyPlugin = require("copy-webpack-plugin");

// const optimization = {
//   splitChunks: {
//     cacheGroups: {
//       vendor: {
//         test: /node_modules[\\/]/,
//         name: "vendor",
//         // enforce: true,
//         chunks: "all",
//       },
//     },
//   },
// };

module.exports = {
  entry: path.resolve(__dirname, "..", "src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "..", "build"),
    filename: "[name].[chunkhash].js",
    clean: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
    // alias: {
    //   src: path.resolve(__dirname, "src"),
    //   // components: path.resolve(__dirname, "src/components"),
    //   // utils: path.resolve(__dirname, "src/utils"),
    // },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|gif|png|ico)$/,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|svg|eot|ttf|otf)$/,
        type: "asset/inline",
      },
    ],
  },
  //   optimization,
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "src/index.html"),
      removeComments: true,
    }),
    // new CopyPlugin({
    //   patterns: [{ from: 'assets', to: 'build' }],
    // }),
  ],
};
