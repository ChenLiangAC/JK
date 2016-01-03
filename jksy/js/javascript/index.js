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


  
   /////知识体系图图片翻转


      $(function(){
        //checking for css 3d transformation support
        $.support.css3d = supportsCSS3D();
        var formContainer = $(".cardtransform");
        //Listening for clicks on the ribbon links
        $(".cardtransform").hover(function(e){
          //flipping the forms
          $(this).toggleClass("flipped");
         
          if(!$.support.css3d){
            $(".front").toggle('slow');
          }
          e.preventDefault();
        });
        
       
        function supportsCSS3D(){
          var props = ["perspectiveProperty","WebkitPerspective","MozPerspective"],testDom = document.createElement("a");
          for(var i = 0; i < props.length; i++){
            if(props[i] in testDom.style){
              return true;
            }
          }
          return false;
        }
      });
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

               }, 300);
               $(this).find('p').css('display', 'block');

           },
           function() {
               $(this).animate({
                   height: '88px'
               }, 300);
               $(this).find('p').animate({
                   height: '0',
                   opacity: '0'


               }, 300);
               $(this).find('p').css('display', 'none');


           })

   });
   ////////////////回到顶部
   $(function() {
       $(window).scroll(function() {
           if ($(window).scrollTop() > 100) {
               $(".top2").show();
           } else {
               $(".top2").hide();
           }
       });

       //当点击跳转链接后，回到页面顶部位置  

       $(".top2").click(function() {
           $('body,html').animate({
               scrollTop: 0
           }, 1000);
           return false;
       });
   });
