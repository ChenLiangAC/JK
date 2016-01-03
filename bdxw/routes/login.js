var express = require('express'),
    router = express.Router(),
    infor = require('../models/active.js'),

    TITLE_LOGIN = '登录';

router.get('/', function(req, res, next) {
    res.render('login', {
        title: TITLE_LOGIN
    });
});

router.post('/', function(req, res) {

    var userName = req.body.username,
        userPwd = req.body.userpwd,
        isRem = req.body['chbRem'];

    infor.getUserByUserName(userName, function(err, results) {

        if (results == '') {

            req.session.error = '用户名不存在';
            res.send(404);
            return;
        }


        if (results[0].username != userName || results[0].userpwd != userPwd) {
            req.session.error = '用户名或密码有误';
           
            res.send(404);
            console.log(1);

            return;
        } else {
            if (isRem) {
                res.cookie('islogin', userName, {
                    maxAge: 60000
                });
            }


            req.session.username = userName;
            console.log(req.session.username);

            res.send(200);
            return;
        }
    });
});

module.exports = router;
