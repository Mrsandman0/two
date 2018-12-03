<?php
/**
 * @Author: Marte
 * @Date:   2018-11-26 19:56:22
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-11-26 21:38:30
 */
include 'connect.php';
$name=isset($_POST['name']) ? $_POST['name'] : '';
$pwd=isset($_POST['password']) ? $_POST['password'] : '';
$sql="INSERT INTO userinf(uname,upwd) VALUES('$name','$pwd')";
$res=$conn->query($sql);//返回布尔值，插入成功返回true，否则返回false
    
    if($res){
        //注册成功返回yes否则返回no
        echo 'yes';
    }else{
        echo 'no';
    }
    // $res->close();
    //关闭数据库
    $conn->close();