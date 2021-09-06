const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = [
{
  mode: 'none',
  entry: './src/main.js',
  output: {
    filename: 'js/index.js',
    path: path.resolve(__dirname, 'dist'),
    // entry: { main: "./src/main.js", library: ["swiper"] },
    assetModuleFilename: 'images/[name][ext]?[hash]'
  },
  devServer: {
    port: 9000,
  },
	//devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          sources: {
            list: [
              {
                // 이미지 태그만 처리
                tag: "img",
                attribute: "src",
                type: "src",
              },
            ],
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: ["/node_modules"],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
          }
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource'
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/index.css",
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './src/main.html',
      filename: 'index.html',
    }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist']
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: './src/lib', to: './lib' }]
    }),
  ],
},
];