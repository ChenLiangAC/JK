//滚动广告
var len = $(".g-icons > i").length;
var index = 0; //图片序号
var adTimer;
$(".g-icons i").mouseover(function() {
    index = $(".g-icons i").index(this); //获取鼠标悬浮 li 的index
    showImg(index);
}).eq(0).mouseover();

//滑入停止动画，滑出开始动画.
$('.topic-gallery').hover(function() {
    clearInterval(adTimer);
}, function() {
    adTimer = setInterval(function() {
        showImg(index)
        index++;
        if (index == len) { //最后一张图片之后，转到第一张
            index = 0;
        }
    }, 2000);
}).trigger("mouseleave");

function showImg(index) {
    var adHeight = $(".topic-gallery>.g-list>.g-item:first").width();
    $(".g-list").stop(true, false).animate({
        "marginLeft": -adHeight * index + "px" //改变 marginTop 属性的值达到轮播的效果
    }, 800);
    $(".g-icons i").removeClass("cur")
        .eq(index).addClass("cur");
}

//////文字轮播
function AutoScroll(obj) {
    $(obj).find(".hotwork-content:first").animate({
        marginTop: "-28px"
    }, 500, function() {
        $(this).css({
            marginTop: "0px"
        }).find(".hotword-item:first").appendTo(this);
    });
}
$(document).ready(function() {
    setInterval('AutoScroll(".hotword")', 3000);
});


/////////回到顶部
$(document).ready(function() {
    //首先将go-top隐藏
    $(".go-top").hide();
    //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
    $(function() {
        $(window).scroll(function() {
            if ($(window).scrollTop() > 200) {
                $(".go-top").fadeIn(500);
            } else {
                $(".go-top").fadeOut(500);
            }
        });
        //当点击跳转链接后，回到页面顶部位置
        $(".go-top").click(function() {
            $('body,html').animate({
                    scrollTop: 0
                },
                1000);
            return false;
        });
    });
});


////注册验证
String.prototype.format = function(args) {
    var result = this;
    if (arguments.length > 0) {
        if (arguments.length == 1 && typeof(args) == "object") {
            for (var key in args) {
                if (args[key] != undefined) {
                    var reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args[key]);
                }
            }
        } else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] != undefined) {
                    var reg = new RegExp("({)" + i + "(})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
    }
    return result;
}

$(function() {
    $('#register2').on('click', function() {
        var
            $txtUserName = $('#inputEmail3'),
            username = $.trim($txtUserName.val()),
            $txtUserPwd = $('#inputPassword3'),
            userpwd = $.trim($txtUserPwd.val()),
            $txtUserRePwd = $('#inputPassword4'),
            txtUserRePwdVal = $.trim($txtUserRePwd.val()),
            errorTip = '<div id="errorTip" class="alert alert-warning">{0}</div> ';

        $("#errorTip,#alt_sucess,#alt_warning").remove();

        if (username.length == 0) {
            $("#container").prepend(errorTip.format('用户名不能为空'));
            $txtUserName.focus();
            return false;
        }

        if (userpwd.length == 0) {
            $("#container").prepend(errorTip.format('密码不能为空'));
            $txtUserPwd.focus();
            return false;
        }

        if (txtUserRePwdVal.length == 0) {
            $("#container").prepend(errorTip.format('确认密码不能为空'));
            $txtUserRePwd.focus();
            return false;
        }

        if (userpwd != txtUserRePwdVal) {
            $("#container").prepend(errorTip.format('两次密码不一致'));
            $txtUserPwd.focus();
            return false;
        }
        var data2 = {
            "username": username,
            "userpwd": userpwd
        };
        $.ajax({
            url: '/reg',
            type: 'post',
            data: data2,
            success: function(data, status) {

                if (status == 'success') {
                    location.href = 'main';

                }
            },
            error: function(data, status) {
                if (status == 'error') {

                    location.href = 'reg';
                }
            }
        });
        return true;
    })
});
////////////添加新闻信息验证
$(function() {
    $('.addbtn').on('click', function() {
        var
            $newsImg = $('.newsimg'),
            $newImgVal = $newsImg.val(),
            $txtNewsTitle = $('.newsitile'),
            txtNewsTitleVal = $.trim($txtNewsTitle.val()),
            $txtNewsContent = $('.newscontent'),
            txtNewsContentVal = $.trim($txtNewsContent.val()),
            errorTip = '<div id="errorTip" class="alert alert-warning">{0}</div> ';

        $("#errorTip,#alt_sucess,#alt_warning").remove();

        if (txtNewsTitleVal.length == 0) {
            $("#morris-one-line-chart").prepend(errorTip.format('请填写新闻标题！'));
            $txtNewsTitle.focus();
            return false;
        }


        if (txtNewsContentVal.length == 0) {
            $("#morris-one-line-chart").prepend(errorTip.format('请填入新闻内容！'));
            $txtNewsContent.focus();
            return false;
        }
        if (newImgVal.length == 0) {
            $("#morris-one-line-chart").prepend(errorTip.format('请选择图片！'));
            $newImgVal.focus();
            return false;
        }

        if (!/.(gif|jpg|jpeg|png|gif|jpg|png)$/.test($newImgVal)) {
            $("#morris-one-line-chart").prepend(errorTip.format('图片格式不正确！'));

            return false;
        }

        return true;
    })
});
///////修改新闻信息
$(function() {
    $('.edit-btn').on('click', function() {
        var
            $txtUserName = $('.edit-username'),
            txtUserNameVal = $.trim($txtUserName.val()),
            $txtUserPwd = $('.edit-userpwd'),
            txtUserPwdVal = $.trim($txtUserPwd.val()),
            errorTip = '<div id="errorTip" class="alert alert-warning">{0}</div> ';

        $("#errorTip,#alt_sucess,#alt_warning").remove();

        if (txtUserNameVal.length == 0) {
            $(".messagetable").prepend(errorTip.format('用户名不能为空！'));
            $txtUserName.focus();
            return false;
        }

        if (txtUserPwdVal.length == 0) {
            $(".messagetable").prepend(errorTip.format('密码不能为空！'));
            $txtUserName.focus();
            return false;
        }



        return true;
    })
});
/////////导航栏切换
$(document).ready(function() {
    $(".inedx-view-subpage-feed").hide();
    $(".inedx-view-subpage-feed:first").show();
});
$('.main-list .tabs li span').click(function() {
    // $(this).addClass("cur").siblings().removeClass();
    $(".main-list .tabs li span").removeClass("cur");
    $(this).addClass("cur");
    $(".tab_containe > .inedx-view-subpage-feed").hide().eq($('.main-list .tabs li span').index(this)).show();
});
