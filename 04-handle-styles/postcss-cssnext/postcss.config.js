const postcssCssnext = require("postcss-cssnext");
module.exports = {
  plugins: [
    postcssCssnext({
      // 指定所需支持的浏览器
      browsers: ["> 1%", "last 2 versions"],
    }),
  ],
};
