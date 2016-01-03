 <?php
 ////////登录验证，储存cookie，登出
 header("Content-type:text/html;charset=utf-8");


if(isset($_POST["submit"]) && $_POST["submit"] == "登录/Login")  
    {  
        $user = $_POST["username"];  
        $psw = $_POST["userpwd"];  
        if($user == "" || $psw == "")  
        {  
            echo "<script>alert('请输入用户名或密码！'); history.go(-1);</script>";  
        }  
        else  
        {  
            mysql_connect("localhost","root","root");  
            mysql_select_db("newdb");  
            mysql_query("setnames 'utf-8'");
            $url  =  "main.php" ;  
            $sql = "select username,userpwd from adminuser where username = '$_POST[username]' and userpwd = '$_POST[userpwd]'";  
            $result = mysql_query($sql);  
            $num = mysql_num_rows($result);  
            if($num)  
            {  
                $row = mysql_fetch_array($result);  //将数据以索引方式储存在数组中
                setcookie("username",$_POST["username"]);
	           echo " <script  language = 'javascript' type = 'text/javascript'> ";  
			   echo " window.location.href = '$url' ";  
			   echo " </script> ";  
                echo $row[0];  
            }  
            else  
            {  
                echo "<script>alert('用户名或密码不正确！');history.go(-1);</script>";  
            }  
        }  
       
    }  
    else  
    {  
        echo "<script>alert('提交未成功！'); history.go(-1);</script>";  
    }  
   if(@$_GET["action"]=="logout")
                {
                setcookie("username",$_POST["username"],time()-1);
                header("Location:login.php");
                }