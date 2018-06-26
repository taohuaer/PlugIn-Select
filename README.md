# PlugIn-Select

自定义下拉箭头样式的select插件，兼容IE9及以上。


## 效果展示
![效果](https://github.com/taohuaer/PlugIn-Select/blob/master/select.gif)
[Live Demo](https://github.com/taohuaer/PlugIn-Select/blob/master/select.html)
## 使用说明

1. 下载插件源码
2. 添加`html`结构
    
    ```html
    <div id="select">
      <img src="select.png" alt="">
      </div>
    ```

4. 引入插件相关`css`
    
    ```html
    ```

5. 引入插件`js`文件

    ```html
    <script src="~/select.min.js"></script>
    ```

6. 初始化插件
    
    ```js    
   $("#select").mySelect({
       msg:["第一个","第二个","第三个","第四个"],
       shownum:0,
       callback:function(ele) {
        console.log(ele.index());
       }    
  });

    ```


## 参数设置

```js
var defaluts = {
     msg:["第一个","第二个","第三个","第四个"],  //默认你需要的选项
       shownum:0,   // 选择不展开时选中的是第几个，默认是0开始，也就是上述“第一个”
       callback:function(ele) {
        //console.log(ele.index());  //此处返回你当前点击的选项的索引
       }  
};
```

## 浏览器兼容版本
    IE9+
    谷歌
    火狐
    360
    猎豹
    QQ

