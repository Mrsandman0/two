/* 
 * @Author: Marte
 * @Date:   2018-11-24 11:43:08
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-12-02 16:43:23
 */

$(document).ready(function() {

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
    $('.log_right').click(function() {
        if(Cookie.get('username')){
            location.href="../html/shoppingcar.html";
        }else{
            alert('大兄跌,登录了才能去购物哦');
        }
        
    })




    //数据渲染
    var res = (location.search).slice(1);
    var id = res.split('=')[1];
    $.ajax({
        type: 'get',
        url: '../api/xiangqingye.php',
        async: true,
        data: {
            'check': 1,
            'list': id
        },
        success: function(str) {
            var arr = JSON.parse(str);
            var res = arr.datalist.map(function(item) {
                return ` <div class="detail_top">
                            <p>
                                您的当前位置:
                                <a href="javascript:;">全部分类</a>>
                                <a href="javascript:;">图书</a>>
                                <a href="javascript:;">诗歌散文</a>>
                                <a href="javascript:;">文集</a>
                            </p>
                        </div>
                        <div class="detail_bot">

                            <div class="detail_bot_lf fl" id="myDiv">
                                <div>
                                    <div class="smallPic">
                                        <span class="float_lay"></span>
                                        <img src="${item.gpic}"  alt="" />
                                    </div>
                                    
                                    <div  class="bigPic">
                                        <img src="${item.gpic}"  alt="" />
                                    </div>
                                </div>                        
                                <ul>
                                    <li><img src="${item.gpic}" alt="" /></li>
                                </ul>
                            </div>
                            <div class="detail_bot_mid fl">
                                <div class="detail_first">
                                    <p>${item.gname}</p>
                                    <p>致敬杨绛先生,民国大师经典作品,讲述"我们仨"</p>
                                    <p>
                                        作者:
                                        <a>${item.gwriter}</a>
                                        出版社:
                                        <a style="margin-right:0;">三联书店</a>
                                    </p>
                                </div>
                                
                                <div class="detail_second">
                                    <div style="background:#e5e5e5;">
                                        <span>定&nbsp;&nbsp;价</span>
                                        <del style="color:#333;line-height:30px">¥${item.goldprice}</del><br />
                                        <span>售&nbsp;&nbsp;价</span>
                                        <span class="detail_mon"><i style="font-size:16px;">¥</i>${item.gnewprice}</span>
                                    </div> 
                                </div>
                                <div class="detail_third">
                                    <p>
                                        <span>运费</span>
                                        <span>满59包邮</span>
                                    </p>
                                    <p>
                                        <span>销量</span>
                                        <span>284310件</span>
                                    </p>
                                </div>
                                <div class="detail_fourth">
                                    <span>数量</span>
                                    <span class="detail_fourth_sub">-</span><input type="text" value="1" /><span class="detail_fourth_add">+</span>
                                    <span class="detail_kucun">库存:1464</span>
                                </div>
                                <div class="detail_fifth">
                                    <a class="detail_fifth_fir" href="javascript:;">
                                        立即购买
                                    </a>
                                    <a class="detail_fifth_sc" href="javascript:;">
                                        加入购物车
                                    </a>
                                    <a href="javascript:;">
                                        收藏
                                    </a>
                                </div>
                                <div class="detail_sixth">
                                    <span>服务</span>
                                    <span>✔</span>
                                    <span>正品保证</span>
                                    <span>✔</span>
                                    <span>七天无理由退货</span>
                                    <span>✔</span>
                                    <span>赠送33积分</span>
                                </div>
                            </div>
                            <div class="detail_bot_rt fr">
                                <div class="detail_bot_rt_top">
                                    <img src="" alt="" />
                                    <h2>博库体验店</h2>
                                    <a href="javascript:;">进入首页</a>
                                    <a href="javascript:;">一键开启</a>
                                </div>
                                <img src="../images/erweimaapp.png" height="258" width="220" alt="" />
                            </div>
                        </div>`
            }).join('');
            $('#detail>.detail').html(res);
        }
    })



    //加减数量
    $('.detail').on('click', '.detail_bot>.detail_bot_mid>.detail_fourth>.detail_fourth_sub', function() {
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
    $('.detail').on('click', '.detail_bot>.detail_bot_mid>.detail_fourth>.detail_fourth_add', function() {
        var val = $.trim($(this).prev().val());
        if (val >= 10) {
            $(this).css('color', '#ccc');
            val = 10;
        } else {
            $(this).css('color', '#696967');
            $.trim($(this).prev().val(val * 1 + 1));
        }
        $(this).prev().prev().css('color', '#696967');
    })



    //数量
    function carNum() {
        $.ajax({
            type: "get",
            url: "../api/shoppingcar.php",
            async: true,
            data: {
                check: 6
            },
            success: function(str) {
                var arr = JSON.parse(str);
                var totalnum = 0;
                for (var i = 0; i < arr.length; i++) {
                    totalnum += (arr[i]['num']) * 1;
                }
                $('.log_right span').eq(1).html(totalnum)
                    .css('background', 'red')
                    .css('color', '#fff');
            }
        });
    }


    //登录后才能的操作
    if (Cookie.get('username')) {
        //登录判断
        $('.header>.hdfirst>a').eq(0).html('欢迎,' + Cookie.get('username'));
        $('.header>.hdfirst>a').eq(1).html('退出登录');
        carNum();
        $('.header>.hdfirst>a').eq(1).on('click', function() {
            var time = new Date();
            time.setDate(time.getDate() - 1);
            Cookie.set('username', Cookie.get('username'), { 'expires': time, 'path': '/' });
            $('.header>.hdfirst>a').eq(0).html('登录');
            $(this).html('免费注册');
        });
    }else {
        $('.hdfirst a:first').click(function() {
            location.href = '../html/login.html';
        });
        $('.hdfirst a:last').click(function() {
            location.href = '../html/reg.html';
        });
    }


        //加入购物车
        $('.detail').on('click', '.detail_bot>.detail_bot_mid>.detail_fifth>.detail_fifth_sc', function() {
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
                    success: function(str) {
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
                                success: function(str) {
                                    carNum();
                                }
                            })
                            alert('添加商品成功!');
                        } else { //插入新数据
                            $.ajax({
                                type: "get",
                                url: '../api/shoppingcar.php',
                                async: true,
                                data: {
                                    'id': id,
                                    'num': val,
                                    'check': 2
                                },
                                success: function(str) {
                                    carNum();
                                }
                            })
                            alert('添加商品成功!');
                        }
                    }
                })
            } else {
                alert('客官,你还没有登录呢!!!')
            }

        })

        //跳转购物车页面
        $('.detail').on('click', '.detail_bot>.detail_bot_mid>.detail_fifth>.detail_fifth_fir', function() {
            if (Cookie.get('username')) {
                location.href = '../html/shoppingcar.html';
            } else {
                alert('大兄弟,你还没有登录呢!!!')
            }
        })
     








    //放大镜
    $('.detail').on('mousemove', '#myDiv .smallPic', function(e) {
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
    $('.detail').on('mouseleave', '#myDiv .smallPic', function() {
        $('#myDiv .float_lay').css({ display: 'none' });
        $('#myDiv .bigPic').css({ display: 'none' });
    })


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