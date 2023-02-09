const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/gameLoop.js',
    },
    devtool: 'inline-source-map',
    devServer: {
      static: './doc',
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Battleship',
        }),
      ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'doc'),
        clean: true,
    },
    // module: {
    //   rules: [
    //     {
    //       test: /\.css$/i,
    //       use: ['style-loader', 'css-loader'],
    //     },
    //   ],
    // },
};