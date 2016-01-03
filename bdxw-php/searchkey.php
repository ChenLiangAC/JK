<?php
if(!isset($_COOKIE["username"])){
    header("Content-type:text/html;charset=utf-8");

   
    echo "<script>alert('请先登录！');location.href = 'login.php' ;</script>";
    
         
}
/////////查询搜索新闻内容界面显示
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
                   <!--搜索框  -->
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                     <ul class="nav navbar-nav">
                            
                            <form class="navbar-form navbar-left" role="search" action="searchkey.php" method="get">
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


                    <li role="presentation" >
                        <a href="searchnews.php">
                            <i class="fa fa-bar-chart-o"></i>查看新闻内容
                        </a>
                    </li>
                    <li role="presentation" class="active">
                        <a href="searchnews.php">
                            <i class="fa fa-bar-chart-o"></i>查询新闻内容
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
                    <div class="infor newsdate">
                        <div class="row">
                        <!-- 查询新闻 -->
                            <div class="con-datashow">
                                <strong>查询新闻</strong>
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
                                                <th>新闻时间</th>
                                            </tr>
                                        </thead>
                                        <?php 
                                            require 'config.php';
                                            //2.连接MYSQL，选择数据库
                                            $link = @mysql_connect(HOST, USER, PASS) or die('数据库连接失败!');
                                            mysql_select_db(DBNAME, $link);

                                            $keyword=@$_GET['search'];
                                             
                                             $sql="select count(*) from news where newstitle like '%$keyword%' or newscontent like '%$keyword%'";
                                             $res=mysql_query($sql);
                                            
                                             $arr=mysql_fetch_assoc($res);
                                             while(list($key,$val)=each($arr)){
                                              $count = (int)$val; 
                                             }
                                             // 查询结果分页
                                             $pageSize=10;////一页显示10条信息
                                             $page=floor($count/$pageSize)+1;//总页数$page
                                             
                                            
                                             if(isset($_GET['page']))
                                             {
                                              
                                              if($_GET['page'] <=1){
                                               $currentPage = 1;
                                              }elseif ($_GET['page'] >= $page){
                                               $currentPage = $page-1;
                                              }else{
                                               $currentPage = $_GET['page'];
                                              }
                                             }else
                                             {
                                              $currentPage=1;
                                             }
                                             $start = ($currentPage-1)*$pageSize;
                                             $sql="select newsid,newstitle,newscontent,addtime from news where newstitle like '%$keyword%' or newscontent like '%$keyword%' limit $start,$pageSize";
                                            
                                             $re=mysql_query($sql);//执行sql语句
                                             while($arr=mysql_fetch_assoc($re)){
                                              ?> 

                                                <tbody>
                                                <tr>
                                               <td class="newsid"><?php echo $arr['newsid'];?></td>
                                               <input type="hidden" name="newsid" value="<?php echo $arr['newsid'];?>"/>
                                                <td class="newstitle"><?php echo $arr['newstitle'];?></td>
                                                <td class="newscontent"><?php echo $arr['newscontent'];?></td>
                                                <td class="newstime"><?php echo $arr['addtime'];?></td>
                                              
                                                <td class="lasttd">
                                                <a href='javascript:deletenews($arr['newsid'])'>删除</a>
                                                <a href='updatenews.php?newsid=$arr['newsid']'>修改</a></td>
                                            
                                            </tbody>
                                            
                                        <?php 
                                            }
                                           mysql_close();//关闭数据库
                                          ?>   
 

                                    </table>                                 
                                </form>


                            </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <!-- 分页显示 -->
                         <nav class="pagesshow">
                                    <ul class="pagination">
                                     
                                    <li >
                                       
                                
                                       <a href="searchkey.php?page=1&search=<?php echo $keyword?>" aria-label="Previous" >
                                            <!-- 返回第一页 -->
                                          <span aria-hidden="true">首页</span>
                                         </a>
                                          </li>
                                      <li >
                                      
                                    <!-- 向前一页 -->
                                       <a href="searchkey.php?<?php echo ($currentPage-1)?>&search=<?php echo $keyword?>" aria-label="Previous" >

                                          <span aria-hidden="true">&laquo;</span>
                                         </a>
                                           
                                        </li>
                                        <!-- 页码 -->
                                      <?php
                                         for ($i=1;$i<=$page;$i++) {  //循环显示出页面
                                                ?>
                                         <li>
                                         <a href="searchkey.php?page=<?php echo $i;?>" >
                                         <?php echo $i?></li>
                                       </a>
                                       
                                        <li>
                                         <?php
                                            }
                                            
                                            ?>
                                            <!-- 向后一页 -->
                                          <a href="searchkey.php?page=<?php echo ($currentPage+1)?>&search=<?php echo $keyword?>" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                          </a>
                                         
                                        </li>
                                        <!-- 最后一页 -->
                                         <li>
                                          <a href="searchkey.php?page=<?php echo $page?>&search=<?php echo $keyword?>" aria-label="Next">
                                            <span aria-hidden="true">尾页</span>
                                          </a>
                                         
                                        </li> 
                                          <li>
                                         <a href="#">
                                         <?php echo $count;?>条记录|
                                      当前第<?php  echo $page?>页</li>
                                     
                                           
                                                    
                                     </ul>
                                     </nav>  
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
