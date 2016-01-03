<?php
if(!isset($_COOKIE["username"])){
    header("Content-type:text/html;charset=utf-8");

   
    echo "<script>alert('请先登录！');location.href = 'login.php' ;</script>";
    
         
}
//////////新闻后台管理系统首页系统信息显示界面
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
<!-- 首页 -->
    <div class="home">
        <div class="homepage">
        <!-- 顶部用户信息 -->
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" >
                           </button>
                        <a class="navbar-brand" href="#">新闻后台管理系统
                        
                        </a>
                    </div>
                    <!-- 搜索框 -->
                    
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
                            if(@$_COOKIE["username"]){
                                echo $_COOKIE['username'];
                            }
                            
                            ?>
                                <span class="caret"></span>
                                </a>
                               
                            </li>
                            <!-- 即时信息 -->
                            <li class="last"><a href="logincheck.php?action=logout">退出</a>
                            </li>
                        </ul>
                    </div>
                    
                </div>
               
            </nav>
            <!-- 左侧导航栏 -->
            <div class="leftlist">
                <ul class="nav nav-pills nav-stacked">
                    <li role="presentation" class="active">
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
                     <li role="presentation">
                        <a href="userlist.php">
                            <i class="fa fa-bar-chart-o"></i>用户管理
                        </a>
                    </li>
                    
                    
                    <!-- 图标显示 -->
                    
                </ul>
            </div>
            <!-- 右侧主要信息表格显示 -->
            <div class="rightform">
                
                <!-- 主要部分数据显示 -->
                <div class="inforshow">
                    <div class="datashow infor">
                        <div class="row">
                        <!-- 系统显示 -->
                            <div class="con-datashow">
                                <strong>系统信息</strong>
                                <div class="controls">
                                   
                                </div>
                                <div class="ibox-content">
                                    <div id="morris-one-line-chart">
                                        <center>
    
                                            <table width="100%" border="2" bordercolor="#cccccc" cellpadding="5" cellspacing="0" class="infor-sys">
                                                <tr>
                                                    <th>操作系统</th>
                                                    <td><?php echo PHP_OS;?></td>
                                                </tr>
                                                <tr>
                                                    <th>Apache版本</th>
                                                    <td><?php echo apache_get_version();?></td>
                                                </tr>
                                                <tr>
                                                    <th>PHP版本</th>
                                                    <td><?php echo PHP_VERSION;?></td>
                                                </tr>
                                                <tr>
                                                    <th>运行方式</th>
                                                    <td><?php echo PHP_SAPI;?></td>
                                                </tr>
                                            </table>

                                        </center>

                                        
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
    </div>
    </div>
    <!-- 图表js引用 -->
    <script src="js/plugins/morris/raphael-2.1.0.min.js"></script>
</body>

</html>
