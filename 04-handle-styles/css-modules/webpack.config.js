const path = require("path");
const htmlPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          // 'style-loader',
          {
            loader: "style-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true, // Enable CSS modules
              // 指明 CSS 代码中的类名会如何编译：
              // 默认情况下，CSS modules 会生成一个哈希值作为类名，但是可以通过 localIdentName 来自定义生成的类名。
              //    [name]：模块名——style
              //    [local]：原本的选择则其标识符——title
              //    [hash:base64:5]：5 位 hash 值，根据模块名和标识符计算的——保证唯一性，也就是：不同模块中相同标识符也不会造成样式冲突。
              localIdentName: "[name]__[local]__[hash:base64:5]", // Customize the generated class names
            },
          },
        ],
      },
    ],
  },
  plugins: [new htmlPlugin({ title: path.basename(__dirname) })],
  devServer: {
    publicPath: "/dist/",
    port: 3000,
  },
};
