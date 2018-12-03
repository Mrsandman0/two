'use strict';

/* 
 * @Author: Marte
 * @Date:   2018-11-24 11:43:08
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-12-02 16:53:16
 */

$(document).ready(function () {

    $('.nav_center .nav_center_lf>div').on('mousemove', function () {
        $('.nav_center .nav_center_lf>div').eq($(this).index()).css('background', '#fff').css('color', '#000');
        $('.nav_center .nav_center_lf>div>div').eq($(this).index()).css('display', 'block');
    });
    $('.nav_center .nav_center_lf>div').on('mouseleave', function () {
        $('.nav_center .nav_center_lf>div>div').eq($(this).index()).css('display', 'none');
        $('.nav_center .nav_center_lf>div').eq($(this).index()).css('background', '#6C6C6C').css('color', '#FFFFFF');
    });
    var page = 1;
    var check = 2;
    $.ajax({
        type: "get",
        url: "../api/goodslist.php",
        async: true,
        data: {
            'page': 1,
            'qty': 20,
            'check': check
        },
        success: function success(str) {
            var arr = JSON.parse(str);
            // console.log("\"gid\"")
            // console.log(arr.datalist[0].id)
            page = Math.ceil(arr.total / 20);
            var res = arr.datalist.map(function (item) {
                return '<li data-id="' + item['gid'] + '">\n                            <div class="list_lf fl">\n                                <img src="' + item.gpic + '" height="350" width="350" alt="" />\n                            </div>\n                            <div class="list_rt fr">\n                                <h2>' + item.gname + '</h2>\n                                <p class="list_rt_p1">\u4F5C\u8005:' + item.gwriter + '</p>\n                                <p class="list_rt_p2">\n                                    <span>\xA5' + item.gnewprice + '</span>\n                                    <del>\xA5' + item.goldprice + '</del>\n                                </p>\n                                <a class="list_rt_a1" href="javascript:;">\u52A0\u5165\u8D2D\u7269\u8F66</a>\n                                <a class="list_rt_a2" href="javascript:;"> \u6536\u85CF</a>     \n                            </div> \n                        </li>';
            }).join('');
            $('.list>ul').html(res);

            //创建页数
            var li = '';
            for (var i = 0; i < page; i++) {
                li += '<li>' + (i + 1) + '</li>';
            }
            $('.title_box .title_down ul').html(li);
            $('.title_box .title_down ul>li:first').attr('class', 'li_active');
            $('.title_box .title_down ul>li').eq(4).attr('class', 'li_active'); //给第一页添加高亮
            $('.title_box .title_down>span').html('共' + arr.total + '条记录' + '1' + '/' + page + '页');
        }

    });

    //数字上一页、下一页
    var num = 1;
    $('.title_box .title_down ul').on('click', 'li', function () {
        num = $(this).html();
        // console.log($(this).index())
        $('.title_box .title_down ul>li').removeClass('li_active');
        $('.title_box .title_down ul>li').eq($(this).index()).attr('class', 'li_active');
        $('.title_box .title_down ul>li').eq($(this).index() + 4).attr('class', 'li_active');
        // $(this).attr('class', 'li_active');
        // console.log($('.title_box .title_down ul>li').eq($(this).index()+3)[0])
        $.ajax({
            type: "get",
            url: '../api/goodslist.php',
            async: true,
            data: {
                'page': num,
                'check': check,
                'qty': 20
            },
            success: function success(str) {
                var arr = JSON.parse(str);
                console.log(arr.total);
                var page = Math.ceil(arr.total / 20);
                var res = arr.datalist.map(function (item) {
                    return '<li data-id="' + item.gid + '">\n                            <div class="list_lf fl">\n                                <img src="' + item.gpic + '" height="350" width="350" alt="" />\n                            </div>\n                            <div class="list_rt fr">\n                                <h2>' + item.gname + '</h2>\n                                <p class="list_rt_p1">\u4F5C\u8005:' + item.gwriter + '</p>\n                                <p class="list_rt_p2">\n                                    <span>\xA5' + item.gnewprice + '</span>\n                                    <del>\xA5' + item.goldprice + '</del>\n                                </p>\n                                <a class="list_rt_a1" href="javascript:;">\u52A0\u5165\u8D2D\u7269\u8F66</a>\n                                <a class="list_rt_a2" href="javascript:;"> \u6536\u85CF</a>     \n                            </div> \n                        </li>';
                }).join('');
                $('.list>ul').html(res);
                $('.title_box .title_down>span').html('共' + arr.total + '条记录' + num + '/' + page + '页');
            }
        });
    });

    //文字下一页

    $('.title_box .title_down>div>.next').on('click', function () {
        console.log(123);
        num++;
        if (num >= page) {
            num = page;
        }
        $.ajax({
            type: "get",
            url: '../api/goodslist.php',
            async: true,
            data: {
                'page': num,
                'check': check,
                'qty': 20
            },
            success: function success(str) {
                var arr = JSON.parse(str);
                console.log(arr.total);
                var page = Math.ceil(arr.total / 20);
                var res = arr.datalist.map(function (item) {
                    return '<li data-id="' + item.gid + '">\n                                    <div class="list_lf fl">\n                                        <img src="' + item.gpic + '" height="350" width="350" alt="" />\n                                    </div>\n                                    <div class="list_rt fr">\n                                        <h2>' + item.gname + '</h2>\n                                        <p class="list_rt_p1">\u4F5C\u8005:' + item.gwriter + '</p>\n                                        <p class="list_rt_p2">\n                                            <span>\xA5' + item.gnewprice + '</span>\n                                            <del>\xA5' + item.goldprice + '</del>\n                                        </p>\n                                        <a class="list_rt_a1" href="javascript:;">\u52A0\u5165\u8D2D\u7269\u8F66</a>\n                                        <a class="list_rt_a2" href="javascript:;"> \u6536\u85CF</a>     \n                                    </div> \n                                </li>';
                }).join('');
                $('.list>ul').html(res);
                $('.title_box .title_down>span').html('共' + arr.total + '条记录' + num + '/' + page + '页');
                $('.title_box .title_down ul>li').removeClass('li_active');
                $('.title_box .title_down ul>li').eq(num - 1).attr('class', 'li_active');
                $('.title_box .title_down ul>li').eq(num + 3).attr('class', 'li_active');
            }
        });
    });

    //文字上一页
    $('.title_box .title_down>div>.prev').on('click', function () {
        console.log(num);
        num--;
        if (num <= 1) {
            num = 1;
        }
        $.ajax({
            type: "get",
            url: '../api/goodslist.php',
            async: true,
            data: {
                'page': num,
                'check': check,
                'qty': 20
            },
            success: function success(str) {
                var arr = JSON.parse(str);
                console.log(arr.total);
                var page = Math.ceil(arr.total / 20);
                var res = arr.datalist.map(function (item) {
                    return '<li data-id="' + item.gid + '">\n                            <div class="list_lf fl">\n                                <img src="' + item.gpic + '" height="350" width="350" alt="" />\n                            </div>\n                            <div class="list_rt fr">\n                                <h2>' + item.gname + '</h2>\n                                <p class="list_rt_p1">\u4F5C\u8005:' + item.gwriter + '</p>\n                                <p class="list_rt_p2">\n                                    <span>\xA5' + item.gnewprice + '</span>\n                                    <del>\xA5' + item.goldprice + '</del>\n                                </p>\n                                <a class="list_rt_a1" href="javascript:;">\u52A0\u5165\u8D2D\u7269\u8F66</a>\n                                <a class="list_rt_a2" href="javascript:;"> \u6536\u85CF</a>     \n                            </div> \n                        </li>';
                }).join('');
                $('.list>ul').html(res);
                $('.title_box .title_down>span').html('共' + arr.total + '条记录' + num + '/' + page + '页');
                $('.title_box .title_down ul>li').removeClass('li_active');
                $('.title_box .title_down ul>li').eq(num - 1).attr('class', 'li_active');
                $('.title_box .title_down ul>li').eq(num + 3).attr('class', 'li_active');
            }
        });
    });

    $('.list>ul').on('click', 'li>.list_lf', function () {
        // console.log($(this).parents().data('id'))
        var gid = $(this).parents().attr("data-id");
        location.href = '../html/xiangqingye.html?id=' + gid;
        // console.log(gid)
    });

    //价格降序
    $('.title>.title_bot>a').eq(1).on('click', function () {
        // console.log(num);
        $('.title>.title_bot>a').css('background', '#f3f3f3').css('color', '#212121');
        $(this).css('background', '#2DB4EA').css('color', '#fff');
        num = 1;
        check = 3;
        $('.list>ul').html('');
        $.ajax({
            type: "get",
            url: '../api/goodslist.php',
            async: true,
            data: {
                'page': num,
                'check': check,
                'qty': 20
            },
            success: function success(str) {
                var arr = JSON.parse(str);
                console.log(arr);
                var res = arr.datalist.map(function (item) {
                    return '<li data-id="' + item.gid + '">\n                            <div class="list_lf fl">\n                                <img src="' + item.gpic + '" height="350" width="350" alt="" />\n                            </div>\n                            <div class="list_rt fr">\n                                <h2>' + item.gname + '</h2>\n                                <p class="list_rt_p1">\u4F5C\u8005:' + item.gwriter + '</p>\n                                <p class="list_rt_p2">\n                                    <span>\xA5' + item.gnewprice + '</span>\n                                    <del>\xA5' + item.goldprice + '</del>\n                                </p>\n                                <a class="list_rt_a1" href="javascript:;">\u52A0\u5165\u8D2D\u7269\u8F66</a>\n                                <a class="list_rt_a2" href="javascript:;"> \u6536\u85CF</a>     \n                            </div> \n                        </li>';
                }).join('');
                $('.list>ul').html(res);
                $('.title_box .title_down>span').html('共' + arr.total + '条记录' + num + '/' + page + '页');
                $('.title_box .title_down ul>li').removeClass('li_active');
                $('.title_box .title_down ul>li').eq(num - 1).attr('class', 'li_active');
                $('.title_box .title_down ul>li').eq(num + 3).attr('class', 'li_active');
            }
        });
    });

    //价格升序
    $('.title>.title_bot>a').eq(2).on('click', function () {
        // console.log(num);
        $('.title>.title_bot>a').css('background', '#f3f3f3').css('color', '#212121');
        $(this).css('background', '#2DB4EA').css('color', '#fff');
        num = 1;
        check = 4;
        $('.list>ul').html('');
        $.ajax({
            type: "get",
            url: '../api/goodslist.php',
            async: true,
            data: {
                'page': num,
                'check': check,
                'qty': 20
            },
            success: function success(str) {
                var arr = JSON.parse(str);
                console.log(arr);
                var res = arr.datalist.map(function (item) {
                    return '<li data-id="' + item.gid + '">\n                            <div class="list_lf fl">\n                                <img src="' + item.gpic + '" height="350" width="350" alt="" />\n                            </div>\n                            <div class="list_rt fr">\n                                <h2>' + item.gname + '</h2>\n                                <p class="list_rt_p1">\u4F5C\u8005:' + item.gwriter + '</p>\n                                <p class="list_rt_p2">\n                                    <span>\xA5' + item.gnewprice + '</span>\n                                    <del>\xA5' + item.goldprice + '</del>\n                                </p>\n                                <a class="list_rt_a1" href="javascript:;">\u52A0\u5165\u8D2D\u7269\u8F66</a>\n                                <a class="list_rt_a2" href="javascript:;"> \u6536\u85CF</a>     \n                            </div> \n                        </li>';
                }).join('');
                $('.list>ul').html(res);
                $('.title_box .title_down>span').html('共' + arr.total + '条记录' + num + '/' + page + '页');
                $('.title_box .title_down ul>li').removeClass('li_active');
                $('.title_box .title_down ul>li').eq(num - 1).attr('class', 'li_active');
                $('.title_box .title_down ul>li').eq(num + 3).attr('class', 'li_active');
            }
        });
    });

    //加入购物车
    $('.list>ul').on('click', 'li>.list_rt>.list_rt_a1', function () {
        if (Cookie.get('username')) {
            var listid = $(this).parents().parents().attr('data-id');

            // var time = new Date();
            // time.setDate(time.getDate() + 1);
            // Cookie.set('id' + listid, listid, { 'expires': time, 'path': '/' });
            // console.log(document.cookie)
            $.ajax({
                type: "get",
                url: '../api/shoppingcar.php',
                async: true,
                data: {
                    'id': listid,
                    'num': 1,
                    'check': 1
                },
                success: function success(str) {
                    if (str == 'yes') {
                        $.ajax({
                            type: "get",
                            url: '../api/shoppingcar.php',
                            async: true,
                            data: {
                                'id': listid,
                                'num': 1,
                                'check': 7
                            },
                            success: function success(str) {
                                carNum();
                            }
                        });
                        alert('添加商品成功!');
                    } else {
                        $.ajax({
                            type: "get",
                            url: '../api/shoppingcar.php',
                            async: true,
                            data: {
                                'id': listid,
                                'num': 1,
                                'check': 2
                            },
                            success: function success(str) {
                                carNum();
                            }
                        });
                        alert('添加商品成功!');
                    }
                }
            });
        } else {
            alert('亲,您还未登陆呢!');
        }
    });

    //退出登录
    if (Cookie.get('username')) {
        $('.header>.hdfirst>a').eq(0).html('欢迎,' + Cookie.get('username'));
        $('.header>.hdfirst>a').eq(1).html('退出登录');
        carNum();
        $('.header>.hdfirst>a').eq(1).on('click', function () {
            var time = new Date();
            time.setDate(time.getDate() - 1);
            Cookie.set('username', Cookie.get('username'), { 'expires': time, 'path': '/' });
            $('.header>.hdfirst>a').eq(0).html('登录');
            $(this).html('免费注册');
        });
    } else {
        $('.hdfirst a:first').click(function () {
            location.href = '../html/login.html';
        });
        $('.hdfirst a:last').click(function () {
            location.href = '../html/reg.html';
        });
    }
    // console.log(123)
    $('#log .log_right').on('click', function () {

        if (Cookie.get('username')) {
            location.href = "../html/shoppingcar.html";
        } else {
            alert('大兄跌,登录了才能去购物哦');
        }
    });

    //数量
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
});