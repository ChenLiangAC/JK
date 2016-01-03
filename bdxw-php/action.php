<?php
//这是用户管理的增、删和改操作的处理页面

//导入配置文件
        require("config.php");
//连接MYSQL，并选择数据库
        $link=@mysql_connect(HOST,USER,PASS) or die("数据库连接失败！");
        mysql_select_db(DBNAME,$link);

//根据需要action值，来判断所属操作，执行对应的代码
    switch($_GET["action"])
    {

        case "del": //执行删除操作
                //1.获取要删除的id号
                $id=$_GET['userid'];
                //2.拼装删除sql语句，并执行删除操作
                $sql = "delete from adminuser where userid={$id}";
                mysql_query($sql,$link);
                
                //3.自动跳转到浏览新闻页面
                header("Location:userlist.php");
            break;
        case "update": //执行添加操作
            //1.获取要修改的信息
            $username = $_POST['username'];
            $userpwd = $_POST['userpwd'];
           
            $id = $_POST['userid'];
            //2.过滤要修改的信息（省略）
            
            //3.拼装修改sql语句，并执行修改操作
            $sql = "update adminuser set username='{$username}',userpwd='{$userpwd}' where userid = {$id} ";
            
            mysql_query($sql,$link);
            //4.跳转回浏览界面
            header("Location:userlist.php");
            break;
    }
//4.关闭数据库连接
    mysql_close($link);
    
?>
