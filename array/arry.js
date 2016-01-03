var ary = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a"];
var count = 1;
var element = [];
var repeatTimes = [];//存放数组ary中每个不同元素的出现的次数

for (var i = 0; i < ary.length; i++) {
    for (var x= i+1; x < ary.length; x++) {
        if (ary[i] == ary[x]) {
            count++;//用来计算与当前这个元素相同的个数
              ary.splice(x, 1); //没找到一个相同的元素，就要把它移除掉，  
                    x--;    

        }

    }
    element[i] = ary[i];//将当前的元素存入到element数组中 
    repeatTimes[i] = count;//并且将有多少个当前这样的元素的个数存入repeatTimes数组中
    count = 1;
}
var newsum = new Array();
for (var item in repeatTimes) {
    newsum[item] = repeatTimes[item];
}
newsum.sort();
//算出出现次数最多的元素及个数  
for (var i = 0; i < repeatTimes.length; i++) {
    if (repeatTimes[i] == newsum[newsum.length - 1]) {
        document.writeln("出现最多的元素是：" + element[i] + "次数为：" + repeatTimes[i]);
        document.writeln('<br/>');
      
    }
}
//算出出现次数最多元素在数组中的位置  
var list = [];
    var sameElement = i,
        theSame = false;
    for (var j = i + 1; j < ary.length; j++) {
        if (ary[i] == ary[j]) {
            list.push(j);
            sameElement += "," + j;
            theSame = true;
        }
    }
    if (theSame) {
        document.writeln("数组中值为" + ary[i] + "相同元素的位置为" + sameElement);

    }

