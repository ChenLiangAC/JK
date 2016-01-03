var express = require('express'),
    router = express.Router(),
    News = require('../models/active.js'),

    TITLE_LOGIN = '新闻列表';

router.get('/', function(req, res) {

    var news = News.getNews(function(err, results) {
        res.render('index', {
            title: TITLE_LOGIN,
            newslist: results
        });

        ///////console.log(results);


    });

});

module.exports = router;
