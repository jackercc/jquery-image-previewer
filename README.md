## 一款实现图片放大预览的jQuery插件

[github地址](https://github.com/jackercc/jquery-image-previewer)

[预览地址](http://jacker.cc/repository/jquery-image-previewer/)

- 引入
```html
<script src="https://s1.pstatp.com/cdn/expire-1-M/jquery/3.4.0/jquery.min.js" type="text/javascript"></script>
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
