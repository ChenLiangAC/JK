// 用户名下拉菜单
$('.s-user-name-top,.topMenus').hover(function() {
    $('.topMenus').stop(true, true).fadeIn(200);
}, function() {
    $('.topMenus').stop(true, true).delay(500).fadeOut(50);
});

// 导航
$('.ctnerTab a').click(function() {
    if (!$(this).hasClass('on')) {
        $('.ctnerTab a').removeClass('on').eq($(this).index()).addClass('on');
        $('.rtNavs').stop(true, true).hide(200).eq($(this).index()).show(300);
    }
});
// 购物
$('.gbuy-tab a').click(function() {
    if (!$(this).hasClass('on')) {
        $('.gbuy-tab a').removeClass('on').eq($(this).index()).addClass('on');
        $('.gbuy-mod').stop(true, true).hide().eq($(this).index()).show();
    }
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
// $('.shipin-head a').click(function() {
//     if (!$(this).hasClass('on')) {
//         $('.shipin-head a').removeClass('on').eq($(this).index()).addClass('on');
//         $('.bd-shipin-content').stop(true, true).hide().eq($(this).index()).show();
//     }
// });
// 我的账户
$('.gbuy-user-tit').click(function() {
    $(".gbuy-user-list").toggle(function() {
        $(this).next(".gbuy-user-list").animate({
            height: 'toggle',
            opacity: 'toggle'
        }, "slow");
    }, function() {
        $(this).next(".gbuy-user-list").animate({
            height: 'toggle',
            opacity: 'toggle'
        }, "slow");
    });
});
// 用户名--退出
$('.quit').click(function() {
    window.open("index.html");
});
// 购物信息展示
$(function() {
    $('.gbuy-detail').hover(function() {
            $(this).animate({
                height: '44px'
            }, 300);
            $('.cut').animate({
                height: '44px'
            }, 300);
        },
        function() {
            $(this).animate({
                height: '28px'
            }, 300);

        })

});


//////////视频图片轮播
$(document).ready(function() {
    var length,
        currentIndex = 0,
        interval,
        hasStarted = false, //是否已经开始轮播 
        t = 3000; //轮播时间间隔 
    length = $('.con-img-scroll').length;
    //将除了第一张图片隐藏 
    $('.con-img-scroll:not(:first)').hide();
    //将第一个slider-item设为激活状态 
    $('.sp-box-dotnav a:first').addClass('cur');
    //隐藏向前、向后翻按钮 

    //鼠标上悬时显示向前、向后翻按钮,停止滑动，鼠标离开时隐藏向前、向后翻按钮，开始滑动 
    $('.con-img-scroll').hover(function() {
        stop();

    }, function() {

        start();
    });
    $('.sp-box-dotnav a').hover(function(e) {
        stop();
        var preIndex = $(".sp-box-dotnav a").filter(".cur").index();
        currentIndex = $(this).index();
        play(preIndex, currentIndex);
    }, function() {
        start();
    });

    //向前翻页 
    function pre() {
        var preIndex = currentIndex;
        currentIndex = (--currentIndex + length) % length;
        play(preIndex, currentIndex);
    }
    //向后翻页


    function next() {
        var preIndex = currentIndex;
        currentIndex = ++currentIndex % length;
        play(preIndex, currentIndex);
    }
    /** 
     * 从preIndex页翻到currentIndex页 
     * preIndex 整数，翻页的起始页 
     * currentIndex 整数，翻到的那页 
     */
    function play(preIndex, currentIndex) {
        $('.con-img-scroll').eq(preIndex).fadeOut(500)
            .parent().children().eq(currentIndex).fadeIn(1000);
        $('.sp-box-dotnav a').removeClass('cur');
        $('.sp-box-dotnav a').eq(currentIndex).addClass('cur');
    }

    //开始轮播 

    function start() {
        if (!hasStarted) {
            hasStarted = true;
            interval = setInterval(next, t);
        }
    }

    // 停止轮播 

    function stop() {
        clearInterval(interval);
        hasStarted = false;
    }
    //开始轮播 
    start();
});
/////////////小图点击显示
$('.smallPics a').click(function() {
    if (!$(this).hasClass('active')) {
        $('.smallPics a').removeClass('active').eq($(this).index()).addClass('active');
        $('.picLink').stop(true, true).removeClass('active').eq($(this).index()).addClass('active');
    }
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
    $(".bgyl").css("background", 'url(img/bg' + i + '.jpg)');
    $(".bgyl").css("background-size", "264px 180px");
});

$(".bgcon img").click(function() {
    $("body").css("background", 'url(img/bg' + i + '.jpg)');

});

//////新闻图片轮播
$(document).ready(function() {
    var length,
        currentIndex = 0,
        interval,
        hasStarted = false, //是否已经开始轮播 
        t = 3000; //轮播时间间隔 
    length = $('.picLink').length;
    //将除了第一张图片隐藏 
    $('.picLink:not(:first)').hide();
    //将第一个slider-item设为激活状态 
    $('.smallPics a:first').addClass('active');
    //隐藏向前、向后翻按钮 
    $('.pre, .next').hide();
    //鼠标上悬时显示向前、向后翻按钮,停止滑动，鼠标离开时隐藏向前、向后翻按钮，开始滑动 
    $('.picLink, .pre, .next').hover(function() {
        stop();
        $('.pre, .next').show();
    }, function() {
        $('.pre, .next').hide();
        start();
    });
    $('.smallPics a').hover(function(e) {
        stop();
        var preIndex = $(".smallPics a").filter(".active").index();
        currentIndex = $(this).index();
        play(preIndex, currentIndex);
    }, function() {
        start();
    });
    $('.pre').unbind('click');
    $('.pre').bind('click', function() {
        pre();
    });
    $('.next').unbind('click');
    $('.next').bind('click', function() {
        next();
    });

    // 向前翻页 

    function pre() {
        var preIndex = currentIndex;
        currentIndex = (--currentIndex + length) % length;
        play(preIndex, currentIndex);
    }

    //向后翻页 

    function next() {
        var preIndex = currentIndex;
        currentIndex = ++currentIndex % length;
        play(preIndex, currentIndex);
    }
    /** 
     * 从preIndex页翻到currentIndex页 
     * preIndex 整数，翻页的起始页 
     * currentIndex 整数，翻到的那页 
     */
    function play(preIndex, currentIndex) {
        $('.picLink').eq(preIndex).fadeOut(500)
            .parent().children().eq(currentIndex).fadeIn(1000);
        $('.smallPics a').removeClass('active');
        $('.smallPics a').eq(currentIndex).addClass('active');
    }

    // 开始轮播 

    function start() {
        if (!hasStarted) {
            hasStarted = true;
            interval = setInterval(next, t);
        }
    }

    //停止轮播 

    function stop() {
        clearInterval(interval);
        hasStarted = false;
    }
    //开始轮播 
    start();
});
