/* 
 * @Author: Marte
 * @Date:   2018-11-29 15:34:38
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-11-30 15:17:45
 */

$(function() {
    // console.log(123);

    //退出登录
    if (Cookie.get('username')) {
        $('.header>.hdfirst>a').eq(0).html('欢迎,' + Cookie.get('username'));
        $('.header>.hdfirst>a').eq(1).html('退出登录');
        // carNum();
        $('.header>.hdfirst>a').eq(1).on('click', function() {
            var time = new Date();
            time.setDate(time.getDate() - 1);
            Cookie.set('username', Cookie.get('username'), { 'expires': time, 'path': '/' });
            $('.header>.hdfirst>a').eq(0).html('登录');
            $(this).html('免费注册');
        });
    } else {
        $('.hdfirst a:first').click(function() {
            location.href = '../html/login.html';
        });
        $('.hdfirst a:last').click(function() {
            location.href = '../html/reg.html';
        });
    }


    //数据渲染
    apply();

    function apply() {
        $.ajax({
            type: "get",
            url: '../api/shoppingcar.php',
            async: true,
            data: {
                'check': 4
            },
            success: function(str) {
                var arr = JSON.parse(str);
                var res = arr.map(function(item) {
                    return `<ul data-id="${item.gid}">
                            <li>
                                <input class="checkbox" type="checkbox" />
                            </li>
                            <li>
                                <img class="fl" src="${item.gpic}" alt="" />
                                <p class="fl">${item.gname}</p>
                            </li>
                            <li>
                               <del>¥${item.goldprice}</del>
                                <p>¥${item.gnewprice}</p>
                            </li>
                            <li>
                                <span class="shop_third_sub">-</span><input class="shop_third_val" style="text-align:center;" type="text" value="${item.num}" /><span class="shop_third_add">+</span>
                            </li>
                            <li>
                                <p>¥${item.totalprice}</p>
                            </li>
                            <li>
                                <p>移入收藏夹</p>
                                <span class="del">删除</span>
                            </li>
                        </ul>`
                }).join('');
                $('.shop>.shop_body>.shop_third').html(res);
                
            }
        })
    }



    function totalNum(){
        var checkedNum = $('.shop>.shop_body .shop_third>ul').size();
                var num = 0;
                var total = 0;
                for (var i = checkedNum - 1; i >= 0; i--) {
                    if ($('.shop>.shop_body .shop_third>ul').eq(i).find('input').prop('checked')) {
                        num += ($('.shop>.shop_body .shop_third>ul').eq(i).children('li').eq(3).find('input').val()) * 1;
                        total +=($('.shop>.shop_body .shop_third>ul').eq(i).children('li').eq(4).children('p').html().substring(1))*1;
                    }
                }
                $('.shop_foot>.shop_foot_sp1').html('已选&nbsp;'+num+'&nbsp;件');
                $('.shop_foot .shop_foot_p1>span').html(total.toFixed(2));
                $('.shop_foot .shop_foot_p2>span').eq(0).html(total.toFixed(2));
    }


    //减数量
    $('.shop>.shop_body>.shop_third').on('click', 'ul>li>.shop_third_sub', function() {
        var id = $(this).parent().parent().attr('data-id');
        if ($(this).next().val() <= 1) {
            $(this).next().val(1);
        } else {
            $(this).next().val($(this).next().val() * 1 - 1);
        }
        var val = $(this).next().val();
        var price = $(this).parent().prev().children('p').html().substring(1); //截取单价
        var total = (price * val).toFixed(2); //总价
        console.log(price);
        $(this).parent().next().children('p').html('¥' + total);
        $.ajax({
            type: "get",
            url: "../api/shoppingcar.php",
            async: true,
            data: {
                'id': id,
                'num': val,
                'check': 3
            }
        })
        totalNum();
    })

    //加数量
    $('.shop>.shop_body>.shop_third').on('click', 'ul>li>.shop_third_add', function() {
        var id = $(this).parent().parent().attr('data-id');
        if ($(this).prev().val() >= 10) {
            $(this).prev().val(10);
        } else {
            $(this).prev().val($(this).prev().val() * 1 + 1);
        }
        var val = $(this).prev().val();
        // console.log(val);
        var price = $(this).parent().prev().children('p').html().substring(1); //截取单价
        var total = (price * val).toFixed(2);
        console.log(price);
        $(this).parent().next().children('p').html('¥' + total);
        $.ajax({
            type: "get",
            url: "../api/shoppingcar.php",
            async: true,
            data: {
                'id': id,
                'num': val,
                'check': 3
            }
        })
        totalNum();
       // console.log(totalNum());
        // apply();
    })


    //删除单条记录
    $('.shop>.shop_body>.shop_third').on('click', 'ul>li .del', function() {
        var bool = confirm('亲,你确定不要臣妾了吗?');
        if (bool) {
            var id = $(this).parent().parent().attr('data-id');
            $.ajax({
                type: "get",
                url: "../api/shoppingcar.php",
                async: true,
                data: {
                    'id': id,
                    'check': 5
                }
            });
            $(this).parent().parent().remove();
            // console.log(123)
            // apply();
        }
        totalNum();
    })

    //全选
    var isok = true;
    $('.shop>.shop_foot>input').on('click', function() {

        if (isok) {
            // console.log($(this).prop('checked','checked'))
            // $(this).parent().siblings('div').children('input')
            $(this).prop('checked', 'checked');
            $(this).parent().siblings('div').find('input').prop('checked', 'checked');
        } else {
            $(this).removeAttr('checked', 'checked');
            $(this).parent().siblings('div').find('input').removeAttr('checked', 'checked');
        }
        isok = !isok;
        totalNum();
    })


    //删除多条数据
    $('.shop>.shop_foot>span').eq(2).on('click', function() {

        var bool = confirm('你就这么放弃我了吗?');
        if (bool) {
            //判断checked的条数并把id放到数组中去传给后端
            // console.log($('.shop>.shop_body .shop_third>ul').size());
            var arr = [];
            var num = 0;
            // var res = [];
            var checkedNum = $('.shop>.shop_body .shop_third>ul').size();
            console.log(checkedNum);
            for (var i = checkedNum - 1; i >= 0; i--) {
                if ($('.shop>.shop_body .shop_third>ul').eq(i).find('input').prop('checked')) {
                    id = $('.shop>.shop_body .shop_third>ul').eq(i).attr('data-id');
                    num += ($('.shop>.shop_body .shop_third>ul').eq(i).children('li').eq(3).find('input').val()) * 1;
                    // res.push(i);
                    $('.shop>.shop_body .shop_third>ul').eq(i).remove();
                    arr.push(id);
                }
            }
            console.log(num)
            for (var j = 0; j < arr.length; j++) {
                var gid = arr[j];
                console.log(gid)
                $.ajax({
                    type: "get",
                    url: "../api/shoppingcar.php",
                    async: true,
                    data: {
                        'id': gid,
                        'check': 5
                    }
                });
                console.log(gid)
            }
        }

        totalNum();

    });
   

    //单个勾选
     $('.shop>.shop_body>.shop_third').on('click', 'ul>li .checkbox',function(){
        totalNum();
        // console.log(123);
    })






});