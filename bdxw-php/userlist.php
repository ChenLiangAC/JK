<?php
if(!isset($_COOKIE["username"])){
    header("Content-type:text/html;charset=utf-8");

   
    echo "<script>alert('请先登录！');location.href = 'login.php' ;</script>";
    
         
}
// 查看用户列表界面显示
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>新闻后台管理系统</title>
    <link href="style/main.css" rel="stylesheet" type="text/css" />
    <link href="style/boost/bootstrap/bootstrap.min.css" rel="stylesheet">
    <link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
    <link rel="stylesheet" href="style/boost/bootstrap-checkbox.css">
</head>

<body class="bg1">

    <div class="home">
        <div class="homepage">
        <!-- 顶部用户信息，搜索 -->
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" >
                           </button>
                        <a class="navbar-brand" href="#">新闻后台管理系统
                        
                        </a>
                    </div>
                    
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                       
                        <ul class="nav navbar-nav navbar-right">
                            <li>
                                <a href="#"> <i class="fa fa-tasks"></i>
                                    </a>
                            </li>
                            <li><a href="#"><i class="fa fa-envelope"></i>
                                    
                                </a>
                            </li>
                            <!-- 用户信息 -->
                            <li class="dropdown">
                                <div class="photo"><img src="img/photo.jpg" alt="这是头像" width="45" height="45" /></div>
                                <a href="#" class="dropdown-toggle">
                            <?php 
								if (@$_COOKIE['username']) {
								    echo $_COOKIE['username'];
								}
								?>
                                <span class="caret"></span>
                                </a>
                               
                            </li>
                            <!-- 登出 -->
                            <li class="last"><a href="login.php?action ='logout'">退出</a>
                            </li>
                        </ul>
                    </div>
                    
                </div>
               
            </nav>
            <!-- 左侧导航栏 -->
                        <div class="leftlist">
                <ul class="nav nav-pills nav-stacked">
                    <li role="presentation" >
                        <a href="main.php">
                            <i class="fa fa-tachometer"></i>首页
                        </a>
                    </li>
                    <li role="presentation">
                        <a href="addnews.php">
                            <i class="fa fa-pencil"></i>增加新闻内容
                        </a>
                    </li>


                    <li role="presentation">
                        <a href="searchnews.php">
                            <i class="fa fa-bar-chart-o"></i>查看新闻内容
                        </a>
                    </li>
                     <li role="presentation " class="active">
                        <a href="userlist.php">
                            <i class="fa fa-bar-chart-o"></i>用户管理
                        </a>
                    </li>
                 
                </ul>
            </div>
           
            <div class="rightform">
              <div class="inforshow">
                    
                    <!-- 用户数据列表 -->
                    <div class="message infor">
                        <div class="newmessage">
                            <strong>用户列表</strong>
                            <div class="controls">
                               
                            </div>
                            <div class="messagetable">
                                <form>
                                    <table class="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th></th>
                                                <th>用户</th>
                                                
                                            </tr>
                                        </thead>
                                        <?php 
                                            require 'config.php';
                                            //2.连接MYSQL，选择数据库
                                            $link = @mysql_connect(HOST, USER, PASS) or die('数据库连接失败!');
                                            mysql_select_db(DBNAME, $link);
                                            //3.执行查询，并返回结果集
                                            $sql = 'select * from adminuser order by userid ';
                                            $result = mysql_query($sql, $link);
                                            //4.解析结果集，并遍历
                                            while ($row = mysql_fetch_assoc($result)) {
                                                echo '<tbody>';
                                                echo '<tr>';
                                                echo "<td>{$row['userid']}</td>";
                                                echo '<td></td>';
                                                echo "<td>{$row['username']}</td>";
                                                echo "<td>
                                                <a href='javascript:dodel({$row['userid']})'>删除</a>
                                                <a href='edit.php?userid={$row['userid']}'>修改</a></td>";
                                            }
                                            echo '</tbody>';
                                                //5.释放结果集
                                                mysql_free_result($result);
                                                mysql_close($link);
                                            ?>
                                    </table>
                                </form>
                            </div>
                        </div>
                    </div>
                            
                </div>
            </div>
     
        </div>
    </div>
    </div>
    </div>
    </div>
   
<script type="text/javascript" src="js/delete.js"></script>
</body>

</html>
