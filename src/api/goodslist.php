<?php
/**
 * @Author: Marte
 * @Date:   2018-11-19 19:54:31
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-12-02 13:02:41
 */
    include 'connect.php';
    // $page=isset($_GET['page']) ? $_GET['page'] : '';
    // $qty=isset($_GET['qty']) ? $_GET['qty'] : '';
    // $index=($page-1)*$qty;
    // $sql="SELECT * FROM goodsinf limit $index,$qty";
    // $res=$conn->query($sql);//获取结果集
    // $sql2='select * from goodsinf';
    // $res2=$conn->query($sql2);
    // $row2=$res2->num_rows;

    // $data=$res->fetch_all(MYSQLI_ASSOC);//获取内容
    // $row=$res->num_rows;//获取结果集里的num_rows属性,也就是所有记录的条数
    // $goodslist=array(
    //     'total'=>$row2,
    //     'datalist'=>$data,
    //     'page'=>$page,
    //     'qty'=>$qty
    //     );
    // echo json_encode($goodslist,JSON_UNESCAPED_UNICODE);
    // $conn->close();//断开连接
    $check=isset($_GET['check']) ? $_GET['check'] : '';
    $page=isset($_GET['page']) ? $_GET['page'] : '';
    $qty=isset($_GET['qty']) ? $_GET['qty'] : '';
    $index=($page-1)*$qty;
    $sql2='select * from goodsinf';
    $res2=$conn->query($sql2);
    $row2=$res2->num_rows;
    if($check==1){
        $sql2='select * from headlist';
        $res2=$conn->query($sql2);
        $row2=$res2->num_rows;
        $data=$res2->fetch_all(MYSQLI_ASSOC);
    }
    if($check==2){ 
        $sql="SELECT * FROM goodsinf limit $index,$qty";
        $res=$conn->query($sql);//获取结果集
        $data=$res->fetch_all(MYSQLI_ASSOC);//获取内容
        $row=$res->num_rows;//获取结果集里的num_rows属性,也就是所有记录的条数
    }
    if($check==3){ 
        $sql="SELECT * FROM goodsinf ORDER BY gnewprice desc";
        // $sql1="SELECT * FROM goodsinf limit $index,$qty";
        $res=$conn->query($sql);//获取结果集
        $arr=$res->fetch_all(MYSQLI_ASSOC);//获取内容
        $row=$res->num_rows;//获取结果集里的num_rows属性,也就是所有记录的条数
        $data=array_slice($arr,$index,$qty);
        // var_dump($data);
    }
    if($check==4){ 
        $sql="SELECT * FROM goodsinf ORDER BY gnewprice asc";
        // $sql1="SELECT * FROM goodsinf limit $index,$qty";
        $res=$conn->query($sql);//获取结果集
        $arr=$res->fetch_all(MYSQLI_ASSOC);//获取内容
        $row=$res->num_rows;//获取结果集里的num_rows属性,也就是所有记录的条数
        $data=array_slice($arr,$index,$qty);
        // var_dump($data);
    }

    $goodslist=array(
            'total'=>$row2,
            'datalist'=>$data,
            'page'=>$page,
            'qty'=>$qty
            );
    
    echo json_encode($goodslist,JSON_UNESCAPED_UNICODE);
    $conn->close();//断开连接