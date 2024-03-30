const path = require('path');
const webpack = require('webpack');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './foo.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    // publicPath: '/dist/', // ⭐+++
  },
  // // ⭐不同点2：
  // //    Webpack4 中新增的配置项，
  // //    针对当前所处环境（开发/生产），自动添加对饮的一些 Webpack 配置。
  // mode: 'development', // ⭐+++
  plugins: [
    new htmlPlugin({ title: path.basename(__dirname) }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.js',
    }),
  ],

  // // ⭐不同点1：
  // // optimization.SplitChunks替代 CommonsChunkPlugin，
  // //    指定了 chunks的值为 all ，表示 SplitChunks将会对所有的 chunks 生效
  // //    （默认，SplitChunks 只对 异步 chunks 生效，并且不需要配置）。
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //   },
  // }, // ⭐+++
  devServer: {
    publicPath: '/dist/',
    port: 3000,
  },
};
