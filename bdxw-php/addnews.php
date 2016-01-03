<?php
if(!isset($_COOKIE["username"])){
    header("Content-type:text/html;charset=utf-8");

   
    echo "<script>alert('请先登录！');location.href = 'login.php' ;</script>";
    
         
}
////添加新闻信息的界面
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
                            <!-- 退出登录 -->
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
                    <li role="presentation" class="active">
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
                                      
                </ul>
            </div>
            <!-- 右侧主要信息显示 -->
            <div class="rightform">
                
               
                <div class="inforshow">
                    <div class="datashow infor">
                        <div class="row">
                        <!-- 增加新闻内容 -->
                            <div class="con-datashow">
                                <strong>增加新闻内容</strong>
                                <div class="controls">
                                   
                                </div>
                                <div class="ibox-content">
                                    <div id="morris-one-line-chart">
                                        <!-- 操作界面 -->
                                     <center>
            
                                     <form action = "newsaction.php?action=add" method="post">
                                            <table width="320" class="table table-hover addnews">

                                                <tr>
                                                    <td align="right">标题:</td>
                                                    <td><input type="text" name="newstitle"/></td>
                                                </tr>
                                                  <tr>
                                                    <td align="right">发布日期:</td>
                                                    <td><input type="date" name="addtime" placeholder ="如：2015-11-11"/></td>
                                                </tr>
                                                <tr>
                                                    <td align="right">图片:</td>

                                                    <td>

                                                    <input type="file" name="newsimg"/></td>
                                                </tr>
                                              
                                                <tr>
                                                    <td align="right" valign="top">新闻内容:</td>
                                                    <td><textarea cols="25" rows="5" name="newscontent"></textarea></td>
                                                </tr>
                                                <tr>
                                                    <td colspan="3" align="right" class="set-btn ">
                                                        <input type="submit" value="添加"/>&nbsp;&nbsp;
                                                        <input type="reset" value="重置"/>
                                                        
                                                        </td>
                                                </tr>

                                            </table>
                                        </form>
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
   
</body>

</html>
