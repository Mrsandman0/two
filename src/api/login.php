<?php
/**
 * @Author: Marte
 * @Date:   2018-11-19 19:52:39
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-11-26 22:35:07
 */
    include 'connect.php';
    
    //接收数据
    $name=isset($_POST['username']) ? $_POST['username'] : '13222222222';
    $psw=isset($_POST['password']) ? $_POST['password'] : 'q123456789';
    
    //写查询语句
    $sql="SELECT * FROM userinf WHERE uname='$name' and upwd='$psw'";
    
    //执行：内部编译
    $res=$conn->query($sql);//结果集
    
 // var_dump($res);
    
    if($res->num_rows>0){
        echo 'yes';//用户名密码都正确，可以登陆
    }else{
        echo 'no';//不正确，不可以登陆
    }

    $res->close();//关掉结果集
    $conn->close();//断开连接