const path = require("path");
const htmlPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].js",
  },
  mode: "development",
  module: {
    rules: [
      // 设置处理css文件的规则
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader", // fallback属性：用于指定当插件无法提取样式时，所采用的loader
          use: "css-loader", // extract里的use：指定提取样式之前采用哪些loader来预先进行处理。
        }), // use没有直接传入loader，使用了插件的extract方法包了一层。
      },
    ],
  },
  plugins: [
    new htmlPlugin({ title: path.basename(__dirname) }),
    // 还要在webpack的plugins配置中添加该插件，并传入提取后的资源文件名。
    // 第一次使用plugins，简单介绍：
    // plugins用于接收一个插件数组，可以使用Webpack内部提供的一些插件，也可以加载外部插件。
    // Webpack为插件提供了各种API，使其可以在打包的各个环节中添加一些额外任务，就像extract-text-webpack-plugin所实现的样式提取一样。
    // 随着更多插件的介绍，我们会逐渐深入了解Webpack的插件机制。
    new ExtractTextPlugin("style.css"),
  ],
  devServer: {
    publicPath: "/dist/",
    port: 3000,
  },
};
