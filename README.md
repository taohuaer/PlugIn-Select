# album-carousel

一个基于 jQuery 的相册轮播插件。


## 效果展示
![效果](http://p9secbq22.bkt.clouddn.com/18-6-22/30749654.jpg)
[Live Demo](https://violay33.github.io/album-carousel/example/example.html)
## 使用说明

1. 使用`git clone`或`download zip`下载插件源码
2. 在项目中引入 jQuery v1.9.1 及以上版本
3. 添加`html`结构
    
    ```html
    <div class="album">
        <div class="left-slide">
            <div class="hd">
                <ul></ul>
            </div>
            <div class="bd">
                <ul></ul>
            </div>
            <button class="prev hide">
                <</button>
                    <button class="next hide">></button>
        </div>
        <div class="right-slide">
            <div class="bd">
                <ul></ul>
            </div>
            <button class="prev hide">∧</button>
            <button class="next hide">∨</button>
        </div>
    </div>
    ```

4. 引入插件相关`css`文件
    
    ```html
    <!-- 地址根据需要修改 -->
    <link rel="stylesheet" href="./../albumCarousel.min.css">
    ```

5. 引入插件`js`文件

    ```html
    <!-- 地址根据需要修改 -->
    <script src="./../albumCarousel.min.js"></script>
    ```

6. 初始化插件
    
    ```js    
    var albumData = [
        ["https://dummyimage.com/928x580/808F7C/fff", "https://dummyimage.com/928x580/66BAB7/fff"],
        ["https://dummyimage.com/928x580/211E55/fff", "https://dummyimage.com/928x580/f60/fff",
            "https://dummyimage.com/928x580/7B90D2/fff"
        ],
        ["https://dummyimage.com/928x580/ff5566/fff", "https://dummyimage.com/928x580/00896C/fff"],
        ["https://dummyimage.com/928x580/C1328E/fff"],
        ["https://dummyimage.com/928x580/A8D8B9/fff", "https://dummyimage.com/928x580/f60/fff"],
        ["https://dummyimage.com/928x580/f60/fff", "https://dummyimage.com/928x580/f60/fff",
            "https://dummyimage.com/928x580/f60/fff"
        ]
    ];

    $('.album').albumCarousel({
        albumData: albumData
    });

    ```


## 参数设置

```js
var defaluts = {
    albumData: [], //相册数据，接收一个二维数组
    speed: 3000 //自动播放速度，默认3s切换
};
```

## To Do

- [x] 图片切换速度
- [ ] 自动/手动播放控制
- [ ] 相册切换滑动效果
- [ ] 优化CSS
