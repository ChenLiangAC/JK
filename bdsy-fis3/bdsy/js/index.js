//////////下拉菜单
var maxHeight = 800;

$(function(){

    $(".nav-bar > li").hover(function() {
    
         var $container = $(this),
             $list = $container.find("ul"),
             $anchor = $container.find("a"),
             height = $list.height() * 1.1,       // make sure there is enough room at the bottom
             multiplier = height / maxHeight;     // needs to move faster if list is taller
        
        // need to save height here so it can revert on mouseout            
        $container.data("origHeight", $container.height());
        
        // so it can retain it's rollover color all the while the dropdown is open
        $anchor.addClass("hover");
        
        // make sure dropdown appears directly below parent list item    
        $list
            .show()
            .css({
                paddingTop: $container.data("origHeight")
            });
        
        // don't do any animation if list shorter than max
        if (multiplier > 1) {
            $container
                .css({
                    height: maxHeight,
                    overflow: "hidden"
                })
                
        }
        
    }, function() {
    
        var $el = $(this);
        
        // put things back to normal
        $el
            .height($(this).data("origHeight"))
            .find("ul")
            .css({ top: 0 })
            .hide()
            .end()
            .find("a")
            .removeClass("hover");
    
    });  
    
});

$(".enter-item")[0].focus();

// 用户名下拉菜单
$('.s-user-name-top,.topMenus').hover(function() {
    $('.topMenus').stop(true, true).fadeIn(200);
}, function() {
    $('.topMenus').stop(true, true).delay(500).fadeOut(50);
});

// 导航
$('.s-menus-list .menu-item').click(function() {
    if (!$(this).hasClass('cur')) {
        $('.menu-wrap .menu-item').removeClass('cur').eq($(this).index()).addClass('cur');
        $('.s-content').stop(true, true).hide().eq($(this).index()).show();
    }
});
///////导航信息展示
$(document).ready(function(){
 
  $('.s-mine-wrap').mousemove(function(){
  $(this).find('.s-setbar').show();
  });
  $('.s-mine-wrap').mouseleave(function(){
  $(this).find('.s-setbar').hide();
  });
 
});
//////我的关注
$(document).ready(function(){
 
  $('.nav-item').mousemove(function(){
  $(this).find('.rebate').show();
  });
  $('.nav-item').mouseleave(function(){
  $(this).find('.rebate').hide();
  });
 
});
///////我的导航展开
$(document).ready(function(){ 
$(".title-con").click(function(){ 
$(".nav-blank").slideToggle(500); 
$(this).toggleClass("active"); return false; 
}); 
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


