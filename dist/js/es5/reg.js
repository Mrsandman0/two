'use strict';

/* 
 * @Author: Marte
 * @Date:   2018-11-26 16:43:24
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-11-30 14:48:31
 */

$(function () {
    var $num = $('#phonenum');
    var $val = $('#yzm');
    var $yzm = $('.reg_body .yzm');
    // 用户名验证
    var isok1 = false;
    $num.on('blur', function () {
        var num = $.trim($num.val());
        console.log(num);
        if (checkReg.tel(num) && num) {
            $.ajax({
                type: "get",
                url: "../api/check.php",
                async: true,
                data: {
                    'phonenum': num
                },
                success: function success(str) {
                    console.log(str);
                    if (str == 'yes') {
                        $('#text').html('电话号码已被注册');
                    } else {
                        $('#text').html('电话号码可用');
                        $('#text').css('color', 'green');
                        isok1 = true;
                    }
                }
            });
        } else {
            $('#text').html('您输入的号码格式不正确!');
        }
    });
    // 验证码验证
    $yzm.html(randomNum());
    var isok2 = false;
    $('#yzm').on('blur', function () {
        var val = $.trim($('#yzm').val());
        // console.log($.trim($('.yzm').html()));
        if ($.trim($('.yzm').html()).toLowerCase() == val.toLowerCase()) {
            isok2 = true;
            $('#text').html('您输入的验证码一致!');
            $('#text').css('color', 'green');
        } else {
            $('#text').html('您输入的验证码不正确!');
        }
    });

    //刷新验证码
    $('.reg_body .slur').on('click', function () {
        $yzm.html(randomNum());
    });

    //密码验证
    var isok3 = false;
    $('#pwd').on('blur', function () {
        var val = $.trim($('#pwd').val());
        if (checkReg.psweasy(val) && val) {
            isok3 = true;
            $('#text').html('您输入的密码格式正确!');
            $('#text').css('color', 'green');
        } else {
            $('#text').html('您输入的密码格式不正确!');
        }
    });

    //密码再次验证
    var isok4 = false;
    $('#pwdagain').on('blur', function () {
        var val = $.trim($('#pwdagain').val());
        console.log(val);
        var val1 = $.trim($('#pwd').val());
        if (checkReg.psweasy(val) && val && val === val1) {
            isok4 = true;
            $('#text').html('您输入的密码一致!');
            $('#text').css('color', 'green');
        } else {
            $('#text').html('您输入的密码不一致!');
        }
    });

    //注册
    $('.reg_body>ul>li:last>a').on('click', function () {
        if (isok1 && isok2 && isok3 && isok4) {
            var uname = $.trim($num.val());
            console.log(uname + "a");
            var pwd = $.trim($('#pwd').val());
            console.log(pwd + "a");
            $.ajax({
                type: "post",
                url: "../api/reg.php",
                async: true,
                data: {
                    'name': uname,
                    'password': pwd
                },
                success: function success(str) {
                    if (str == 'yes') {
                        $('#text').html('注册成功,请稍等');
                        $('#text').css('color', 'green');
                        setTimeout(function () {
                            location.href = '../html/login.html';
                        }, 2000);

                        // console.log(uname+"b")
                    } else {
                        $('#text').html('注册失败');
                    }
                }
            });
        } else {
            $('#text').html('请检查你的内容是否填写完整');
        }
    });
});