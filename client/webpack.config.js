"use strict";
const webpack = require("webpack");
const { getIfUtils, removeEmpty } = require("webpack-config-utils");
const Dotenv = require("dotenv-webpack");
const compressionPlugin = require("compression-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackExternalsPlugin = require("html-webpack-externals-plugin");
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const path = require("path");

let BUILD_DIR = path.resolve(__dirname, "public");
let APP_DIR = path.resolve(__dirname, "src");
let NODE_DIR = path.resolve(__dirname, "node_modules");

module.exports = (env, argv) => {
  const { ifProduction, ifNotProduction } = getIfUtils(argv.mode);

  return {
    devtool: "source-map",
    entry: {
      app: ["babel-polyfill", APP_DIR + "/Main.jsx"]
    },
    output: {
      path: BUILD_DIR,
      publicPath: "/",
      filename: "[name].js",
      chunkFilename: "[name].js"
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendor",
            chunks: "all"
          }
        }
      }
    },
    plugins: removeEmpty([
      new CaseSensitivePathsPlugin(),
      new Dotenv({ systemvars: true }),
      new HtmlWebpackPlugin({
        template: "index.ejs",
        minify: {
          collapseWhitespace: true,
          collapseInlineTagWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true
        }
      }),
      new HtmlWebpackExternalsPlugin({
        externals: [
          {
            module: "bootstrap",
            entry: "dist/css/bootstrap.min.css"
          }
        ]
      }),
      ifProduction(
        new compressionPlugin({
          asset: "[path].gz[query]",
          algorithm: "gzip",
          test: /\.js$|\.css$|\.html$/,
          threshold: 10240,
          minRatio: 0.8
        })
      )
    ]),
    resolve: {
      extensions: [".js", ".jsx"],
      alias: {
        '@utils': path.resolve(__dirname, "src/app/utils"),
        '@styles': path.resolve(__dirname, "src/css"),
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          loader: ["babel-loader", "eslint-loader"],
          include: APP_DIR
        },
        {
          test: /\.pcss$/,
          use: ["style-loader"]
        },
        {
          test: [/\.pcss$/],
          use: [
            {
              loader: "css-loader",
              options: {
                modules: true,
                localIdentName: "[path][name]__[local]--[hash:base64:5]"
              }
            }
          ]
        },
        {
          test: /\.pcss$/,
          use: ["postcss-loader"]
        },
        {
          test: /\.(jpg|png)$/,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 25000
              }
            }
          ]
        },
        {
          test: /\.md$/,
          use: [
            {
              loader: "html-loader"
            },
            {
              loader: "markdown-loader"
            }
          ]
        }
      ]
    },
    devServer: {
      inline: false,
      hot: false,
      progress: true,
      historyApiFallback: {
        index: "index.html"
      },
      stats: { colors: true },
      contentBase: BUILD_DIR,
      watchOptions: {
        ignore: /node_modules/
      }
    }
  };
};
