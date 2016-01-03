var express = require('express'),
    router = express.Router(),
    News = require('../models/active.js'),
    moment = require("moment"),
    TITLE_LOGIN = '新闻编辑';

router.get('/:newsid', function(req, res) {
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

    var newsid = req.params.newsid;
    News.searchNews(newsid, function(err, results) {

        res.render('newsedit', {
            title: TITLE_LOGIN,
            newslist: results
        });

        ////console.log(results);           

    });

});
router.post('/:newsid', function(req, res, next) {
    var date = new Date();
    //////var now = moment().format('YYYY-MM-DD'); //取当前时间
    var newsid = req.params.newsid,
        newsTitle = req.body['newstitle'],
        newsImg = req.body['newsimg'],
        newsContent = req.body['newscontent'],
        addTime = date;


    News.updateNews(newsTitle, newsImg, newsContent, addTime, +newsid, function(err, results) {
        if (err) {
            res.locals.error = err;
            res.render('newsedit', {
                title: TITLE_REG
            });
            return;
        }
        if (results.affectedRows > 0) {


            res.redirect("/newslist");
            console.log('新闻更新成功');
        }
    });
});
module.exports = router;
