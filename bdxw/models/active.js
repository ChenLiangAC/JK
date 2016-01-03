var mysql = require('mysql');
var DB_NAME = 'newsdb';

var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root'
});

pool.on('connection', function(connection) {
    connection.query('SET SESSION auto_increment_increment=1');
});

function infor(user) {
    this.userid = user.userid;
    this.username = user.username;
    this.userpwd = user.userpwd;
    this.newsid = user.newsid;
    this.newstitle = user.newstitle;
    this.newsimg = user.newsimg;
    this.newscontent = user.newscontent;
    this.addtime = user.addtime;
};


module.exports = infor;

pool.getConnection(function(err, connection) {

    var useDbSql = "USE " + DB_NAME;

    connection.query(useDbSql, function(err) {
        if (err) {
            console.log("USE Error: " + err.message);

            return;
        }
        console.log('USE succeed');

    });

    //保存数据
    infor.prototype.save = function save(callback) {
        var user = {
            username: this.username,
            userpwd: this.userpwd
        };

        var insertUser_Sql = "INSERT INTO adminuser(userid,username,userpwd) VALUES(0,?,?)";

        connection.query(insertUser_Sql, [user.username, user.userpwd], function(err, result) {
            if (err) {
                console.log("insertUser_Sql Error: " + err.message);
                return;
            }

            /////connection.release();

            console.log("invoked[save]");
            callback(err, result);
        });
    };

    //根据用户名得到用户数量
    infor.getUserNumByName = function getUserNumByName(username, callback) {

        var getUserNumByName_Sql = "SELECT COUNT(1) AS num FROM adminuser WHERE username = ?";

        connection.query(getUserNumByName_Sql, [username], function(err, result) {
            if (err) {
                console.log("getUserNumByName Error: " + err.message);
                return;
            }

            ///connection.release();

            console.log("invoked[getUserNumByName]");
            callback(err, result);
        });
    };

    //根据用户名得到用户信息
    infor.getUserByUserName = function getUserByUserName(username, callback) {

        var getUserByUserName_Sql = "SELECT * FROM adminuser WHERE username = ?";

        connection.query(getUserByUserName_Sql, [username], function(err, result) {
            if (err) {
                console.log("getUserByUserName Error: " + err.message);
                return;
            }

            ///connection.release();

            console.log("invoked[getUserByUserName]");
            callback(err, result);
        });
    };
    ///////查询用户
    infor.searchUser = function searchUser(userid, callback) {

        var searchUser_Sql = "SELECT * FROM adminuser WHERE userid = ?";

        connection.query(searchUser_Sql, [userid], function(err, result) {
            if (err) {
                console.log("searchUser Error: " + err.message);
                return;
            }

            ///connection.release();

            console.log("invoked[searchUser]");
            callback(err, result);
        });
    };
    /////////更新用户信息
    infor.updateUser = function updateUser(username, userpwd, userid, callback) {

        var updateUser_Sql = "UPDATE  adminuser SET username = ?,userpwd = ? WHERE userid = ?";

        connection.query(updateUser_Sql, [username, userpwd, +userid], function(err, result) {
            if (err) {
                console.log("updateUser Error: " + err.message);
                return;
            }

            ///connection.release();

            console.log("invoked[updateUser]");
            callback(err, result);
        });
    };
    /////删除用户
    infor.deleteUser = function deleteUser(userid, callback) {
        /// var id = req.query.userid_;
        var deleteUser_Sql = "DELETE  FROM adminuser WHERE userid = ?";

        connection.query(deleteUser_Sql, [userid], function(err, result) {
            if (err) {
                console.log("deleteUser Error: " + err.message);
                return;
            }


            ////console.log("删除成功");



            ///connection.release();

            console.log("invoked[deleteUserByUserId]");
            callback(null);
        });
    };
    /////////查看用户
    infor.getUser = function getUser(callback) {

        var getUser_Sql = "SELECT * FROM adminuser ";

        var arr = [];
        connection.query(getUser_Sql, function(err, result) {
            if (err) {
                console.log("getUser Error: " + err.message);
                return;
            }

            ///connection.release();

            console.log("invoked[getUser]");
            callback(err, result);
        });
    };
    /////保存新闻数据
    infor.prototype.savenews = function savenews(callback) {

        var newsinfor = {
            newstitle: this.newstitle,
            newsimg: this.newsimg,
            newscontent: this.newscontent,
            addtime: this.addtime
        };

        var insertNews_Sql = "INSERT INTO news(newsid,newstitle,newsimg,newscontent,addtime) VALUES(0,?,?,?,?)";

        connection.query(insertNews_Sql, [newsinfor.newstitle, newsinfor.newsimg, newsinfor.newscontent, newsinfor.addtime], function(err, result) {
            if (err) {
                console.log("insertNews_Sql Error: " + err.message);
                return;
            }

            /////connection.release();

            console.log("invoked[Newssave]");
            callback(err, result);
        });
    };
    ////////查看新闻

    infor.getNews = function getNews(callback) {

        var getNews_Sql = "SELECT * FROM news ";
        var arrnews = [];
        connection.query(getNews_Sql, function(err, result) {
            if (err) {
                console.log("getNews Error: " + err.message);
                return;
            }
            if (result) {
                for (var i = 0; i < result.length; i++) {

                    arrnews[i] = result[i].newsid;


                    //console.log(result);


                }
            }
            ///connection.release();

            console.log("invoked[getNews]");
            callback(err, result);
        });
    };
    //////查询新闻
    infor.searchNews = function searchNews(newsid, callback) {

        var searchNews_Sql = "SELECT * FROM news WHERE newsid = ?";

        connection.query(searchNews_Sql, [newsid], function(err, result) {
            if (err) {
                console.log("searchNews Error: " + err.message);
                return;
            }

            ///connection.release();

            console.log("invoked[searchNews]");
            callback(err, result);
        });
    };
    /////////////删除新闻
    infor.deleteNews = function deleteNews(newsid, callback) {
        /// var id = req.query.userid_;
        var deleteNews_Sql = "DELETE  FROM news WHERE newsid = ?";

        connection.query(deleteNews_Sql, [newsid], function(err, result) {
            if (err) {
                console.log("deleteNews Error: " + err.message);
                return;
            }


            ////console.log("删除成功");



            ///connection.release();

            console.log("invoked[deleteNews]");
            callback(null);
        });
    };
    /////////////编辑新闻
    infor.updateNews = function updateNews(newstitle, newsimg, newscontent, addtime, newsid, callback) {

        var updateNews_Sql = "UPDATE  news SET newstitle = ?,newsimg = ?,newscontent = ?,addtime = ? WHERE newsid = ?";

        connection.query(updateNews_Sql, [newstitle, newsimg, newscontent, addtime, +newsid], function(err, result) {
            if (err) {
                console.log("updateUser Error: " + err.message);
                return;
            }

            ///connection.release();

            console.log("invoked[updateNews]");
            callback(err, result);
        });
    };
    connection.release();
});
