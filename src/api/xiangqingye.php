<?php
/**
 * @Author: Marte
 * @Date:   2018-11-27 19:34:00
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-11-27 19:46:16
 */
    include 'connect.php';
    $check=isset($_GET['check']) ? $_GET['check'] : '';
    if($check==1){
        $id=isset($_GET['list']) ? $_GET['list'] : '';
        $sql="SELECT * FROM goodsinf where gid='$id'";
    }
    $res=$conn->query($sql);//获取结果集
    $data=$res->fetch_all(MYSQLI_ASSOC);//获取内容



     $goodslist=array(
        'datalist'=>$data
        );
    echo json_encode($goodslist,JSON_UNESCAPED_UNICODE);