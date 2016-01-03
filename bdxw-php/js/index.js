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
////tab切换
// $('.main-list .content .tit').click(function() {
//     $(this).addClass("cur").siblings().removeClass(); //removeClass就是删除当前其他类；只有当前对象有addClass("selected")；siblings()意思就是当前对象的同级元素，removeClass就是删除； 
//     $(".main-sections > .inedx-view-subpage").hide().eq($('.main-list .content .tit').index(this)).show();
// });
// // $('.main-list .content .tit').click(function() {
// //     if (!$(this).hasClass('cur')) {
// //         $('.main-list .content span').removeClass('cur').eq($(this).index()).addClass('cur');
// //         $('.inedx-view-subpage').stop(true, true).hide().eq($(this).index()).show();
// //     }
// // });

////////点击加载更多
// $(function(){ 
//   ///var winH = $(window).height(); //页面可视区域高度 
//   var i = 1; //设置当前页数 
//   $('.refresh-wrap').click(function () { 
   
 
//       $.getJSON("result.php",{page:i},function(json){ 
//         if(json){ 
//           var str = ""; 
//           $.each(json,function(index,array){ 
//             var str = "<div class=\"index-list-item\">"; 
//              str += "<div class=\"index-list-image\">"+"images/"+array['index-list-image']+"</div>"; 
//             str += "<div class=\"index-list-main-title\">"+array['index-list-main-title']+"</div>"; 
//              str += "<div class=\"index-list-main-abs\">"+array['index-list-main-abs']+"</div>"; 
//               str += "<div class=\"tip-time\">"+array['tip-time']+"</div></div>"; 
//             $(".inedx-view-subpage-feed").append(str); 
//           })
//           i++; 
//         }
//       }) 
    
//   }) 
// }); 

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