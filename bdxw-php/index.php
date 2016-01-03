<!-- php百度新闻显示界面 -->
<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>百度新闻</title>
    <link rel="stylesheet" type="text/css" href="style/index.css">
</head>

<body>
    <!-- 总框架 -->
    <div class="wrap">
    <!-- 返回顶部 -->
        <div class="go-top">
            <span>&nbsp;</span>
        </div>
        <div class="main-view">
            <header>
                <div class="tools-bar">
                    <div class="tools-left">
                        <div data-href="http://m.baidu.com/?from=1000376a" class="tools-bar-btn btn-bd"></div>
                        <div class="tools-bar-btn btn-userhome"></div>
                    </div>
                    <div class="tools-right">
                        <div class="tools-bar-btn btn-search"></div>
                        <div class="tools-bar-btn btn-sub"></div>
                    </div>
                </div>
            </header>
            <!-- 主要内容 -->
            <div class="main-content">
                <div class="main-list">
                    <div class="line"></div>
                    <!-- 导航栏 -->
                    <div class="content">
                        <table>
                            <tbody>
                                <tr>
                                    <td colspan="1" >
                                        <div>
                                            <b></b>
                                            <span class="cur tit">推荐</span>   
                                        </div>
                                    </td>
                                    <td colspan="1">
                                        <div>
                                            <b></b>
                                            <span class="tit">百家</span>
                                        </div>
                                    </td>
                                    <td colspan="1">
                                        <div>
                                            <b></b>
                                            <span class="tit">本地</span>
                                        </div>
                                    </td>
         
                                    <td colspan="1">
                                        <div>
                                            <b></b>
                                            <span class="tit">娱乐</span>
                                        </div>
                                    </td>
                                    
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
                <!-- 图片轮播 -->
                <div class="main-sections">

                    <div class="inedx-view-subpage ">
                        <div class="topic-con">
                            <div class="topic-gallery line-icon">
                                <div class="g-list">
                                    <div class="g-item">
                                        <div class="g-item-innerbox">
                                            <div class="g-imagebox">
                                                <img src="images/timg">
                                            </div>
                                            <h4 class="g-title">
            								<span>马里遭袭酒店内部血迹斑斑</span>
            							</h4>
                                        </div>
                                    </div>
                                    <div class="g-item">
                                        <div class="g-item-innerbox">
                                            <div class="g-imagebox">
                                                <img src="images/timg2">
                                            </div>
                                            <h4 class="g-title">
            								<span>湖北现27座古墓 墓主非富即贵</span>
            							</h4>
                                        </div>
                                    </div>
                                    <div class="g-item">
                                        <div class="g-item-innerbox">
                                            <div class="g-imagebox">
                                                <img src="images/timg3">
                                            </div>
                                            <h4 class="g-title">
            								<span>北京老人楼顶自建5层空中花园</span>
            							</h4>
                                        </div>
                                    </div>
                                    <div class="g-item">
                                        <div class="g-item-innerbox">
                                            <div class="g-imagebox">
                                                <img src="images/timg4.jpg">
                                            </div>
                                            <h4 class="g-title">
            								<span>用百度钱包支付，单单返现金1%起</span>
            							</h4>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="g-icons">
                                    <i class="cur"></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </div>
                            </div>
                        </div>
                        <!-- 热点轮播新闻 -->
                        <div class="hotword">
                            <div class="hotword-left">
                                <span>热点</span>
                            </div>
                            <ul class="hotwork-content">
                                <li class="hotword-item">
                                    <span>外地车禁上北京二环</span>
                                    <b class="hotword-item-right"></b>
                                </li>
                                <li class="hotword-item">
                                    <span>美团阿里开撕</span>
                                    <b class="hotword-item-right"></b>
                                </li>
                                <li class="hotword-item">
                                    <span>章子怡被曝已婚</span>
                                    <b class="hotword-item-right"></b>
                                </li>
                                <li class="hotword-item">
                                    <span>人社部回应延迟退休</span>
                                    <b class="hotword-item-right"></b>
                                </li>
                                <li class="hotword-item">
                                    <span>广州2.1亿豪宅</span>
                                    <b class="hotword-item-right"></b>
                                </li>
                            </ul>
                        </div>
                        <!-- 新闻内容显示 -->
                              <div class='inedx-view-subpage-feed'>
                        <div class='index-list'>
                         <?php 
                    //1.导入配置文件
                        require("config.php");
                    //2.连接MYSQL，选择数据库
                        $link = @mysql_connect(HOST,USER,PASS) or die("数据库连接失败!");
                        mysql_select_db(DBNAME,$link);
                    //3.执行查询，并返回结果集
                        $sql = "select * from news order by newsid limit 0,18";
                        $result = mysql_query($sql,$link);
                    
                    //4.解析结果集，并遍历
                        while($row = mysql_fetch_array($result))
                        {

                      

                
                               echo "<div class='index-list-item'>";
                                 echo   "<div class='index-list-main'>";
                                    echo    "<div class='index-list-image'>
                                            <i class='videoplay'>
                        						<img src='images/{$row['newsimg']}'>
                        					</i>
                                        </div>";
                                      echo  "<div class='index-list-main-text'>
                                            <div class='index-list-main-title'>
                                            	{$row['newstitle']}
                                            </div>
                                            <div class='index-list-main-abs'>
                                            	{$row['newscontent']}
                                            </div>
                                        </div>";
                                      echo  "<div class='index-list-bottom'>
                                            <div class='index-list-main-time'>
                                                <b class='tip-reason tip-fillred'>网易头条</b>
                                                <b class='index-list-main-site'>新华网</b>
                                                <b class='tip-time'>{$row['addtime']}</b>
                                            </div>
                                        </div>";
                                 echo  "</div>";
                               echo "</div>";              }
                     //5.释放结果集
                        mysql_free_result($result);
                        mysql_close($link);
                ?>
                            </div>
                           
                      </div>
            
                 <div class='refresh-wrap'>
                              <div class='refresh'>点击加载更多</div>  
                            </div>
                    </div>
                    
                </div>
            </div>
            <!-- 底部信息 -->
            <div class="index-footer">
                <div class="footer">
                    <div class="item-wrap">
                        <div class="item feedback">意见反馈</div>
                    </div>
                    <div class="item-wrap">
                        <div class="item app-recommend">应用推荐</div>
                    </div>
                    <div class="item-wrap">
                        <div class="item app-download">客户端</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="js/index.js"></script>
</body>

</html>
