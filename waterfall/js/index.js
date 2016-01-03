window.onload = function() {
        PBL('wrap', 'box');
//模拟数据 
        var data = [{
            'src': '1.jpg',
            'creatname':'Loralie Wareing',
            'titletxt':'Painting'
        }, {
            'src': '2.jpg',
            'creatname':'Loralie Wareing',
            'titletxt':'Painting'
        }, {
            'src': '3.jpg',
            'creatname':'Loralie Wareing',
            'titletxt':'Painting'
        }, {
            'src': '4.jpg',
           'creatname':'Loralie Wareing',
           'titletxt':'Painting'
        }, {
            'src': '5.jpg',
            'creatname':'Loralie Wareing',
            'titletxt':'Painting'
        }, {
            'src': '6.jpg',
           'creatname':'Loralie Wareing',
           'titletxt':'Painting'
        }, {
            'src': '7.jpg',
            'creatname':'Loralie Wareing',
            'titletxt':'Painting'
        }, {
            'src': '8.jpg',
            'creatname':'Loralie Wareing',
            'titletxt':'Painting'
        }, {
            'src': '9.jpg',
            'creatname':'Loralie Wareing',
            'titletxt':'Painting'
        }, {
            'src': '10.jpg',
             'creatname':'Loralie Wareing',
             'titletxt':'Painting'
        },
        {
            'src': '11.jpg',
            'creatname':'Loralie Wareing',
            'titletxt':'Painting'
        },
        {
            'src': '12.jpg',
            'creatname':'Loralie Wareing',
        },
        {
            'src': '13.jpg',
            'creatname':'Loralie Wareing',
            'title-txt':'Painting'
        },
        {
            'src': '14.jpg',
            'creatname': 'Loralie Wareing',
            'titletxt':'Painting'
           
        }];


        ///设置滚动加载的内容
        window.onscroll = function() {
            //校验数据
            if (getCheck()) {
                var wrap = document.getElementById('wrap');
                for (i in data) {
                    // 创建div
                    var box = document.createElement('div');
                    box.className = 'box';
                    wrap.appendChild(box);
                    
                    var info = document.createElement('div');
                    info.className = 'info';
                    box.appendChild(info);
                   
                    var pic = document.createElement('div');
                    pic.className = 'pic';
                    info.appendChild(pic);
                    
                    var img = document.createElement('img');
                    img.src = 'img/' + data[i].src;
                    img.style.height = 'auto';
                    pic.appendChild(img);
                   
                    var title = document.createElement('div');
                    title.className = 'title';
                    info.appendChild(title);
                    
                    var a = document.createElement('a');
                    a.className = 'inner';
                    title.appendChild(a);

                    var userimage = document.createElement('div');
                    userimage.className = 'userimage';
                    a.appendChild(userimage);

                    var creatname = document.createElement('div');
                    creatname.className = 'creatname';
                    creatname.innerHTML = data[i].creatname;
                    a.appendChild(creatname);

                    var titletxt = document.createElement('div');
                    titletxt.className = 'titletxt';
                    titletxt.innerHTML = data[i].titletxt;
                    a.appendChild(titletxt);

                     var heightcon = document.createElement('div');
                    heightcon.className = 'height-con';
                    userimage.appendChild(heightcon);

                    var img2 = document.createElement('img');
                    img2.src = 'img/' + 'default.png';
                    img2.style.height = '30px';
                    heightcon.appendChild(img2);
                }
                PBL('wrap', 'box');
            }
        }
    }
   ////瀑布流主要函数 
function PBL(wrap, box) {
  /// 获得外层以及每一个box 
    var wrap = document.getElementById(wrap);
    var boxs = getClass(wrap, box);
    //获得屏幕可显示的列数 
    var boxW = boxs[0].offsetWidth;
    var colsNum = Math.floor(document.documentElement.clientWidth / boxW);
    wrap.style.width = boxW * colsNum + 'px'; 
    //循环出所有的box并按照瀑布流排列 
    var everyH = []; ////定义每一列高度
    for (var i = 0; i < boxs.length; i++) {
        if (i < colsNum) {
            everyH[i] = boxs[i].offsetHeight;
        } else {
            var minH = Math.min.apply(null, everyH); //获得最小的列的高度
            var minIndex = getIndex(minH, everyH); //获得最小列的索引
            getStyle(boxs[i], minH, boxs[minIndex].offsetLeft, i);
            everyH[minIndex] += boxs[i].offsetHeight; //更新最小列的高度 
        }
    }
}
// 获取类元素
function getClass(wrap, className) {
    var obj = wrap.getElementsByTagName('*');
    var arr = [];
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].className == className) {
            arr.push(obj[i]);
        }
    }
    return arr;
}
// 获得最小列的索引
function getIndex(minH, everyH) {
    for (index in everyH) {
        if (everyH[index] == minH) return index;
    }
}
// 校验数据
function getCheck() {
    var documentH = document.documentElement.clientHeight;
    var scrollH = document.documentElement.scrollTop || document.body.scrollTop;
    return documentH + scrollH >= getLastH() ? true : false;
}
// 获得最后一个box所在列的高度 
function getLastH() {
    var wrap = document.getElementById('wrap');
    var boxs = getClass(wrap, 'box');
    return boxs[boxs.length - 1].offsetTop + boxs[boxs.length - 1].offsetHeight;
}
//设置加载内容的样式 
var getStartNum = 0; 
function getStyle(box, top, left, index) {
    if (getStartNum >= index) return;
    $(box).css({
        'position': 'absolute',
        'top': top,
        "left": left,
        "opacity": "0"
    });
    $(box).stop().animate({
        "opacity": "1"
    }, 999);
    getStartNum = index; 
}
// 返回顶部
$(function() {
        showScroll();

        function showScroll() {
            $(window).scroll(function() {
                var scrollValue = $(window).scrollTop();
                scrollValue > 500 ? $('div[class=scroll]').fadeIn() : $('div[class=scroll]').fadeOut();
            });
            $('#scroll').click(function() {
                $("html,body").animate({
                    scrollTop: 0
                }, 200);
            });
        }
    })