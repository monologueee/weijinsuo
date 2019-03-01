$(function () {
    // 获取页面中所有属性是data-toggle="tolltip" 的元素 调用了tooltip函数(初始化要函数)
    $('[data-toggle="tooltip"]').tooltip();

    // 修改轮播图自动轮播图间隔时间
    $('.carousel').carousel({
        interval: 2000
    });

    // 1. 点击pause按钮让轮播图暂停
    $('.pause').on('click',function (){
        // 暂停
        $('.carousel').carousel('pause')
        // 跳转到第几张 索引
        // $('.carousel').carousel(3)
    });
    // 1. 点击prev按钮让轮播图切换到上一张
    $('.prev').on('click',function (){        
        $('.carousel').carousel('prev')
    });
    // 1. 点击next按钮让轮播图切换到上一张
    $('.next').on('click',function (){
        $('.carousel').carousel('next')
    });

    /* 实现手势滑动切换的上一张和下一张
        1. 知道当前滑动的方向
        2. 从左往右滑  切换到上一张 prev  计算滑动的距离正表示从左往右
        3. 从右往左滑  切换到下一张 next  计算滑动距离如果是负值就表示从右往左 */
        var startX = 0;
        var endX = 0;
        $('#slide').on('touchstart',function (e){     
            // jquery添加的事件 事件对象是jquery的事件对象
            // 取里面原生事件对象e.originalEvent
            // console.log(e);
            // console.log(e.originalEvent);
            startX = e.originalEvent.touches[0].clientX;
            console.log(startX);
        });
        $('#slide').on('touchend',function (e){        
            // console.log(e);
            // console.log(e.originalEvent);
            // 结束事件只能使用changedTouches 来获取手指位置
            endX = e.originalEvent.changedTouches[0].clientX;
            console.log(endX);
            // 判断endX - startX的值 如果是正值 从左往右 就切换到上一张
            if(endX - startX > 0){
                $('.carousel').carousel('prev')
            }else if(endX - startX < 0){// 当小于0的时候 从右往左 切换到下一张
                $('.carousel').carousel('next')
            }
        });
})