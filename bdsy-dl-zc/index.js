/*
* 
* Credits to http://css-tricks.com/long-dropdowns-solution/
*
*/

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
// 登录界面
jQuery(document).ready(function($){ 
    var $form_modal = $('.cd-user-modal'), 
        $form_login = $form_modal.find('#cd-login'), 
        $form_signup = $form_modal.find('#cd-signup'), 
        $form_modal_tab = $('.cd-switcher'), 
        $tab_login = $form_modal_tab.children('li').eq(0).children('a'), 
        $tab_signup = $form_modal_tab.children('li').eq(1).children('a'), 
        $main_nav = $('.main_nav'); 
 
    //弹出窗口 
    $main_nav.on('click', function(event){ 
 
        if( $(event.target).is($main_nav) ) { 
            // on mobile open the submenu 
            $(this).children('li').toggleClass('is-visible'); 
        } else { 
            // on mobile close submenu 
            $main_nav.children('li').removeClass('is-visible'); 
            //show modal layer 
            $form_modal.addClass('is-visible');     
            //show the selected form 
            ( $(event.target).is('.cd-signup') ) ? signup_selected() : login_selected(); 
        } 
 
    }); 
 
    //关闭弹出窗口 
    $('.cd-user-modal').on('click', function(event){ 
        if( $(event.target).is($form_modal) || $(event.target).is('.cd-close-form') ) { 
            $form_modal.removeClass('is-visible'); 
        }     
    }); 
    //使用Esc键关闭弹出窗口 
    $(document).keyup(function(event){ 
        if(event.which=='27'){ 
            $form_modal.removeClass('is-visible'); 
        } 
    }); 
 
    //切换表单 
    $form_modal_tab.on('click', function(event) { 
        event.preventDefault(); 
        ( $(event.target).is( $tab_login ) ) ? login_selected() : signup_selected(); 
    }); 
 
    function login_selected(){ 
        $form_login.addClass('is-selected'); 
        $form_signup.removeClass('is-selected'); 
        // $form_forgot_password.removeClass('is-selected'); 
        $tab_login.addClass('selected'); 
        $tab_signup.removeClass('selected'); 
    } 
 
    function signup_selected(){ 
        $form_login.removeClass('is-selected'); 
        $form_signup.addClass('is-selected'); 
        // $form_forgot_password.removeClass('is-selected'); 
        $tab_login.removeClass('selected'); 
        $tab_signup.addClass('selected'); 
    } 
 
}); 