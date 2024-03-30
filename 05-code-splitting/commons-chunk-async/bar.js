import React from 'react';
document.body.innerHTML = `react can't be extracted to common chunk<br/> react version: ${
  React.version
}`;
document.write('bar.js', React.version, '<br/>');
// console.log('bar.js', React.version, '<br/>') // +++