<!-- 新闻后台管理系统登陆界面 -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>新闻管理后台登录</title>
    <link href="style/login.css" rel="stylesheet" type="text/css" />
    <link href="style/boost/bootstrap/bootstrap.min.css" rel="stylesheet">
    <link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
    <link rel="stylesheet" href="style/boost/bootstrap-checkbox.css">
</head>

<body class="bg1">
    <!-- 登录界面 -->
    <div class="login">
        <div class="log">
            <!-- 左侧欢迎界面 -->
            <div class="leftarea">
                <div class="welcomepage">
                    <div class="logo">
                        <a href="https://www.pinterest.com/">
                            <img src="img/log2.png" width="130" height="130">
                        </a>
                    </div>
                    <div class="welcometext">
                        <strong>欢迎</strong>
                        <h3>Welcome</h3>
                    </div>
                </div>
            </div>
            <!-- 右侧form表单 -->
            <div class="rightarea">
                <div class="infor">
                    <p>登录Login/注册SignUp</p>
                </div>
                <div class="inputinner">
                    <form class="form-horizontal"action ="logincheck.php" method="post">
                        <div class="form-group">
                            <!-- 用户名 -->
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="inputEmail3" placeholder="用户名/Usernamr" name="username">
                                <div class="input-group-addon"><i class="fa fa-user"></i></div>
                            </div>
                        </div>
                        <!-- 密码 -->
                        <div class="form-group">
                            <div class="col-sm-10">
                                <input type="password" class="form-control" id="inputPassword3" placeholder="密码/Password" name="userpwd">
                                <div class="input-group-addon"><i class="fa fa-key"></i></div>
                            </div>
                        </div>
                        <section class="controls">
                            <div class="checkbox check-transparent">
                                <input type="checkbox" value="1" id="remember" checked>
                                <label for="remember">记住我</label>
                            </div>
                            
                        </section>
                        <!-- 登录&注册按钮 -->
                        <div class="form-group">
                            <div class="col-sm-offset-2 col-sm-10">
                                <button type="sumbit" class="btn btn-danger" name="submit" value="登录/Login">登录/Login</button>
                                <a href="regsiter.php" class="btn btn-default">注册/SignUp</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
