var express = require('express');

var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var routes = require('./routes/index');
///var users = require('./routes/users');

var reg = require('./routes/reg');
var login = require('./routes/login');
var logout = require('./routes/logout');
var main = require('./routes/main');
var useredit = require('./routes/useredit');
var addnews = require('./routes/addnews');
var newslist = require('./routes/newslist');
var newsedit = require('./routes/newsedit');
var newsdelete = require('./routes/newsdelete');

var userlist = require('./routes/userlist');

var userdelete = require('./routes/userdelete');

var app = express();


var ejs = require('ejs');

app.set('views', path.join(__dirname, 'views'));


app.engine('html', ejs.__express);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
// app.use(bodyParser({ keepExtensions: true, uploadDir: './public/news' }));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
////////////////////////////
app.use(session({
    secret: 'secret',
    cookie: {
        maxAge: 1000 * 60 * 30
    }
}));
app.use(function(req, res, next) {
    res.locals.user = req.session.user; // 从session 获取 user对象
    var err = req.session.error; //获取错误信息
    delete req.session.error;
    res.locals.message = ""; // 展示的信息 message
    if (err) {
        res.locals.message = '<div id="alt_warning" class="alert alert-warning">' + err + '</div>';
    }
    next(); //中间件传递
});
///////////////////////////////////////
app.use('/', routes);
app.use('/reg', reg);
app.use('/login', login);
app.use('/main', main);
app.use('/addnews', addnews);
app.use('/newslist', newslist);
app.use('/userlist', userlist);
app.use('/useredit', useredit);
app.use('/userdelete', userdelete);
app.use('/newsedit', newsedit);
app.use('/newsdelete', newsdelete);

app.use('/logout', logout);
///app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
