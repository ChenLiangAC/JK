var fontcolor = document.getElementsByClassName('font');
var bordercolor = document.getElementsByClassName('b-color');
var bb1 = document.getElementById("bb1");

function Changecolor(bcolor, fcolor,dcolor) {



    bb1.style.backgroundColor = bcolor;

    for (var i = 0; i < fontcolor.length; i++) {
        fontcolor[i].style.color = fcolor;
    }
    for (var i = 0; i < bordercolor.length; i++) {
        bordercolor[i].style.borderColor = dcolor;
    }




}


////////设置cookie,获取页面皮肤
function get_cookie(name_to_get) {

    var cookie_pair
    var cookie_name
    var cookie_value
    var cookie_array = document.cookie.split("; ")
    for (counter = 0; counter < cookie_array.length; counter++) {
        cookie_pair = cookie_array[counter].split("=")
        cookie_name = cookie_pair[0]
        cookie_value = cookie_pair[1]
        if (cookie_name == name_to_get) {
            return unescape(cookie_value)
        }
    }
    return null
}
var bg_color = get_cookie("bgColor_cookie")
var f_color = get_cookie("Color_cookie")
var d_color = get_cookie("bColor_cookie")
    ////存入当前颜色值
function set_color(color_val) {
    set_cookie("bgColor_cookie", color_val, 365, "/")
    set_cookie("Color_cookie", color_val, 365, "/")
    set_cookie("bColor_cookie", color_val, 365, "/")
}
//将当前皮肤存到cookie
function set_cookie(cookie_name, cookie_value, cookie_expire, cookie_path, cookie_domain, cookie_secure) {
    var cookie_string = cookie_name + "=" + cookie_value
    if (cookie_expire) {
        var expire_date = new Date()
        var ms_from_now = cookie_expire * 24 * 60 * 60 * 1000
        expire_date.setTime(expire_date.getTime() + ms_from_now)
        var expire_string = expire_date.toGMTString()
        cookie_string += "; expires=" + expire_string
    }

    if (cookie_path) {
        cookie_string += "; path=" + cookie_path
    }
    if (cookie_domain) {
        cookie_string += "; domain=" + cookie_domain
    }
    if (cookie_secure) {
        cookie_string += "; true"
    }
    document.cookie = cookie_string
}
if (bg_color, f_color,d_color) {
    bb1.style.backgroundColor = bg_color
    for (var i = 0; i < fontcolor.length; i++) {
        fontcolor[i].style.color = f_color;
    }
       for (var i = 0; i < bordercolor.length; i++) {
        bordercolor[i].style.borderColor = d_color;
    }


}
