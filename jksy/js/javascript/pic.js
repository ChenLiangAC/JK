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
   var $slider3 = $('.s-container .zl ');
   var $slider_child_l3 = $('.s-container .zl a').length;
   var $slider_width3 = $('.s-container .zl a').width();
   $slider3.width($slider_child_l3 * $slider_width3);

   var slider_count3 = 0;

   if ($slider_child_l3 < 5) {
       $('#bannerright3').css({
           cursor: 'auto'
       });
       $('#bannerright3').removeClass("dasabled");
   }

   $('#bannerright3').click(function() {
       if ($slider_child_l3 < 5 || slider_count3 >= $slider_child_l3 - 5) {
           return false;
       }

       slider_count3++;
       $slider3.animate({
           left: '-=' + $slider_width3 + 'px'
       }, 'fast');

   });

   $('#bannerleft3').click(function() {
       if (slider_count3 <= 0) {
           return false;
       }
       slider_count3--;
       $slider3.animate({
           left: '+=' + $slider_width3 + 'px'
       }, 'fast');

   });
   /////////合作院校
   $('.bannerleft2, .bannerright2').hide();

   $('.yx, .bannerleft2, .bannerright2').hover(function() {

       $('.bannerleft2, .bannerright2').show();
   }, function() {
       $('.bannerleft2, .bannerright2').hide();

   });
   var $slider2 = $('.yx ');
   var $slider_child_l2 = $('.yx a').length;
   var $slider_width2 = $('.yx a').width();
   $slider2.width($slider_child_l2 * $slider_width2);

   var slider_count2= 0;

   if ($slider_child_l2 < 5) {
       $('.bannerright2').css({
           cursor: 'auto'
       });

   }

   $('.bannerright2').click(function() {
       if ($slider_child_l2 < 5 || slider_count2 >= $slider_child_l2 - 5) {
           return false;
       }

       slider_count2++;
       $slider2.animate({
           left: '-=' + $slider_width2 + 'px'
       }, 'fast');

   });

   $('.bannerleft2').click(function() {
       if (slider_count2<= 0) {
           return false;
       }
       slider_count2--;
       $slider2.animate({
           left: '+=' + $slider_width2 + 'px'
       }, 'fast');

   });
   /////////媒体报道
   $('#bannerleft4, #bannerright4').hide();

   $('.mt, #bannerleft4, #bannerright4').hover(function() {

       $('#bannerleft4, #bannerright4').show();
   }, function() {
       $('#bannerleft4, #bannerright4').hide();

   });
   var $slider = $(' .mt ');
   var $slider_child_l = $('.mt a').length;
   var $slider_width = $('.mt a').width();
   $slider.width($slider_child_l * $slider_width);

   var slider_count = 0;

   if ($slider_child_l < 5) {
       $('#bannerright4').css({
           cursor: 'auto'
       });

   }

   $('#bannerright4').click(function() {
       if ($slider_child_l < 5 || slider_count >= $slider_child_l - 5) {
           return false;
       }

       slider_count++;
       $slider.animate({
           left: '-=' + $slider_width + 'px'
       }, 'fast');

   });

   $('#bannerleft4').click(function() {
       if (slider_count <= 0) {
           return false;
       }
       slider_count--;
       $slider.animate({
           left: '+=' + $slider_width + 'px'
       }, 'fast');

   });