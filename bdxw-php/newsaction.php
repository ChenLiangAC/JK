<?php
header("Content-type:text/html;charset=utf-8");
//这是新闻内容的增、删和改操作的处理页面

//1.导入配置文件
        require("config.php");
//2.连接MYSQL，并选择数据库
        $link=@mysql_connect(HOST,USER,PASS) or die("数据库连接失败！");
        mysql_select_db(DBNAME,$link);

//3.根据需要action值，来判断所属操作，执行对应的代码
    switch($_GET["action"])
    {
        case "add": //执行添加操作
            //1.获取要添加的信息，并补充其他信息
                $newstitle = $_POST["newstitle"];
                $newsimg = @$_POST["newsimg"];
                $newscontent = $_POST["newscontent"];
                $addtime = $_POST["addtime"];
            //2.座信息过滤（省略）
            //3.拼装添加SQL语句，并执行添加操作
                $sql = "insert into news values(null,'{$newstitle}','{$newsimg}','{$newscontent}','{$addtime}')";
                mysql_query($sql,$link);
            //4.判断是否成功
                $id=mysql_insert_id($link);//获取刚刚添加信息的自增id号值
                if($id>0)
                {
                    echo "<h3>新闻信息添加成功！</h3>";
                }else
                {
                    echo "<h3>新闻信息添加失败！</h3>";
                    header("Location:updatenews.php");
                }
                echo "<a href='javascript:window.history.back();'>返回</a>&nbsp;&nbsp;";
                echo "<a href='searchnews.php'>浏览新闻</a>";
            break;
        case "del": //执行删除操作
                //1.获取要删除的id号
                $id=$_GET['newsid'];
                //2.拼装删除sql语句，并执行删除操作
                $sql = "delete from news where newsid={$id}";
                mysql_query($sql,$link);
                
                //3.自动跳转到浏览新闻页面
                header("Location:searchnews.php");
            break;
        case "update": //执行添加操作
            //1.获取要修改的信息
            $newstitle = $_POST['newstitle'];
            $newscontent = $_POST['newscontent'];
            $newsimg = $_POST['newsimg'];
            $addtime = $_POST['addtime'];
            $newsid = $_POST['newsid'];
            //2.过滤要修改的信息（省略）
            
            //3.拼装修改sql语句，并执行修改操作
            $sql = "update news set newstitle='{$newstitle}',newsimg='{$newsimg}',newscontent='{$newscontent}',addtime='{$addtime}' where newsid = {$newsid} ";
            
            mysql_query($sql,$link);
            //4.跳转回浏览界面
            header("Location:searchnews.php");
            break;
    }
//4.关闭数据库连接
    mysql_close($link);
    


