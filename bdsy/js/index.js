//////////更多产品下拉菜单
var maxHeight = 800;

$(function() {

    $(".nav-bar > li").hover(function() {

        var $container = $(this),
            $list = $container.find("ul"),
            $anchor = $container.find("a"),
            height = $list.height() * 1.1,
            multiplier = height / maxHeight;


        $container.data("origHeight", $container.height());


        $anchor.addClass("hover");


        $list.show().css({
            paddingTop: $container.data("origHeight")
        });


        if (multiplier > 1) {
            $container.css({
                height: maxHeight,
                overflow: "hidden"
            })

        }

    }, function() {

        var $el = $(this);


        $el.height($(this).data("origHeight")).find("ul").css({
            top: 0
        }).hide().end().find("a").removeClass("hover");

    });

});

$(".enter-item")[0].focus();
// 用户名下拉菜单
// 单例设计模式
var userlist = {
    init: function() {
        var user = this;
        user.render();
        user.bind();
    },
    render: function() {
        var user = this;
        user.btn = $('.s-user-name-top,.topMenus');
    },
    bind: function() {
        var user = this;
        var top = $('.topMenus');
        user.btn.hover(function() {
            top.stop(true, true).fadeIn(200);
        }, function() {
            top.stop(true, true).delay(500).fadeOut(50);
        });
    }
}
$(function() {
    userlist.init();
});


// $('.s-user-name-top,.topMenus').hover(function() {
//     $('.topMenus').stop(true, true).fadeIn(200);
// }, function() {
//     $('.topMenus').stop(true, true).delay(500).fadeOut(50);
// });

// 导航
// 单例设计模式
var menu = {
    init: function() {
        var m = this;
        m.render();
        m.bind();
    },
    render: function() {
        var m = this;
        m.btnm = $('.s-menus-list .menu-item');
    },
    bind: function() {
        var m = this;
        m.btnm.click(function() {
            if (!$(this).hasClass('cur')) {
                $('.menu-wrap .menu-item').removeClass('cur').eq($(this).index()).addClass('cur');
                $('.s-content').stop(true, true).hide().eq($(this).index()).show();
            }
        });
    }
}
$(function() {
    menu.init();
});
// $('.s-menus-list .menu-item').click(function() {
//     if (!$(this).hasClass('cur')) {
//         $('.menu-wrap .menu-item').removeClass('cur').eq($(this).index()).addClass('cur');
//         $('.s-content').stop(true, true).hide().eq($(this).index()).show();
//     }
// });
///////导航信息展示
$(document).ready(function() {

    $('.s-mine-wrap').mousemove(function() {
        $(this).find('.s-setbar').show();
    });
    $('.s-mine-wrap').mouseleave(function() {
        $(this).find('.s-setbar').hide();
    });

});
//////我的关注
$(document).ready(function() {

    $('.nav-item').mousemove(function() {
        $(this).find('.rebate').show();
    });
    $('.nav-item').mouseleave(function() {
        $(this).find('.rebate').hide();
    });

});
///////我的导航展开
// 单例模式
$(document).ready(function() {
    var title = {
        init: function() {
            var tit = this;
            tit.render();
            tit.bind();
        },
        render: function() {
            var tit = this;
            tit.btnt = $('.title-con');
        },
        bind: function() {
            var tit = this;
            tit.btnt.click(function() {
                $(".nav-blank").slideToggle(500);
                $(this).toggleClass("active");
                return false;
            });
        }
    }
    $(function() {
        title.init();
    });
//     $(".title-con").click(function() {
//         $(".nav-blank").slideToggle(500);
//         $(this).toggleClass("active");
//         return false;
//     });
 });

$('.menusWrapper .s-menu').click(function() {
    if (!$(this).hasClass('active')) {

        $('.menusWrapper .s-menu').removeClass('active').eq($(this).index()).addClass('active');
        $('.cbox').stop(true, true).animate({
            top: 318
        }, 100).hide().eq($(this).index()).animate({
            top: 0
        }, 400).show();
    }


});


//购物信息展示
$(document).ready(function() {

    $('.shopping-card-imgwrap').mousemove(function() {
        $(this).find('.mask').show();
    });
    $('.shopping-card-imgwrap').mouseleave(function() {
        $(this).find('.mask').hide();
    });

});


////////视频
$(document).ready(function() {

    $('.video-col').mousemove(function() {
        $(this).find('.dustbin').show();
        $(this).find('.tag-sort2').hide();
    });
    $('.video-col').mouseleave(function() {
        $(this).find('.dustbin').hide();
        $(this).find('.tag-sort2').show();
    });

});

/////换肤
var i = 1;

$(".bd-skinchange").click(function() {
    $(".head1").animate({
        height: "288px"
    }, 500);
});
$(".p2").click(function() {
    $(".head1").animate({
        height: "0px"
    }, 500);
});
$(".bgcon img").hover(function() {

    i = $(this).index();
    $(".bgyl").css("background", 'url(./img/bg' + i + '.jpg)');
    $(".bgyl").css("background-size", "264px 180px");
});

$(".bgcon img").click(function() {
    $("body").css("background", 'url(./img/bg' + i + '.jpg)');

});
