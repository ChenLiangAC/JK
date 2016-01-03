   ////导航栏展开更多
   $(document).ready(function() {
       $(".leftnav ul").mouseover(function() {
           $(this).css("overflow", "visible");
           $(this).css("height", "408px");
           $(".line1").css("display", "none");
       });
       $(".leftnav ul").mouseleave(function() {
           $(this).css("overflow", "hidden");
           $(this).css("height", "305px");
           $(".line1").css("display", "block");
       });
   });
   

   /////////banner图片轮播

   var b_width = 569; // 大图的宽度 
   var speed = 500; // 图片向左移动速度 
   var s_time = 3000 //图片自动滚动速度 
   var pic_li = $("#List1").children("a");
   $(document).ready(function(e) {
       var $ul_width = pic_li.width() * pic_li.length; //轮播图的宽度 
       $("#List1").width($ul_width);

   });

   $('#bannerleft, #bannerright').hide();
   //鼠标上悬时显示向前、向后翻按钮,停止滑动，鼠标离开时隐藏向前、向后翻按钮，开始滑动 
   $('.swiperslide, #bannerleft, #bannerright').hover(function() {

       $('#bannerleft, #bannerright').show();
   }, function() {
       $('#bannerleft, #bannerright').hide();

   });
   $('.shortlines span').hover(function(e) {

       var preIndex = $(".shortlines span").filter(".pages-c").index();
       
   });
   $('#bannerleft').unbind('click');
   $('#bannerleft').bind('click', function() {
       prePage();
   });
   $('#bannerright').unbind('click');
   $('#bannerright').bind('click', function() {
       nextPage();
   });


   //上一个 
   function prePage() {
       if ($(".pages-c").index() == 0) {
           $("#List1").css("left", -2276);
           $("#List1").animate({
               "left": -parseInt(pic_li.length * b_width - b_width)
           }, speed);
           $("#shortlines>span").eq(pic_li.length - 1).addClass("pages-c").siblings().removeClass("pages-c");
           $(".pages-c").index() == pic_li.length - 1;
       } else {
           $("#shortlines>span").eq($(".pages-c").index() - 1).addClass("pages-c").siblings().removeClass("pages-c");
           var mar_lf2 = parseInt($("#List1").css("left")) + b_width;
           $("#List1").animate({
               "left": mar_lf2
           }, speed);
       }
   }
   //下一个 
   function nextPage() {
       if ($(".pages-c").index() == pic_li.length - 1) {
           $("#List1").css("left", 0);
           /*$("#lunbo_pic").animate({ 
           "left": 0 
           },speed);*/
           $("#shortlines>span").eq(0).addClass("pages-c").siblings().removeClass("pages-c");
           $(".pages-c").index() == 0;

       } else {

           $("#shortlines>span").eq($(".pages-c").index() + 1).addClass("pages-c").siblings().removeClass("pages-c");
           var mar_lf2 = parseInt($("#List1").css("left")) - b_width;
           $("#List1").animate({
               "left": mar_lf2
           }, speed);
       }
   }

   function picRun() {
       nextPage();
   }
   intervalTime = setInterval(picRun, s_time);

   $("#mysteve").on("mouseover", function() {
       clearInterval(intervalTime);
   });
   $("#mysteve").on("mouseout", function() {
       intervalTime = setInterval(picRun, s_time);;
   });
   //////小图
//////战略合作企业

  	//小图片左右滚动
  	   $('#bannerleft3, #bannerright3').hide();
   
   $('.zl, #bannerleft3, #bannerright3').hover(function() {

       $('#bannerleft3, #bannerright3').show();
   }, function() {
       $('#bannerleft3, #bannerright3').hide();

   });
	var $slider = $('.s-container .zl ');
	var $slider_child_l = $('.s-container .zl a').length;
	var $slider_width = $('.s-container .zl a').width();
	$slider.width($slider_child_l * $slider_width);
	
	var slider_count = 0;
	
	if ($slider_child_l < 5) {
		$('#bannerright3').css({cursor: 'auto'});
		$('#bannerright3').removeClass("dasabled");
	}
	
	$('#bannerright3').click(function() {
		if ($slider_child_l < 5 || slider_count >= $slider_child_l - 5) {
			return false;
		}
		
		slider_count++;
		$slider.animate({left: '-=' + $slider_width + 'px'}, 'fast');
		
	});
	
	$('#bannerleft3').click(function() {
		if (slider_count <= 0) {
			return false;
		}
		slider_count--;
		$slider.animate({left: '+=' + $slider_width + 'px'}, 'fast');
		
	});
	/////////合作院校
	   $('#bannerleft2, #bannerright2').hide();
   
   $('.yx, #bannerleft2, #bannerright2').hover(function() {

       $('#bannerleft2, #bannerright2').show();
   }, function() {
       $('#bannerleft2, #bannerright2').hide();

   });
	var $slider = $('.s-container .yx ');
	var $slider_child_l = $('.s-container .yx a').length;
	var $slider_width = $('.s-container .yx a').width();
	$slider.width($slider_child_l * $slider_width);
	
	var slider_count = 0;
	
	if ($slider_child_l < 5) {
		$('#bannerright2').css({cursor: 'auto'});
		
	}
	
	$('#bannerright2').click(function() {
		if ($slider_child_l < 5 || slider_count >= $slider_child_l - 5) {
			return false;
		}
		
		slider_count++;
		$slider.animate({left: '-=' + $slider_width + 'px'}, 'fast');
		
	});
	
	$('#bannerleft2').click(function() {
		if (slider_count <= 0) {
			return false;
		}
		slider_count--;
		$slider.animate({left: '+=' + $slider_width + 'px'}, 'fast');
		
	});
		/////////媒体报道
	   $('#bannerleft4, #bannerright4').hide();
   
   $('.mt, #bannerleft4, #bannerright4').hover(function() {

       $('#bannerleft4, #bannerright4').show();
   }, function() {
       $('#bannerleft4, #bannerright4').hide();

   });
	var $slider = $('.s-container .mt ');
	var $slider_child_l = $('.s-container .mt a').length;
	var $slider_width = $('.s-container .mt a').width();
	$slider.width($slider_child_l * $slider_width);
	
	var slider_count = 0;
	
	if ($slider_child_l < 5) {
		$('#bannerright4').css({cursor: 'auto'});
		
	}
	
	$('#bannerright4').click(function() {
		if ($slider_child_l < 5 || slider_count >= $slider_child_l - 5) {
			return false;
		}
		
		slider_count++;
		$slider.animate({left: '-=' + $slider_width + 'px'}, 'fast');
		
	});
	
	$('#bannerleft4').click(function() {
		if (slider_count <= 0) {
			return false;
		}
		slider_count--;
		$slider.animate({left: '+=' + $slider_width + 'px'}, 'fast');
		
	});
	/////知识体系图图片翻转
	var turn = function(target,time,opts){
	target.find('.cardtransform').hover(function(){
		$(this).find('.front').stop().animate(opts[0],time,function(){
			$(this).hide().next().show();
			$(this).next().animate(opts[1],time);
		});
	},function(){
		$(this).find('.back').animate(opts[0],time,function(){
			$(this).hide().prev().show();
			$(this).prev().animate(opts[1],time);
		});
	});
}
var verticalOpts = [{'width':0},{'width':'167px'}];
turn($('.map24'),100,verticalOpts);
///////热门课程
$('.navhotclasses ul li').hover(function() {
    if (!$(this).hasClass('on')) {
        $('.navhotclasses ul li').removeClass('on').eq($(this).index()).addClass('on');
        $('.lessonlist').stop(true, true).hide().eq($(this).index()).show();
    }
});
//////信息展示
$(function() {
    $('.lessoninfor').hover(function() {
            $(this).animate({
                height: '175px'
            }, 300);
            $(this).find('p').animate({
               height: '52px',
               opacity: '1'
           
            },300);
           $(this).find('p').css('display','block'); 
            
        },
        function() {
            $(this).animate({
                height: '88px'
            }, 300);
            $(this).find('p').animate({
               height: '0',
               opacity: '0'
              
                 
            },300);
            $(this).find('p').css('display','none');
            

        })

});
////////////////回到顶部
$(function () {  
            $(window).scroll(function(){  
                if ($(window).scrollTop()>200){  
                    $(".top2").fadeIn(1500);  
                }  
                else  
                {  
                    $(".top2").fadeOut(1500);  
                }  
            });  
  
            //当点击跳转链接后，回到页面顶部位置  
  
            $(".top2").click(function(){  
                $('body,html').animate({scrollTop:0},1000);  
                return false;  
            });  
        });  
   

