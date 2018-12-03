<?php
/**
 * @Author: Marte
 * @Date:   2018-11-19 19:47:21
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-11-26 21:32:37
 */
    include 'connect.php';
    
    //接收数据
    $name=isset($_GET['phonenum']) ? $_GET['phonenum'] :'';
    $sql="select * from userinf where uname='$name'";
//  echo $name;//成功接收了
    
    //执行语句
    $res=$conn->query($sql);//返回布尔值，插入成功返回true，否则返回false
    // var_dump($res) ;
    if($res->num_rows>0){
        //num_rows存记录的条数，所有超过0就意味着存在
        //数据库存在该用户名
        echo 'yes';
    }else{
        echo 'no';
    }
     $res->close();//关掉结果集
    //关闭数据库
    $conn->close();
?>