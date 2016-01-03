var express = require('express'),
    router = express.Router(),
    User = require('../models/active.js'),

    TITLE_LOGIN = '用户编辑';

router.get('/:userid', function(req, res) {
    if (req.cookies.islogin) {
        console.log('cookies:' + req.cookies.islogin);
        req.session.username = req.cookies.islogin;
    }

    if (req.session.username) {
        console.log('session:' + req.session.username);
        res.locals.username = req.session.username;
    } else {
        res.redirect('/login');
        return;
    }

    var userid = req.params.userid;
    var entry = User.searchUser(userid, function(err, results) {

        res.render('useredit', {
            title: TITLE_LOGIN,
            userlist: results
        });

        ////console.log(results);           

    });

});
router.post('/:userid', function(req, res, next) {
    var userName = req.body['username'],
        userid = req.params.userid,
        userPwd = req.body['userpwd'];


    User.updateUser(userName, userPwd, +userid, function(err, results) {
        if (err) {
            res.locals.error = err;
            res.render('useredit', {
                title: TITLE_REG
            });
            return;
        }
        if (results.affectedRows > 0) {


            res.redirect("/userlist");
            console.log('更新成功', results);
        }
    });
});
module.exports = router;
