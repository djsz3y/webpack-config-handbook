const stylelint = require('stylelint');
module.exports = {
  plugins: [
    stylelint({
      config: {
        rules: {
          'declaration-no-important': true, // 代码中出现 !important 时给出警告
        },
      },
    })
  ],
};
