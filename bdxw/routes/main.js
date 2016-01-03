var express = require('express'),
    router = express.Router();

router.get('/', function(req, res) {
  if(req.cookies.islogin)
  { 
         console.log('cookies:' + req.cookies.islogin);
       req.session.username = req.cookies.islogin;
  }  

  if(req.session.username)
  {    
          console.log('session:' + req.session.username);
        res.locals.username = req.session.username;      
  }
  else
  {
        res.redirect('/login');
        return;    
  }

  res.render('main',{title:'新闻后台管理系统'});
});

module.exports = router;