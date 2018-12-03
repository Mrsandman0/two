<?php
/**
 * @Author: Marte
 * @Date:   2018-11-29 10:12:39
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-11-30 15:15:16
 */
include 'connect.php';
$id=isset($_GET['id'])?$_GET['id']:'';
$num=isset($_GET['num'])?$_GET['num']:'';
$check=isset($_GET['check'])?$_GET['check']:'';
//检查是否有该数据
if($check==1){
    $sql="SELECT * FROM shoppinginf WHERE gid='$id'";
    $res=$conn->query($sql);//返回布尔值，插入成功返回true，否则返回false
    // var_dump($res) ;
    if($res->num_rows>0){
        //num_rows存记录的条数，所有超过0就意味着存在
        //数据库存在该用户名
        echo 'yes';
    }else{
        echo 'no';
    }
}
//数据插入
if($check==2){
    $sql="SELECT * FROM goodsinf WHERE gid='$id'";
    // echo $sql;
    $res=$conn->query($sql);//获取结果集
    $data=$res->fetch_all(MYSQLI_ASSOC);//获取内容
    // var_dump($data)
    $gid=$data[0]['gid'];
    $gname=$data[0]['gname'];
    $goldprice=$data[0]['goldprice'];
    $gnewprice=$data[0]['gnewprice'];
    $totalprice=$data[0]['gnewprice']*$num;
    $gpic=$data[0]['gpic'];
    $sql1 = "INSERT INTO shoppinginf(gid,gname,num,goldprice,gnewprice,totalprice,gpic) 
                 VALUES( '$gid',
                        '$gname',
                        '$num',
                        '$goldprice',
                        '$gnewprice',
                        '$totalprice',
                        '$gpic'
                        )";
    $res=$conn->query($sql1);
}
//修改数量
if($check==3){
    $sql="SELECT * FROM goodsinf WHERE gid='$id'";
    // echo $sql;
    $res=$conn->query($sql);//获取结果集
    $data=$res->fetch_all(MYSQLI_ASSOC);//获取内容
    // var_dump($data)
    $gid=$data[0]['gid'];
    $gname=$data[0]['gname'];
    $goldprice=$data[0]['goldprice'];
    $gnewprice=$data[0]['gnewprice'];
    $totalprice=$data[0]['gnewprice']*$num;
    $gpic=$data[0]['gpic'];
    $sql1="update shoppinginf set num='$num',totalprice='$totalprice' where gid='$id'";
    $res=$conn->query($sql1);
    // echo $totalprice;
}
//渲染购物车
if($check==4){
    $sql="SELECT * FROM shoppinginf";
    $res=$conn->query($sql);
    $arr=$res->fetch_all(MYSQLI_ASSOC);
    echo json_encode($arr,JSON_UNESCAPED_UNICODE);
}
//删除数据
if($check==5){
    $sql="DELETE FROM shoppinginf WHERE gid='$id'";
    $res=$conn->query($sql);
    // echo $id;
}
//查询总商品数
if($check==6){
    $sql="SELECT num FROM shoppinginf ";
    $res=$conn->query($sql);
    $data=$res->fetch_all(MYSQLI_ASSOC);
    echo json_encode($data,JSON_UNESCAPED_UNICODE);
}
//跟新数量
if($check==7){
    $sql="SELECT * FROM goodsinf WHERE gid='$id'";
    // echo $sql;
    $res=$conn->query($sql);//获取结果集
    $data=$res->fetch_all(MYSQLI_ASSOC);//获取内容
    $sql2="SELECT * FROM shoppinginf WHERE gid='$id'";
    $res2=$conn->query($sql2);//获取结果集
    $data2=$res2->fetch_all(MYSQLI_ASSOC);//获取内容
    $num2=$data2[0]['num'];
    $num3=$num2+$num;
    // var_dump($data)
    // $gid=$data[0]['gid'];
    // $gname=$data[0]['gname'];
    // $goldprice=$data[0]['goldprice'];
    $gnewprice=$data[0]['gnewprice'];
    $totalprice=$data[0]['gnewprice']*$num3;
    // $gpic=$data[0]['gpic'];
    $sql1="update shoppinginf set num='$num3',totalprice='$totalprice' where gid='$id'";
    $res=$conn->query($sql1);
    // echo $totalprice;
}
$conn->close();