"use strict";

/* 
 * @Author: Marte
 * @Date:   2018-11-22 21:40:26
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-12-02 16:19:08
 */

$(function () {
    // console.log(document.cookie);

    function carNum() {
        $.ajax({
            type: "get",
            url: "../api/shoppingcar.php",
            async: true,
            data: {
                check: 6
            },
            success: function success(str) {
                var arr = JSON.parse(str);
                var totalnum = 0;
                for (var i = 0; i < arr.length; i++) {
                    totalnum += arr[i]['num'] * 1;
                }
                $('.log_right span').eq(1).html(totalnum).css('background', 'red').css('color', '#fff');
            }
        });
    }

    if (Cookie.get('username')) {
        carNum();
    }

    $('.log_right').click(function () {
        if (Cookie.get('username')) {
            location.href = "html/shoppingcar.html";
        } else {
            alert('大兄跌,登录了才能去购物哦');
        }
    });
    $('.nav_center .nav_center_lf>div').on('mousemove', function () {
        $('.nav_center .nav_center_lf>div').eq($(this).index()).css('background', '#fff').css('color', '#000');
        $('.nav_center .nav_center_lf>div>div').eq($(this).index()).css('display', 'block');
    });
    $('.nav_center .nav_center_lf>div').on('mouseleave', function () {
        $('.nav_center .nav_center_lf>div>div').eq($(this).index()).css('display', 'none');
        $('.nav_center .nav_center_lf>div').eq($(this).index()).css('background', '#6C6C6C').css('color', '#FFFFFF');
    });

    // 轮播图

    var iW = 1920; //JS offsetwidth
    $('#imglist li').css('left', iW);
    $('#imglist li').eq(0).css('left', 0);

    //2.开定时器：每次轮播一个图
    var timer = null;
    clearInterval(timer);
    var now = 0;

    timer = setInterval(next, 2000); //每隔2秒钟切换一个图

    function next() {
        //旧的挪走
        $('#imglist li').eq(now).animate({ 'left': -iW }, 1000);
        now = ++now >= $('#imglist li').size() ? 0 : now;
        //新的快速放在右侧，再挪进可视区
        $('#imglist li').eq(now).css('left', iW);
        $('#imglist li').eq(now).animate({ 'left': 0 }, 1000);
        light();
    }

    //3.焦点跟随
    function light() {
        $('#light span').removeClass('active');
        $('#light span').eq(now).addClass('active');
    }

    function prev() {
        //从左侧切入到可视区
        //旧的挪到右侧
        $('#imglist li').eq(now).animate({ 'left': iW }, 1000);
        //新的
        now = --now < 0 ? $('#imglist li').size() - 1 : now;
        $('#imglist li').eq(now).css('left', -iW);
        $('#imglist li').eq(now).animate({ 'left': 0 }, 1000);
        light();
    }

    //4.点击上下按钮可以切图:如果是渲染出来的数据，记得用事件委托来绑定

    //鼠标经过停止，鼠标离开继续运动
    $('.banner').hover(function () {
        clearInterval(timer);
        // $('.banner>.box>.posibtn').css('display','block');
    }, function () {
        // $('.banner>.box>#posibtn').css('display','none');
        clearInterval(timer);
        timer = setInterval(next, 2000);
    });

    //点击切换到上一张
    $('#prev').click(function () {
        prev();
    });

    //点击切换到下一张
    $('#next').click(function () {
        //下一张
        next();
    });

    //5.点击焦点可以跳转

    $('#light span').click(function () {
        //旧 ：now
        //新：index() 新的
        var index = $(this).index();
        if (index > now) {
            //从右边切入
            //旧 now：挪到左边
            $('#imglist li').eq(now).animate({ 'left': -iW }, 1000);
            //新的
            $('#imglist li').eq(index).css('left', iW);
            $('#imglist li').eq(index).animate({ 'left': 0 }, 1000);
            now = index; //最新的一张变成index
        }
        if (index < now) {
            //从左边切入
            //旧 now：挪到左边
            $('#imglist li').eq(now).animate({ 'left': iW }, 1000);
            //新的
            $('#imglist li').eq(index).css('left', -iW);
            $('#imglist li').eq(index).animate({ 'left': 0 }, 1000);
            now = index; //最新的一张变成index
        }

        light();
    });

    // 限时抢购
    function timeCut() {
        var aPic = document.getElementsByClassName('timepic');
        var endTime = '2018-12-30 15:09:00';
        var end = new Date(endTime);
        //2.开定时器不断获取新时间    
        var timer = setInterval(showTime, 1000);
        showTime(); //刚进入页面就刷新时间更新到节点里面
        function showTime() {
            var nowtime = new Date();
            var diffTime = parseInt((end - nowtime) / 1000); //转成秒       
            //没有到达时间点
            //diffTime  秒   6789秒     转成     2018-10-20  00:00:00
            if (diffTime <= 0) {
                clearInterval(timer);
            }
            var num = setTime(diffTime); //传回来一个时间对象
            str = '' + num.hour + num.min + num.sec; //将时间转换成数字串
            for (var i = 0; i < 6; i++) {
                aPic[i].src = 'images/' + str.charAt(i) + '.JPG';
            }
            // console.log(str);
        }
    }
    timeCut();

    // 选项卡
    $('.writer_top .writer_name a').on('click', function () {
        $('.writer_top .writer_name a').attr('class', '');
        $(this).attr('class', 'writer_active');
        $('.writer_box ').css('display', 'none');
        // console.log($('.writer_top .writer_box '));
        $('.writer_box ').eq($(this).index()).css('display', 'block');
    });

    //退出登录
    if (Cookie.get('username')) {
        $('.header>.hdfirst>a').eq(0).html('欢迎,' + Cookie.get('username'));
        $('.header>.hdfirst>a').eq(1).html('退出登录');
        $('.header>.hdfirst>a').eq(1).on('click', function () {
            var time = new Date();
            time.setDate(time.getDate() - 1);
            Cookie.set('username', Cookie.get('username'), { 'expires': time, 'path': '/' });
            $('.header>.hdfirst>a').eq(0).html('登录');
            $(this).html('免费注册');
        });
    } else {
        $('.hdfirst a:first').click(function () {
            location.href = "html/login.html";
        });
        $('.hdfirst a:last').click(function () {
            location.href = "html/reg.html";
        });
    }

    //列表页跳转
    $('#nav>.nav>ul>li:gt(0)').on('click', function () {
        location.href = 'html/liebiaoye.html';
    });

    //楼层跳跃
    $(window).scroll(function () {
        var scrollTop = $('#rush').offset().top; //获取盒子离浏览器顶部的距离
        // console.log();
        if (getScrollOffset().y >= scrollTop) {
            $('.leftmenu').css('display', 'block');
            //第一层
            if (getScrollOffset().y <= $('.rush_center').offset().top) {
                $('.leftmenu>ul>li').css('background', '#fff').css('color', '#212121');
                $('.leftmenu>ul>li').eq(0).css('background', '#2DB4EA').css('color', '#fff');
            }
            //第二层
            if (getScrollOffset().y >= $('.rush_center').offset().top && getScrollOffset().y <= $('#writer').offset().top) {
                $('.leftmenu>ul>li').css('background', '#fff').css('color', '#212121');
                $('.leftmenu>ul>li').eq(1).css('background', '#2DB4EA').css('color', '#fff');
            }
            //第三层
            if (getScrollOffset().y >= $('#writer').offset().top && getScrollOffset().y <= $('#hotpush').offset().top) {
                $('.leftmenu>ul>li').css('background', '#fff').css('color', '#212121');
                $('.leftmenu>ul>li').eq(2).css('background', '#2DB4EA').css('color', '#fff');
            }
            //第四层
            if (getScrollOffset().y >= $('#hotpush').offset().top && getScrollOffset().y <= $('#boku').offset().top) {
                $('.leftmenu>ul>li').css('background', '#fff').css('color', '#212121');
                $('.leftmenu>ul>li').eq(3).css('background', '#2DB4EA').css('color', '#fff');
            }
            //第五层
            if (getScrollOffset().y >= $('#boku').offset().top && getScrollOffset().y <= $('#tushu').offset().top) {
                $('.leftmenu>ul>li').css('background', '#fff').css('color', '#212121');
                $('.leftmenu>ul>li').eq(4).css('background', '#2DB4EA').css('color', '#fff');
            }
            //第六层
            if (getScrollOffset().y >= $('#tushu').offset().top && getScrollOffset().y <= $('#tongshu').offset().top) {
                $('.leftmenu>ul>li').css('background', '#fff').css('color', '#212121');
                $('.leftmenu>ul>li').eq(5).css('background', '#2DB4EA').css('color', '#fff');
            }
            //第七层
            if (getScrollOffset().y >= $('#tongshu').offset().top && getScrollOffset().y <= $('#fenlei').offset().top) {
                $('.leftmenu>ul>li').css('background', '#fff').css('color', '#212121');
                $('.leftmenu>ul>li').eq(6).css('background', '#2DB4EA').css('color', '#fff');
            }
            //第八层
            if (getScrollOffset().y >= $('#fenlei').offset().top && getScrollOffset().y <= $('#wenchuang').offset().top) {
                $('.leftmenu>ul>li').css('background', '#fff').css('color', '#212121');
                $('.leftmenu>ul>li').eq(7).css('background', '#2DB4EA').css('color', '#fff');
            }
            //第九层
            if (getScrollOffset().y >= $('#wenchuang').offset().top && getScrollOffset().y <= $('#meixue').offset().top) {
                $('.leftmenu>ul>li').css('background', '#fff').css('color', '#212121');
                $('.leftmenu>ul>li').eq(8).css('background', '#2DB4EA').css('color', '#fff');
            }
            //第十层
            if (getScrollOffset().y >= $('#meixue').offset().top && getScrollOffset().y <= $('#yingyin').offset().top) {
                $('.leftmenu>ul>li').css('background', '#fff').css('color', '#212121');
                $('.leftmenu>ul>li').eq(9).css('background', '#2DB4EA').css('color', '#fff');
            }
        } else {
            $('.leftmenu').css('display', 'none');
        }
    });

    //点击按钮跳跃
    $('.leftmenu>ul>li').on('click', function () {
        // $('.leftmenu>ul>li').css('background', '#fff')
        //     .css('color', '#212121');
        // $(this).css('background', '#2DB4EA')
        //     .css('color', '#fff');
        var t = $('.jump').eq($(this).index()).offset().top;
        $('body,html').animate({
            "scrollTop": t
        }, 500);
    });

    //回到顶部
    $('.rightmenu>.rightmenu_bot').on('click', function () {
        $('body,html').animate({
            "scrollTop": 0
        }, 500);
    });

    //购物车件数显示
    if (Cookie.get('username')) {
        console.log(123);
        $.ajax({
            type: "get",
            url: "api/shoppingcar.php",
            async: true,
            data: {
                check: 6
            },
            success: function success(str) {
                var arr = JSON.parse(str);
                var totalnum = 0;
                for (var i = 0; i < arr.length; i++) {
                    totalnum += arr[i]['num'] * 1;
                }
                $('.log_right span').eq(1).html(totalnum).css('background', 'red').css('color', '#fff');
            }
        });
    }

    $.ajax({
        type: 'get',
        url: "api/goodslist.php",
        async: true,
        data: {
            check: 1
        },
        success: function success(str) {
            var arr = JSON.parse(str);
            var res = " <div class=\"hotpush con\">\n                        <div class=\"hotpush_top\">\n                            <h2 class=\"fl\">\u535A\u5E93\u70ED\u63A8</h2>\n                            <ul class=\"fr\">\n                                <li>\u7F16\u8F91\u7CBE\u9009</li>\n                                <li>\u65B0\u4E66\u4E0A\u67B6</li>\n                                <li>\u7545\u9500\u70ED\u5356</li>\n                                <li>\u4E00\u79CD\u5173\u6CE8</li>\n                            </ul>\n                        </div>\n                        <div class=\"hotpush_bot\">\n                            <div>\n                                <ul>\n                                    <li>\n                                        <img src=\"images/bianjijingxuan.jpg\" height=\"280\" width=\"200\" alt=\"\" />\n                                    </li>\n                                    <li class=\"hotpush_list\">\n                                        <div class=\"box\">\n                                            <img src=\"" + arr.datalist[0]['gpic'] + "\" alt=\"\" />\n                                        </div>\n                                        <div class=\"word\">\n                                            <h2>" + arr.datalist[0]['gname'] + "</h2>\n                                            <p>\n                                                <span>\xA5" + arr.datalist[0]['gnewprice'] + "</span>\n                                                <del> |\xA5" + arr.datalist[0]['goldprice'] + "</del>\n                                            </p>\n                                        </div>\n                                    </li>\n                                    <li class=\"hotpush_list\">\n                                        <div class=\"box\">\n                                            <img src=\"" + arr.datalist[1]['gpic'] + "\" alt=\"\" />\n                                        </div>\n                                        <div class=\"word\">\n                                            <h2>" + arr.datalist[1]['gname'] + "</h2>\n                                            <p>\n                                                <span>\xA5" + arr.datalist[1]['gnewprice'] + "</span>\n                                                <del> |\xA5" + arr.datalist[1]['goldprice'] + "</del>\n                                            </p>\n                                        </div>\n                                    </li>\n                                    <li class=\"hotpush_list\">\n                                        <div class=\"box\">\n                                            <img src=\"" + arr.datalist[2]['gpic'] + "\" alt=\"\" />\n                                        </div>\n                                        <div class=\"word\">\n                                            <h2>" + arr.datalist[2]['gname'] + "</h2>\n                                            <p>\n                                                <span>\xA5" + arr.datalist[2]['gnewprice'] + "</span>\n                                                <del> |\xA5" + arr.datalist[2]['goldprice'] + "</del>\n                                            </p>\n                                        </div>\n                                    </li>\n                                    <li class=\"hotpush_list\">\n                                        <div class=\"box\">\n                                            <img src=\"" + arr.datalist[3]['gpic'] + "\" alt=\"\" />\n                                        </div>\n                                        <div class=\"word\">\n                                            <h2>" + arr.datalist[3]['gname'] + "</h2>\n                                            <p>\n                                                <span>\xA5" + arr.datalist[3]['gnewprice'] + "</span>\n                                                <del> |\xA5" + arr.datalist[3]['goldprice'] + "</del>\n                                            </p>\n                                        </div>\n                                    </li>\n                                    <li class=\"hotpush_list\">\n                                        <div class=\"box\">\n                                            <img src=\"" + arr.datalist[4]['gpic'] + "\" alt=\"\" />\n                                        </div>\n                                        <div class=\"word\">\n                                            <h2>" + arr.datalist[4]['gname'] + "</h2>\n                                            <p>\n                                                <span>\xA5" + arr.datalist[4]['gnewprice'] + "</span>\n                                                <del> |\xA5" + arr.datalist[4]['goldprice'] + "</del>\n                                            </p>\n                                        </div>\n                                    </li>\n                                    <li class=\"hotpush_list\">\n                                        <div class=\"box\">\n                                            <img src=\"" + arr.datalist[5]['gpic'] + "\" alt=\"\" />\n                                        </div>\n                                        <div class=\"word\">\n                                            <h2>" + arr.datalist[5]['gname'] + "</h2>\n                                            <p>\n                                                <span>\xA5" + arr.datalist[5]['gnewprice'] + "</span>\n                                                <del> |\xA5" + arr.datalist[5]['goldprice'] + "</del>\n                                            </p>\n                                        </div>\n                                    </li>\n                                    <li class=\"hotpush_list\">\n                                        <div class=\"box\">\n                                            <img src=\"" + arr.datalist[6]['gpic'] + "\" alt=\"\" />\n                                        </div>\n                                        <div class=\"word\">\n                                            <h2>" + arr.datalist[6]['gname'] + "</h2>\n                                            <p>\n                                                <span>\xA5" + arr.datalist[6]['gnewprice'] + "</span>\n                                                <del> |\xA5" + arr.datalist[6]['goldprice'] + "</del>\n                                            </p>\n                                        </div>\n                                    </li>\n                                    <li class=\"hotpush_list\">\n                                        <div class=\"box\">\n                                            <img src=\"" + arr.datalist[7]['gpic'] + "\" alt=\"\" />\n                                        </div>\n                                        <div class=\"word\">\n                                            <h2>" + arr.datalist[7]['gname'] + "</h2>\n                                            <p>\n                                                <span>\xA5" + arr.datalist[7]['gnewprice'] + "</span>\n                                                <del> |\xA5" + arr.datalist[7]['goldprice'] + "</del>\n                                            </p>\n                                        </div>\n                                    </li>\n                                    <li class=\"hotpush_list\">\n                                        <div class=\"box\">\n                                            <img src=\"" + arr.datalist[8]['gpic'] + "\" alt=\"\" />\n                                        </div>\n                                        <div class=\"word\">\n                                            <h2>" + arr.datalist[8]['gname'] + "</h2>\n                                            <p>\n                                                <span>\xA5" + arr.datalist[8]['gnewprice'] + "</span>\n                                                <del> |\xA5" + arr.datalist[8]['goldprice'] + "</del>\n                                            </p>\n                                        </div>\n                                    </li>\n                                    <li class=\"hotpush_list\">\n                                        <div class=\"box\">\n                                            <img src=\"" + arr.datalist[9]['gpic'] + "\" alt=\"\" />\n                                        </div>\n                                        <div class=\"word\">\n                                            <h2>" + arr.datalist[9]['gname'] + "</h2>\n                                            <p>\n                                                <span>\xA5" + arr.datalist[9]['gnewprice'] + "</span>\n                                                <del> |\xA5" + arr.datalist[9]['goldprice'] + "</del>\n                                            </p>\n                                        </div>\n                                    </li>\n                                    <li>\n                                        <img src=\"images/yuqiuyulunxue.jpg\" height=\"280\" width=\"200\" alt=\"\" />\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>";
            $('#hotpush').html(res);
            $('#boku').html(res);
            $('#tushu').html(res);
            $('#tongshu').html(res);
            $('#fenlei').html(res);
            $('#wenchuang').html(res);
            $('#meixue').html(res);
            $('#yingyin').html(res);
        }
    });

    //获取鼠标滚轮距离兼容
    function getScrollOffset() {
        if (window.pageXOffset) {
            return {
                x: window.pageXOffset,
                y: window.pageYOffset
            };
        } else {
            return {
                x: document.body.scrollLeft + document.documentElement.scrollLeft,
                y: document.body.scrollTop + document.documentElement.scrollTop
            };
        }
    }
});