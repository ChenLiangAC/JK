var express = require('express'),
    router = express.Router(),
    User = require('../models/active.js'),

    TITLE_LOGIN = '用户列表';
router.get('/:userid_', function(req, res, next) {

    var userid_ = req.params.userid_;

    if (userid_ != null && userid_ != "") {
        User.deleteUser(userid_, function(err) {
            if (err) {
                next(err);
            } else {
                res.redirect("/userlist");
            }
        });
    } else {
        next(new Error("用户不存在"));
    }
    console.log("删除成功", userid_);
});
module.exports = router;
