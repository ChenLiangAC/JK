var express = require('express'),
    router = express.Router(),
    News = require('../models/active.js'),

    TITLE_LOGIN = '新闻删除';
    
router.get('/:newsid_', function(req, res,next) {
    
     var newsid_ = req.params.newsid_;
    
        if(newsid_!=null && newsid_!=""){
        News.deleteNews(newsid_,function(err){
            if(err){
                next(err);
            }else{
                res.redirect("/newslist");
            }
        });
    }else{
        next(new Error("新闻不存在"));
    }
    console.log("删除成功", newsid_);
});
module.exports = router;