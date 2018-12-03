'use strict';

/* 
 * @Author: Marte
 * @Date:   2018-11-24 11:43:08
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-12-02 16:43:23
 */

$(document).ready(function () {

    // $('.nav_center .nav_center_lf>div').on('mousemove',function(){
    //     $('.nav_center .nav_center_lf>div').eq($(this).index()).css('background' ,'#fff')
    //                                                             .css('color','#000')
    //     $('.nav_center .nav_center_lf>div>div').eq($(this).index()).css('display','block');
    // })
    // $('.nav_center .nav_center_lf>div').on('mouseleave',function(){
    //     $('.nav_center .nav_center_lf>div>div').eq($(this).index()).css('display','none');
    //     $('.nav_center .nav_center_lf>div').eq($(this).index()).css('background' ,'#6C6C6C')
    //                                                             .css('color','#FFFFFF')
    // })
    $('.log_right').click(function () {
        if (Cookie.get('username')) {
            location.href = "../html/shoppingcar.html";
        } else {
            alert('大兄跌,登录了才能去购物哦');
        }
    });

    //数据渲染
    var res = location.search.slice(1);
    var id = res.split('=')[1];
    $.ajax({
        type: 'get',
        url: '../api/xiangqingye.php',
        async: true,
        data: {
            'check': 1,
            'list': id
        },
        success: function success(str) {
            var arr = JSON.parse(str);
            var res = arr.datalist.map(function (item) {
                return ' <div class="detail_top">\n                            <p>\n                                \u60A8\u7684\u5F53\u524D\u4F4D\u7F6E:\n                                <a href="javascript:;">\u5168\u90E8\u5206\u7C7B</a>>\n                                <a href="javascript:;">\u56FE\u4E66</a>>\n                                <a href="javascript:;">\u8BD7\u6B4C\u6563\u6587</a>>\n                                <a href="javascript:;">\u6587\u96C6</a>\n                            </p>\n                        </div>\n                        <div class="detail_bot">\n\n                            <div class="detail_bot_lf fl" id="myDiv">\n                                <div>\n                                    <div class="smallPic">\n                                        <span class="float_lay"></span>\n                                        <img src="' + item.gpic + '"  alt="" />\n                                    </div>\n                                    \n                                    <div  class="bigPic">\n                                        <img src="' + item.gpic + '"  alt="" />\n                                    </div>\n                                </div>                        \n                                <ul>\n                                    <li><img src="' + item.gpic + '" alt="" /></li>\n                                </ul>\n                            </div>\n                            <div class="detail_bot_mid fl">\n                                <div class="detail_first">\n                                    <p>' + item.gname + '</p>\n                                    <p>\u81F4\u656C\u6768\u7EDB\u5148\u751F,\u6C11\u56FD\u5927\u5E08\u7ECF\u5178\u4F5C\u54C1,\u8BB2\u8FF0"\u6211\u4EEC\u4EE8"</p>\n                                    <p>\n                                        \u4F5C\u8005:\n                                        <a>' + item.gwriter + '</a>\n                                        \u51FA\u7248\u793E:\n                                        <a style="margin-right:0;">\u4E09\u8054\u4E66\u5E97</a>\n                                    </p>\n                                </div>\n                                \n                                <div class="detail_second">\n                                    <div style="background:#e5e5e5;">\n                                        <span>\u5B9A&nbsp;&nbsp;\u4EF7</span>\n                                        <del style="color:#333;line-height:30px">\xA5' + item.goldprice + '</del><br />\n                                        <span>\u552E&nbsp;&nbsp;\u4EF7</span>\n                                        <span class="detail_mon"><i style="font-size:16px;">\xA5</i>' + item.gnewprice + '</span>\n                                    </div> \n                                </div>\n                                <div class="detail_third">\n                                    <p>\n                                        <span>\u8FD0\u8D39</span>\n                                        <span>\u6EE159\u5305\u90AE</span>\n                                    </p>\n                                    <p>\n                                        <span>\u9500\u91CF</span>\n                                        <span>284310\u4EF6</span>\n                                    </p>\n                                </div>\n                                <div class="detail_fourth">\n                                    <span>\u6570\u91CF</span>\n                                    <span class="detail_fourth_sub">-</span><input type="text" value="1" /><span class="detail_fourth_add">+</span>\n                                    <span class="detail_kucun">\u5E93\u5B58:1464</span>\n                                </div>\n                                <div class="detail_fifth">\n                                    <a class="detail_fifth_fir" href="javascript:;">\n                                        \u7ACB\u5373\u8D2D\u4E70\n                                    </a>\n                                    <a class="detail_fifth_sc" href="javascript:;">\n                                        \u52A0\u5165\u8D2D\u7269\u8F66\n                                    </a>\n                                    <a href="javascript:;">\n                                        \u6536\u85CF\n                                    </a>\n                                </div>\n                                <div class="detail_sixth">\n                                    <span>\u670D\u52A1</span>\n                                    <span>\u2714</span>\n                                    <span>\u6B63\u54C1\u4FDD\u8BC1</span>\n                                    <span>\u2714</span>\n                                    <span>\u4E03\u5929\u65E0\u7406\u7531\u9000\u8D27</span>\n                                    <span>\u2714</span>\n                                    <span>\u8D60\u900133\u79EF\u5206</span>\n                                </div>\n                            </div>\n                            <div class="detail_bot_rt fr">\n                                <div class="detail_bot_rt_top">\n                                    <img src="" alt="" />\n                                    <h2>\u535A\u5E93\u4F53\u9A8C\u5E97</h2>\n                                    <a href="javascript:;">\u8FDB\u5165\u9996\u9875</a>\n                                    <a href="javascript:;">\u4E00\u952E\u5F00\u542F</a>\n                                </div>\n                                <img src="../images/erweimaapp.png" height="258" width="220" alt="" />\n                            </div>\n                        </div>';
            }).join('');
            $('#detail>.detail').html(res);
        }
    });

    //加减数量
    $('.detail').on('click', '.detail_bot>.detail_bot_mid>.detail_fourth>.detail_fourth_sub', function () {
        var val = $.trim($(this).next().val());
        // console.log(val);
        if (val <= 1) {
            $(this).css('color', '#ccc');

            val = 1;
        } else {
            $(this).css('color', '#696967');
            $.trim($(this).next().val(val * 1 - 1));
        }
        $(this).next().next().css('color', '#696967');
    });
    $('.detail').on('click', '.detail_bot>.detail_bot_mid>.detail_fourth>.detail_fourth_add', function () {
        var val = $.trim($(this).prev().val());
        if (val >= 10) {
            $(this).css('color', '#ccc');
            val = 10;
        } else {
            $(this).css('color', '#696967');
            $.trim($(this).prev().val(val * 1 + 1));
        }
        $(this).prev().prev().css('color', '#696967');
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

    //登录后才能的操作
    if (Cookie.get('username')) {
        //登录判断
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

    //加入购物车
    $('.detail').on('click', '.detail_bot>.detail_bot_mid>.detail_fifth>.detail_fifth_sc', function () {
        // console.log(123)
        if (Cookie.get('username')) {
            var val = $.trim($(this).parent().prev().children('input').val()); //获取input里面的值
            console.log(val);
            $.ajax({
                type: "get",
                url: '../api/shoppingcar.php',
                async: true,
                data: {
                    'id': id,
                    'num': val,
                    'check': 1
                },
                success: function success(str) {
                    //更新num值
                    if (str == 'yes') {
                        $.ajax({
                            type: "get",
                            url: '../api/shoppingcar.php',
                            async: true,
                            data: {
                                'id': id,
                                'num': val,
                                'check': 7
                            },
                            success: function success(str) {
                                carNum();
                            }
                        });
                        alert('添加商品成功!');
                    } else {
                        //插入新数据
                        $.ajax({
                            type: "get",
                            url: '../api/shoppingcar.php',
                            async: true,
                            data: {
                                'id': id,
                                'num': val,
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
            alert('客官,你还没有登录呢!!!');
        }
    });

    //跳转购物车页面
    $('.detail').on('click', '.detail_bot>.detail_bot_mid>.detail_fifth>.detail_fifth_fir', function () {
        if (Cookie.get('username')) {
            location.href = '../html/shoppingcar.html';
        } else {
            alert('大兄弟,你还没有登录呢!!!');
        }
    });

    //放大镜
    $('.detail').on('mousemove', '#myDiv .smallPic', function (e) {
        $('#myDiv .float_lay').css({ display: 'block' });
        $('#myDiv .bigPic').css({ display: 'block' });
        var divPosi = $('#myDiv').offset(); //取得图片距离页面的边距
        var xx = e.clientX;
        var yy = e.clientY;
        var picLeft = xx - divPosi.left - 25;
        var picTop = yy - divPosi.top - 25;
        var seePic = $('#myDiv .bigPic').width();
        var bigPic = $('#myDiv .bigPic img').width();
        var percentL;
        var percentT;
        // <!--这样写是最好的，不然会卡顿-->
        if (picLeft < 0) {
            picLeft = 0;
        } else if (picLeft > 350) {
            picLeft = 350;
        }
        if (picTop < 0) {
            picTop = 0;
        } else if (picTop > 350) {
            picTop = 350;
        }
        $('#myDiv .float_lay').css({ top: picTop + 'px', left: picLeft + 'px' });
        percentL = -picLeft / 350 * (bigPic - seePic);
        percentT = -picTop / 350 * (bigPic - seePic);
        $('#myDiv .bigPic img').css({ marginTop: percentT + 'px', marginLeft: percentL + 'px' });
    });
    $('.detail').on('mouseleave', '#myDiv .smallPic', function () {
        $('#myDiv .float_lay').css({ display: 'none' });
        $('#myDiv .bigPic').css({ display: 'none' });
    });

    // $('#myDiv .smallPic').hover(function(){
    //     $('#myDiv .float_lay').css({display:'block'});
    //     $('#myDiv .bigPic').css({display:'block'});
    // },function(){
    //     $('#myDiv .float_lay').css({display:'none'});
    //     $('#myDiv .bigPic').css({display:'none'});
    // });
    // $('#myDiv .smallPic').on('mousemove',function(e){//火狐没有event对象，必须传一个event
    //     var divPosi=$('#myDiv').offset();//取得图片距离页面的边距
    //     var xx=e.clientX;
    //     var yy=e.clientY;
    //     var picLeft=xx-divPosi.left-25;
    //     var picTop=yy-divPosi.top-25;
    //     var seePic=$('#myDiv .bigPic').width();
    //     var bigPic=$('#myDiv .bigPic img').width();
    //     var percentL;
    //     var percentT;
    //     // <!--这样写是最好的，不然会卡顿-->
    //     if(picLeft<0){
    //         picLeft=0;
    //     }else if(picLeft>350){
    //         picLeft=350;
    //     }
    //     if(picTop<0){
    //         picTop=0;
    //     }else if(picTop>350){
    //         picTop=350;
    //     }
    //     $('#myDiv .float_lay').css({top:picTop+'px',left:picLeft+'px'});
    //     percentL=-picLeft/350*(bigPic-seePic);
    //     percentT=-picTop/350*(bigPic-seePic);
    //     $('#myDiv .bigPic img').css({marginTop:percentT+'px',marginLeft:percentL+'px'});
    // });

});