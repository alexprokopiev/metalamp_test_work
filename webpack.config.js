const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: {
    landingPage: "./pages/landingPage/landingPage.js",
    registration: "./pages/registration/registration.js",
    roomDetails: "./pages/roomDetails/roomDetails.js",
    searchRoom: "./pages/searchRoom/searchRoom.js",
    uiKit: "./pages/uiKit/uiKit.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    contentBase: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ["html-loader", "pug-html-loader"],
      },
      {
        test: /\.sass$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(svg|ttf|woff)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(webp|gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.js/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./pages/landingPage/landingPage.pug",
      filename: "landingPage.html",
      chunks: ["landingPage"],
    }),
    new HtmlWebpackPlugin({
      template: "./pages/registration/registration.pug",
      filename: "registration.html",
      chunks: ["registration"],
    }),
    new HtmlWebpackPlugin({
      template: "./pages/roomDetails/roomDetails.pug",
      filename: "roomDetails.html",
      chunks: ["roomDetails"],
    }),
    new HtmlWebpackPlugin({
      template: "./pages/searchRoom/searchRoom.pug",
      filename: "searchRoom.html",
      chunks: ["searchRoom"],
    }),
    new HtmlWebpackPlugin({
      template: "./pages/uiKit/uiKit.pug",
      filename: "uiKit.html",
      chunks: ["uiKit"],
    }),
    new MiniCssExtractPlugin(),
  ],
};
