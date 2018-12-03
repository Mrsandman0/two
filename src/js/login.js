/* 
* @Author: Marte
* @Date:   2018-11-26 21:45:36
* @Last Modified by:   Marte
* @Last Modified time: 2018-12-02 21:44:19
*/

$(function(){
    $('.login_head>ul>li>.login_head_num').html(randomNum());
    $('.login_head>ul>li:last>a').on('click',function(){
        location.href='../html/reg.html';
    })
    $('.login_head>ul>li>.login_head_change').on('click',function(){
        $('.login_head>ul>li>.login_head_num').html(randomNum());
    })
    $('.login_head>ul>li:eq(3)>a').on('click',function(){
        var val=$.trim($('.login_head>ul>li:eq(2)>input').val());
        var uname=$.trim($('.login_head>ul>li:eq(0)>input').val());
        var pwd=$.trim($('.login_head>ul>li:eq(1)>input').val());
        var val1=$.trim($('.login_head>ul>li>.login_head_num').html());
        console.log(val.toLowerCase())
        console.log(uname)
        console.log(pwd)
        console.log(val1.toLowerCase());
        if(val1.toLowerCase()==val.toLowerCase()){
            $.ajax({
                type: "post",
                url: "../api/login.php",
                async: true,
                data: {
                    'username': uname,
                    'password': pwd
                },
                success:function(str){
                    console.log(str)
                    if(str=='yes'){
                        var now = new Date();
                        now.setDate(now.getDate()+7);
                        Cookie.set('username',uname,{'expires':now,'path':'/'});//
                        location.href='../index.html';
                    }else{
                        $('.login_head>ul>li:eq(3)>p').html('用户名或密码错误');
                    }
                }
            })
        }else{
            $('.login_head>ul>li:eq(3)>p').html('您输入的验证码不一致');
        }
    })
});