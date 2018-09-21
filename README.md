## 一款实现图片放大预览的jQ	uery插件

- 引入
```html
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" type="text/javascript"></script>
<script src="jquery-imagepreviewer.min.js" type="text/javascript"></script>
```

- 示例
```html
<section class="article-box">
  <h3>这是一篇文章</h3>
  <p>这是一篇文章，下面是图片</p>
  <img src="http://img.zcool.cn/community/0117e2571b8b246ac72538120dd8a4.jpg@1280w_1l_2o_100sh.jpg" alt="风景">
</section>
```
```js
window.onload = function() {
  $(".article-box").imagePreviewer();
};
```

- 配置项
```js
{
  scroll: true, // 是否屏幕滚动弹框消失，默认为true
}
```