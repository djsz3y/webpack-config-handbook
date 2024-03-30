import styles from './style.css';
// 使用 CSS Modules 时 CSS 文件会导出一个对象，
// 所以需要把这个对象的属性添加到 HTML 标签上。
document.write(`<h1 class="${styles.title}">My Webpack app.</h1>`);
