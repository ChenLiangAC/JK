   $(function() {
       $(window).scroll(function() {
           if ($(window).scrollTop() > 100) {
               $(".top").show();
           } else {
               $(".top").hide();
           }
       });


$(".top").click(function() {
           $('body,html').animate({
               scrollTop: 0
           }, 1000);
           return false;
       });
});