const autoprefixer = require('autoprefixer');
module.exports = {
  plugins: [
    // 传入配置，添加需要支持的特性，如 grid: true，以及兼容哪些浏览器版本
    // 配置好后，可以使用一些新的 CSS 特性，如网格布局 display: grid ，同时保证兼容性。
    autoprefixer({
      grid: true, // 启用 CSS 网格布局，会为 grid 特性添加 -ms- 前缀，编译后为 display: -ms-grid;
      browsers: ['> 1%', 'last 3 versions', 'android 4.2', 'ie 8'], // 浏览器版本
    })
  ],
};
