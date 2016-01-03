$(function() {

    //页面切换初始化
    $(".number2").click(function() {
        $(".mainForm1").show();
        $(".mainForm2").hide();
        $(".error").hide();
        $("#level2").hide();
        $(".pass-text-input").removeClass("errorC");
        $(".r-fr").removeClass("checkedN");
        $(".right2").css("display", "none");

        $(".mainForm input").val("");
    });
    $(".number1").click(function() {
        $(".mainForm2").show();
        $(".mainForm1").hide();
        $(".error").hide();
        $("#level").hide();
        $(".right2").css("display", "none");
        $(".pass-text-input").removeClass("errorC");
        $(".r-fr").removeClass("checkedN");

        $(".mainForm input").val("");
    });
    //文本框失去焦点
    $(".mainForm input").blur(function() {
        $("#mz_Float").css("top", "");
    });
    $(".mainForm input").blur(function() {
        $("#mz_Float2").css("top", "");
    });
    //     $(".mainForm input").blur(function(){
    //     $("#level").css("display","none");
    // });
    //协议条款
    $(".checkboxPic").click(function() {
        if ($(this).attr("isshow") == "false") {
            $(this).parent().css("margin-bottom", "10px");

            $(".otherError").css("display", "block");
            $(this).attr("isshow", "true");
        } else {
            $(this).parent().css("margin-bottom", "");

            $(".otherError").hide();
            $(this).attr("isshow", "false");
        }

    });
    $(".checkboxPic2").click(function() {
        if ($(this).attr("isshow") == "false") {
            $(this).parent().css("margin-bottom", "10px");

            $(".otherError2").css("display", "block");
            $(this).attr("isshow", "true");
        } else {
            $(this).parent().css("margin-bottom", "");

            $(".otherError2").hide();
            $(this).attr("isshow", "false");
        }

    });

    //mainform1
    //密码是否可见(mainform1)
    $(".pwdBtnShow").click(function() {
        if ($(".pwdBtnShow").attr("isshow") == "false") {
            $(".pwdBtnShow i").css("background-position", "-60px -93px");
            $(".password").hide();
            $(".password1").val($(".password").val());
            $(".password1").show();
            $(".pwdBtnShow").attr("isshow", "true");
        } else {
            $(".pwdBtnShow i").css("background-position", "-30px -93px");
            $(".password1").hide();
            $(".password").val($(".password1").val());
            $(".password").show();
            $(".pwdBtnShow").attr("isshow", "false");
        }

    });
    $(function() {

        var ok1 = false;
        var ok2 = false;
        var ok3 = false;

        //手机号栏失去焦点
        $(".phone").blur(function() {
            reg = /^1[3|4|5|8][0-9]\d{4,8}$/i; //验证手机正则(输入前7位至11位)

            if ($(".phone").val() == "") {
                $(".phone").addClass("errorC");
                $(".error1").html("请您输入手机号");
                $(".error1").css("display", "block");

            } else if ($(".phone").val().length < 11) {
                $(".phone").addClass("errorC");
                $(".error1").html("您填写的手机号格式有误,请输入11位大陆手机号");
                $(".error1").css("display", "block");
            } else if (!reg.test($(".phone").val())) {
                $(".phone").addClass("errorC");
                $(".error1").html("请填写正确的手机号码");
                $(".error1").css("display", "block");
            } else {
                $(".right").addClass("checkedN");
                ok1 = true;
            }
        });
        //密码栏失去焦点(mainform1)
        $(".password,.password1").blur(function() {
            reg1 = /^.*[\d]+.*$/;
            reg2 = /^.*[A-Za-z]+.*$/;
            reg3 = /^.*[_@#%&^+-/*\/\\]+.*$/; //验证密码
            if ($(".pwdBtnShow").attr("isshow") == "false") {
                var Pval = $(".password").val();
            } else {
                var Pval = $(".password1").val();
            }

            if (Pval == "") {
                $(".password").addClass("errorC");
                $(".error3").html("请您填写密码");
                $(".pw-strength").css("display", "block");
                $(".error3").css("display", "block");
            } else if (Pval.length > 14 || Pval.length < 6) {
                $(".password").addClass("errorC");
                $(".pw-strength").css("display", "block");
                $(".right2").css("display", "none");
                $(".error3").html("密码应为6-14个字符，区分大小写");
                $(".error3").css("display", "block");
            } else if (!((reg1.test(Pval) && reg2.test(Pval)) || (reg1.test(Pval) && reg3.test(Pval)) || (reg2.test(Pval) && reg3.test(Pval)))) {
                $(".password").addClass("errorC");
                $(".pw-strength").css("display", "block");
                // $(".error3").html("需至少包含数字、字母和符号中的两种类型");
                $(".error3").css("display", "block");
            } else {
                $(".right2").css("display", "block");
                $(".right2").addClass("checkedN2");
                ok2 = true;

            }
        });
        /////////////////////////密码强度
        $(function() {
            $('.pwd').keyup(function() {
                var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
                var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
                var enoughRegex = new RegExp("(?=.{6,}).*", "g");
                $(".right2").css("display", "block");
                if (false == enoughRegex.test($(this).val())) {
                    $('#level').removeClass('pw-weak');
                    $('#level').removeClass('pw-medium');
                    $('#level').removeClass('pw-strong');
                    $('#level').addClass('pw-defule');
                    //密码小于六位的时候，密码强度图片都为灰色 
                } else if (strongRegex.test($(this).val())) {
                    $('#level').removeClass('pw-weak');
                    $('#level').removeClass('pw-medium');
                    $('#level').removeClass('pw-strong');
                    $(".pw-strength").css("display", "block");
                    $(".right2").addClass("checkedN2");
                    $(".checkedN2").html("您的密码很安全,请牢记！");
                    $('#level').addClass('pw-strong');
                    //密码为八位及以上并且字母数字特殊字符三项都包括,强度最强 
                } else if (mediumRegex.test($(this).val())) {
                    $('#level').removeClass('pw-weak');
                    $('#level').removeClass('pw-medium');
                    $('#level').removeClass('pw-strong');
                    $('#level').addClass('pw-medium');
                    $(".pw-strength").css("display", "block");
                    $(".right2").addClass("checkedN2");
                    $(".checkedN2").html("您的密码还可以更复杂些");
                    //密码为七位及以上并且字母、数字、特殊字符三项中有两项，强度是中等 
                } else {
                    $('#level').removeClass('pw-weak');
                    $('#level').removeClass('pw-medium');
                    $('#level').removeClass('pw-strong')
                    $(".pw-strength").css("display", "block");
                    $('#level').addClass('pw-weak');
                    $(".right2").css("display", "none");
                    $(".error3").html("请重新设置,试试数字、字母、符号组合");
                    //如果密码为6为及以下，就算字母、数字、特殊字符三项都包括，强度也是弱的 
                }
                return true;
            });
        })

        //////////////////////////
        //验证码栏失去焦点
        $(".kapkey").blur(function() {
            reg = /^.*[\u4e00-\u9fa5]+.*$/;
            if ($(".kapkey").val() == "") {
                $(".kapkey").addClass("errorC");
                $(".error2").html("请您填写验证码");
                $(".error2").css("display", "block");
            } else if ($(".kapkey").val().length < 4) {
                $(".kapkey").addClass("errorC");
                $(".error2").html("验证码长度有误！");
                $(".error2").css("display", "block");
            } else if (reg.test($(".kapkey").val())) {
                $(".kapkey").addClass("errorC");
                $(".error2").html("验证码里无中文！");
                $(".error2").css("display", "block");
            } else {
                $(".right3").addClass("checkedN");
                ok3 = true;
            }
        });

        //////////////////////手机验证码倒计时

        $(function() {
            //获取短信验证码
            var validCode = true;
            $(".msgs").click(function() {
                var numbers = /^1\d{10}$/;
                var val = $('.phone').val().replace(/\s+/g, ""); //获取输入手机号码
                if ($(".phone").val() == "") {
                    $(".phone").addClass("errorC");
                    $(".error1").html("请您输入手机号");
                    $(".error1").css("display", "block");

                } else if ($(".phone").val().length < 11) {
                    $(".phone").addClass("errorC");
                    $(".error1").html("您填写的手机号格式有误,请输入11位大陆手机号");
                    $(".error1").css("display", "block");
                } else if (!reg.test($(".phone").val())) {
                    $(".phone").addClass("errorC");
                    $(".error1").html("请填写正确的手机号码");
                    $(".error1").css("display", "block");
                }

                if (numbers.test(val)) {
                    var time = 60;
                    var code = $(this);
                    if (validCode) {
                        validCode = false;
                        code.addClass("msgs1");
                        var t = setInterval(function() {
                            time--;
                            code.html(time + "秒后重新发送");
                            if (time == 0) {
                                clearInterval(t);
                                code.html("重新获取");
                                validCode = true;
                                code.removeClass("msgs1");

                            }
                        }, 1000)
                    }
                }
            })
        })

        ///////////////////////

        //手机号栏获得焦点
        $(".phone").focus(function() {
            $(".phone").removeClass("errorC");
            $(".right").removeClass("checkedN");
            $(".error1").hide();
            $("#mz_Float2").css("top", "89px");
            $("#mz_Float2").find(".bRadius3").html("请输入中国大陆手机号或常用邮箱,可用于登<br/>录和找回密码,注册成功后,所有百度产品通用");
        });

        //密码栏获得焦点(mainform1)
        $(".password,.password1").focus(function() {
            $(".password").removeClass("errorC");
            $(this).removeClass("checkedN");

            $(".error3").hide();
            if ($(".error1").css("display") == "block" && $(".error2").css("display") == "block") {
                $("#mz_Float").css("top", "147px");
            } else if ($(".error1").css("display") == "block" || $(".error2").css("display") == "block") {
                $("#mz_Float").css("top", "147px");
            } else {
                $("#mz_Float").css("top", "147px");
            }

            $("#mz_Float").find(".bRadius2").html("长度为6~14个字符<br/>支持数字,大小写字母和标点符号<br/>不允许有空格");
        });

        //验证码栏获得焦点
        $(".kapkey").focus(function() {
            $(".kapkey").removeClass("errorC");
            $(".right3").removeClass("checkedN");
            $(".error2").hide();
            if ($(".error1").css("display") == "block") {
                $("#mz_Float2").css("top", "222px");
            } else {
                $("#mz_Float2").css("top", "222px");
            }

            $("#mz_Float2").find(".bRadius3").html("请输入您手机短信中的激活码");
        });

        $('.sub-btn1').click(function() {
            if (ok1 && ok2 && ok3) {
                $('.mainForm1').submit(function() {
                    window.open("login2.html"); //注册成功转到已登录界面

                })

            } else {
                alert('注册失败,请填写完整信息！'); ////未注册成功弹出窗口

                return false;
            }
        });
    });
    // 邮箱注册
    //mainForm2
    //密码是否可见(mainform2)
    $(".pwdBtnShowN").click(function() {
        if ($(".pwdBtnShowN").attr("isshow") == "false") {
            $(".pwdBtnShowN i").css("background-position", "-60px -93px");
            $(".passwordN").hide();
            $(".password1N").val($(".passwordN").val());
            $(".password1N").show();
            $(".pwdBtnShowN").attr("isshow", "true");
        } else {
            $(".pwdBtnShowN i").css("background-position", "-30px -93px");
            $(".password1N").hide();
            $(".passwordN").val($(".password1N").val());
            $(".passwordN").show();
            $(".pwdBtnShowN").attr("isshow", "false");
        }

    });

    $(function() {

        var ok4 = false;
        var ok5 = false;
        var ok6 = false;

        //邮箱栏获得焦点
        $(".email").focus(function() {
            $(".email").removeClass("errorC");
            $(".right").removeClass("checkedN");
            $(".error4").hide();
            if ($(".error1").css("display") == "block" && $(".error3").css("display") == "block") {
                $("#mz_Float2").css("top", "89px");
            } else if ($(".error1").css("display") == "block" || $(".error3").css("display") == "block") {
                $("#mz_Float2").css("top", "89px");
            } else {
                $("#mz_Float2").css("top", "89px");
            }

            $("#mz_Float2").find(".bRadius3").html("请输入中国大陆手机号或常用邮箱,可用于登<br/>录和找回密码,注册成功后,所有百度产品通用");
        });
        //密码栏获得焦点(mainform2)
        $(".passwordN,.password1N").focus(function() {
            $(".passwordN").removeClass("errorC");
            $(this).removeClass("checkedN");
            $(".error3").hide();
            if ($(".error1").css("display") == "block") {
                $("#mz_Float").css("top", "147px");
            } else {
                $("#mz_Float").css("top", "147px");
            }

            $("#mz_Float").find(".bRadius2").html("长度为6~14个字符<br/>支持数字,大小写字母和标点符号<br/>不允许有空格");
        });
        //验证码栏获得焦点
        $(".kapkeyN").focus(function() {
            $(".kapkeyN").removeClass("errorC");
            $(".right3").removeClass("checkedN");
            $(".error2").hide();
            if ($(".error1").css("display") == "block") {
                $("#mz_Float2").css("top", "222px");
            } else {
                $("#mz_Float2").css("top", "222px");
            }

            $("#mz_Float2").find(".bRadius3").html("请输入图片中的字符，不区分大小写");
        });


        //////////////////////////
        //验证码栏失去焦点
        $(".kapkeyN").blur(function() {
            reg = /^.*[\u4e00-\u9fa5]+.*$/;

            if ($(".kapkeyN").val() == "") {
                $(".kapkeyN").addClass("errorC");
                $(".error2").html("请您填写验证码");
                $(".error2").css("display", "block");
            } else if ($(".kapkeyN").val().length < 4) {
                $(".kapkeyN").addClass("errorC");
                $(".error2").html("验证码长度有误！");
                $(".error2").css("display", "block");
            } else if ($(".kapkeyN").val() != code.toLowerCase())

            {
                $(".kapkeyN").addClass("errorC");
                $(".error2").html("验证码有误");
                $(".error2").css("display", "block");
            } else if (reg.test($(".kapkeyN").val())) {
                $(".kapkeyN").addClass("errorC");
                $(".error2").html("验证码里无中文！");
                $(".error2").css("display", "block");
            } else {
                $(".right3").addClass("checkedN");
                ok6 = true;
            }
        });
        //密码栏失去焦点(mainform2)
        $(".passwordN,.password1N").blur(function() {
            reg1 = /^.*[\d]+.*$/;
            reg2 = /^.*[A-Za-z]+.*$/;
            reg3 = /^.*[_@#%&^+-/*\/\\]+.*$/; //验证密码
            if ($(".pwdBtnShow").attr("isshow") == "false") {
                var Pval = $(".passwordN").val();
            } else {
                var Pval = $(".password1N").val();
            }

            if (Pval == "") {
                $(".passwordN").addClass("errorC");
                $(".pw-strength2").css("display", "block");
                $(".error3").html("请您填写密码");
                $(".error3").css("display", "block");
            } else if (Pval.length > 16 || Pval.length < 6) {
                $(".passwordN").addClass("errorC");
                $(".right2").css("display", "none");
                $(".pw-strength2").css("display", "block");
                $(".error3").html("密码应为6-14个字符，区分大小写");
                $(".error3").css("display", "block");
            } else if (!((reg1.test(Pval) && reg2.test(Pval)) || (reg1.test(Pval) && reg3.test(Pval)) || (reg2.test(Pval) && reg3.test(Pval)))) {
                $(".passwordN").addClass("errorC");
                // $(".pw-strength").css("display","block");
                //$(".error3").html("请重新设置，试试数字、字母、符号组合");
                $(".error3").css("display", "block");
            } else {
                $(".right2").css("display", "block");
                $(".right2").addClass("checkedN2");
                ok5 = true;
            }
        });
        /////////////////////////密码强度
        $(function() {
            $('.pwd2').keyup(function() {
                var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
                var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
                var enoughRegex = new RegExp("(?=.{6,}).*", "g");
                $(".right2").css("display", "block");
                if (false == enoughRegex.test($(this).val())) {
                    $('#level2').removeClass('pw-weak2');
                    $('#level2').removeClass('pw-medium2');
                    $('#level2').removeClass('pw-strong2');
                    $('#level2').addClass(' pw-defule2');
                    //密码小于六位的时候，密码强度图片都为灰色 
                } else if (strongRegex.test($(this).val())) {
                    $('#level2').removeClass('pw-weak2');
                    $('#level2').removeClass('pw-medium2');
                    $('#level2').removeClass('pw-strong2');
                    $(".pw-strength2").css("display", "block");
                    $(".right2").addClass("checkedN2");
                    $(".checkedN2").html("您的密码很安全,请牢记！");
                    $('#level2').addClass(' pw-strong2');
                    //密码为八位及以上并且字母数字特殊字符三项都包括,强度最强 
                } else if (mediumRegex.test($(this).val())) {
                    $('#level2').removeClass('pw-weak2');
                    $('#level2').removeClass('pw-medium2');
                    $('#level2').removeClass('pw-strong2');
                    $('#level2').addClass(' pw-medium2');
                    $(".pw-strength2").css("display", "block");
                    $(".right2").addClass("checkedN2");
                    $(".checkedN2").html("您的密码还可以更复杂些");
                    //密码为七位及以上并且字母、数字、特殊字符三项中有两项，强度是中等 
                } else {
                    $('#level2').removeClass('pw-weak2');
                    $('#level2').removeClass('pw-medium2');
                    $('#level2').removeClass('pw-strong2')
                    $(".pw-strength2").css("display", "block");
                    $('#level2').addClass('pw-weak2');
                    $(".right2").css("display", "none");
                    $(".error3").html("请重新设置,试试数字、字母、符号组合");
                    //如果密码为6为及以下，就算字母、数字、特殊字符三项都包括，强度也是弱的 
                }
                return true;
            });
        })

        //邮箱栏键盘操作
        $(".email").keyup(function() { //键盘监听keyup,keydown,keypress
            var emailVal = $(".email").val();
            emailValN = emailVal.replace(/\s/g, ''); //去空
            emailValN = emailValN.replace(/[\u4e00-\u9fa5]/g, ''); //屏蔽中文
            if (emailValN != emailVal) {
                $(".email").val(emailValN);
            }

            var mailVal = emailValN.split("@");
            var mailHtml = mailVal[0];
            if (mailHtml.length > 15) {
                mailHtml = mailHtml.slice(0, 15) + "..."; //字数超加省略
            }

            for (var i = 1; i < 6; i++) {
                var M = $(".item" + i).attr("data-mail");
                $(".item" + i).html(mailHtml + M);
            }
        });

        //邮箱提示
        $(".item").click(function() {
            var a = $(".email").val();
            var b = $(this).attr("data-mail");
            $(".email").val(a + b);
            $(".email").trigger("focus"); //setTimeout($(".email").("focus") );效果同，时间设多少无所谓
        });


        $(".email").click(function() {
            if ($(".error1").css("display") == "block" && $(".error3").css("display") == "block") {
                $(".mail").css("top", "229px");
            } else if ($(".error1").css("display") == "block" || $(".error3").css("display") == "block") {
                $(".mail").css("top", "229px");
            } else {
                $(".mail").css("top", "229px");
            }
            $(".mail").show();
            return false;
        });
        $(document).click(function() {
            $(".mail").hide();
        });

        //邮箱栏失去焦点
        $(".email").blur(function() {
            reg = /^\w+[@]\w+((.com)|(.net)|(.cn)|(.org)|(.gmail))$$/;
            if ($(".email").val() == "") {
                $(".email").addClass("errorC");
                $(".error4").html("邮箱不能为空!");
                $(".error4").css("display", "block");
            } else if (!reg.test($(".email").val())) {
                $(".email").addClass("errorC");
                $(".error4").html("您填写的邮箱格式有误,请重新输入！");
                $(".error4").css("display", "block");
            } else {
                $(".right").addClass("checkedN");
                ok4 = true;
            }
        });
        $('.sub-btn2').click(function() {
            if (ok6 && ok5 && ok4) {
                $('.mainForm2').submit(function() {
                    window.open("login2.html");

                })


            } else {
                alert('注册失败,请填写完整信息！');

                return false;
            }
        });
    });
});

/////////////图片验证码
function showCheck(a) { /* 显示验证码图片 */
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 1000, 1000);
    ctx.font = "80px Arial";
    ctx.fillText(a, 0, 100);
}

var code; //在全局 定义验证码      
function createCode() {
    code = "";
    var codeLength = 4; //验证码的长度
    var selectChar = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');

    for (var i = 0; i < codeLength; i++) {
        var charIndex = Math.floor(Math.random() * 60);
        code += selectChar[charIndex];
    }
    if (code.length != codeLength) {
        createCode();
    }
    showCheck(code);
}

$(document).ready(function() {

        createCode();


    })
    //    
    ///////////////////
    // 登录界面
jQuery(document).ready(function($) {
    var $form_modal = $('.cd-user-modal'),
        $form_login = $form_modal.find('#cd-login'),
        $form_signup = $form_modal.find('#cd-signup'),
        $form_modal_tab = $('.cd-switcher'),
        $tab_login = $form_modal_tab.children('li').eq(0).children('a'),
        $tab_signup = $form_modal_tab.children('li').eq(1).children('a'),
        $main_nav = $('.main_nav');

    //弹出窗口 
    $main_nav.on('click', function(event) {

        if ($(event.target).is($main_nav)) {
            // on mobile open the submenu 
            $(this).children('li').toggleClass('is-visible');
        } else {
            // on mobile close submenu 
            $main_nav.children('li').removeClass('is-visible');
            //show modal layer 
            $form_modal.addClass('is-visible');
            //show the selected form 
            ($(event.target).is('.cd-signup')) ? signup_selected(): login_selected();
        }

    });

    //关闭弹出窗口 
    $('.cd-user-modal').on('click', function(event) {
        if ($(event.target).is($form_modal) || $(event.target).is('.cd-close-form')) {
            $form_modal.removeClass('is-visible');
        }
    });
    //使用Esc键关闭弹出窗口 
    $(document).keyup(function(event) {
        if (event.which == '27') {
            $form_modal.removeClass('is-visible');
        }
    });

    //切换表单 
    $form_modal_tab.on('click', function(event) {
        event.preventDefault();
        ($(event.target).is($tab_login)) ? login_selected(): signup_selected();
    });

    function login_selected() {
        $form_login.addClass('is-selected');
        $form_signup.removeClass('is-selected');
        $tab_login.addClass('selected');
        $tab_signup.removeClass('selected');
    }

    function signup_selected() {
        $form_login.removeClass('is-selected');
        $form_signup.addClass('is-selected');
        $tab_login.removeClass('selected');
        $tab_signup.addClass('selected');
    }

});
///////////////////
