import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
// import LodashModuleReplacementPlugin from "lodash-webpack-plugin";
// import TerserPlugin from "terser-webpack-plugin";
// import cssnano from "cssnano";
// import autoprefixer from "autoprefixer";
// import SpritesmithPlugin from "webpack-spritesmith";

export default {
  entry : "./src/index.js",
  target : "electron-renderer",
  output : {
    path : path.resolve(__dirname, "build"),
    publicPath : "./",
    filename : "bundle.js",
  },
  module : {
    rules : [
      {
        test : /\.js$/,
        exclude : [
          /node_modules/,
          /.json?/,
        ],
        use : {
          loader : "babel-loader",
          query : {
            presets : ["env", "react"],
          },
        },
      }, {
        test : /\.(s*)css$/,
        use : ["style-loader", "css-loader"],
      },
    ],
  },
  plugins : [
    HtmlWebpackPlugin,
  ],
  resolve : {
    extensions : [".js", ".jsx"],
  },
};
