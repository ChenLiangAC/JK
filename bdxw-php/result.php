<?php
//点击加载更多

//1.导入配置文件
        require("config.php");
//2.连接MYSQL，并选择数据库
        $link=@mysql_connect(HOST,USER,PASS) or die("数据库连接失败！");
        mysql_select_db(DBNAME,$link);
  
$page = intval($_GET['page']); //获取请求的页数 
$start = $page*18; 
$query=mysql_query("select * from news order by newsid  limit $start,18"); 
while ($row=mysql_fetch_array($query)) { 
  $arr[] = array( 
    'index-list-image'=>$row['newsimg'], 
    'index-list-main-title'=>$row['newstitle'], 
    'index-list-main-abs'=>$row['newscontent'],
    'tip-time'=>$row['addtime']
  ); 
} 
echo json_encode($arr);