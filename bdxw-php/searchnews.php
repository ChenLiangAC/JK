<?php
if(!isset($_COOKIE["username"])){
    header("Content-type:text/html;charset=utf-8");

   
    echo "<script>alert('请先登录！');location.href = 'login.php' ;</script>";
    
         
}
// 查看新闻界面
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
        <!-- 顶部用户信息 -->
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" >
                           </button>
                        <a class="navbar-brand" href="#">新闻后台管理系统
                        
                        </a>
                    </div>
                    <!-- 查询搜索框 -->
                    
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav">
                            
                            <form class="navbar-form navbar-left" role="search" action="searchkey.php" method="post">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="搜索/Search..." name="search"/>
                                    <button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
                                </div>
                            </form>
                        </ul>
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


                    <li role="presentation" class="active">
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
           
            <div class="rightform">
                
             
                <div class="inforshow">
                    <div class="infor newsdate">
                        <div class="row">
                        <!-- 查看已添加新闻 -->
                            <div class="con-datashow">
                                <strong>查看已添加新闻</strong>
                                <div class="controls">
                                    
                                </div>
                                <div class="ibox-content">
                                    <div id="morris-one-line-chart">
                                <div class="messagetable newstable">
                                <form>
                                    <table class="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>新闻标题</th>
                                                <th>新闻内容</th>
                                                <th>新闻图片</th>
                                                <th>新闻时间</th>
                                            </tr>
                                        </thead>
                                        <!-- 已添加新闻显示 -->
                                        <?php 
                                            require 'config.php';
                                            //2.连接MYSQL，选择数据库
                                            $link = @mysql_connect(HOST, USER, PASS) or die('数据库连接失败!');
                                            mysql_select_db(DBNAME, $link);
                                            $perNumber=10; //每页显示的记录数
                                            @$page=$_GET['page']; //获得当前的页面值
                                            $count=mysql_query("select count(*) from news"); //获得记录总数
                                            $rs=mysql_fetch_array($count); 
                                            $totalNumber=$rs[0];
                                            $totalPage=ceil($totalNumber/$perNumber); //计算出总页数
                                            if (!isset($page)) {
                                             $page=1;
                                            } //如果没有值,则赋值1
                                            $startCount=($page-1)*$perNumber; //分页开始,根据此方法计算出开始的记录

                                            $result=mysql_query("select * from news limit $startCount,$perNumber"); //根据前面的计算出开始的记录和记录数
                                            //3.执行查询，并返回结果集
                                            ///$sql = 'select * from news order by newsid ';
                                           /// $result = mysql_query($sql, $link);
                                            //4.解析结果集，并遍历
                                            while ($row=mysql_fetch_array($result)) {
                                                echo '<tbody>';
                                                echo '<tr>';
                                                echo "<td class='newsid'>$row[0]</td>";
                                                echo "<td>$row[1]</td>";
                                                echo "<td class='newsimg'>$row[2]</td>";
                                                echo "<td>$row[3]</td>";
                                                echo "<td>$row[4]</td>";
                                                echo "<td class='lasttd'>
                                                <a href='javascript:deletenews($row[0])'>删除</a>
                                                <a href='updatenews.php?newsid=$row[0]'>修改</a></td>";
                                            }
                                            echo '</tbody>';
                                            
                                  
                               echo "</form>"; 


                            echo  "</div>";
                                        
                                   echo "</div>";
                                echo "</div>";
                            echo "</div>";
                          
                                   echo '<nav class="pagesshow">';
                                     echo '<ul class="pagination">';
                                      echo ' <li >';
                                      ?>
                                      <!-- 向前一页 -->
                                      <?php
                                      if ($page != 1) { //页数不等于1
                                        ?>
                                       <a href="searchnews.php?page= <?php echo $page - 1;?>" aria-label="Previous" >

                                          <span aria-hidden="true">&laquo;</span>
                                         </a>
                                          
                                           <?php 
                                       echo' </li>';
                                      
                                         
                                                }
                                                for ($i=1;$i<=$totalPage;$i++) {  //循环显示出页面
                                                ?>
                                                <!-- 页码显示 -->
                                        <li ><a href="searchnews.php?page=<?php echo $i;?>" name = page ><?php echo $i ;?></a></li>
                                       <?php
                                            }
                                            if ($page<$totalPage) { //如果page小于总页数,显示下一页链接
                                            ?>
                                            <!-- 向后一页 -->
                                        <li>
                                          <a href="searchnews.php?page=<?php echo $page + 1;?>" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                          </a>
                                         
                                        </li> 
                                        <?php
                                                    } 
                                                    //5.释放结果集
                                           
                                                    
                                      echo '</ul>';
                                     echo '</nav>';
                                    echo '</table>';
                                    ?>

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
