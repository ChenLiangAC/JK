var express = require('express'),
    router = express.Router(),
    infor = require('../models/active.js'),
    ////multiparty = require('multiparty'),
    moment = require("moment"),
    fs = require('fs'),
    TITLE_REG = '添加新闻';


router.get('/', function(req, res, next) {

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

    res.render('addnews', {
        title: TITLE_REG
    });
});
router.post('/', function(req, res) {
    //   //生成multiparty对象，并配置上传目标路径
    //  var form = new multiparty.Form({uploadDir: './public/images/'});
    //  //上传完成后处理
    //  form.parse(req, function(err, fields, files) {
    //    var filesTmp = JSON.stringify(files,null,2);

    //    if(err){
    //      console.log('parse error: ' + err);
    //    } else {
    //      console.log('parse files: ' + filesTmp);
    //      for (var i in files.inputFile){
    //      var inputFile = files.inputFile[i];
    //      var uploadedPath = inputFile.path;
    //      var dstPath = './public/images/' + inputFile.originalFilename;
    //      //重命名为真实文件名
    //      fs.rename(uploadedPath, dstPath, function(err) {
    //        if(err){
    //          console.log('rename error: ' + err);
    //        } else {
    //          console.log('rename ok');
    //        }
    //      });
    //    }
    //    }

    //    // res.writeHead(200, {'content-type': 'text/plain;charset=utf-8'});
    //    // res.write('received upload:\n\n');
    //    // res.end(util.inspect({fields: fields, files: filesTmp}));
    // });
    var date = new Date();
    var now = moment(date).format('YYYY-MM-DD'); //取当前时间

    var newsTitle = req.body['newstitle'],
        newsImg = req.body['newsimg'],
        newsContent = req.body['newscontent'],
        addTime = date;

    var newNews = new infor({
        newstitle: newsTitle,
        newsimg: newsImg,
        newscontent: newsContent,
        addtime: addTime
    });

    //添加数据


    newNews.savenews(function(err, result) {

        if (result.insertId > 0) {

            res.locals.success = '添加成功';

            res.redirect('/addnews');
            return;
        } else {
            res.locals.error = '添加失败';
        }

        res.render('addnews', {
            title: TITLE_REG
        });
    });

});
module.exports = router;
