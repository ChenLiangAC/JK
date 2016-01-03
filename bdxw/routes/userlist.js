var express = require('express'),
    router = express.Router(),
    User = require('../models/active.js'),

    TITLE_LOGIN = '用户列表';

router.get('/', function(req, res) {
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

    var entry = User.getUser(function(err, results) {
        res.render('userlist', {
            title: TITLE_LOGIN,
            userlist: results
        });

        ////console.log(results);           

    });

});


module.exports = router;
