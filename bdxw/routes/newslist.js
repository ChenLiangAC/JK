var express = require('express'),
    router = express.Router(),
    News = require('../models/active.js'),

    TITLE_LOGIN = '新闻列表';

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

    var news = News.getNews(function(err, results) {
        res.render('newslist', {
            title: TITLE_LOGIN,
            newslist: results
        });

        ///////console.log(results);


    });

});

module.exports = router;
