var num = 0;
var result = 0;
var numbershow = "0";
var stateInput = false; //判断是否是输入状态
var mode = 0; ///判断计算状态
var numScreen = document.getElementById("numScreen"); ///获取当前输入的值

function number(num) {
    var str = String(numScreen.value);
    str = (str != "0") ? ((stateInput == 0) ? str : "") : "";
    str = str + String(num);
    numScreen.value = str;
    stateInput = false;
}

function dzero() {
    var str = String(numScreen.value);
    str = (str != "0") ? ((stateInput == 0) ? str + "00" : "0") : "0"; //如果当前值不是"0"，且状态为0，则返回当str+"00"，否则返回"0"; 
    numScreen.value = str;
    stateInput = false;
}

function dot() {
    var str = String(numScreen.value);
    str = (str != "0") ? ((stateInput == 0) ? str : "0") : "0"; //如果当前值不是"0"，且状态为0，则返回当前值，否则返回"0"; 
    for (i = 0; i <= str.length; i++) { //判断是否已经有一个点号 
        if (str.substr(i, 1) == ".") return false; //如果有则不再插入 
    }
    str = str + ".";
    numScreen.value = str;
    stateInput = false;
}
////计算输入的数值
function calculator() {
    numbershow = Number(numScreen.value);
    if (num != 0) {
        switch (mode) { ///判断输入的计算状态
            case "plus_mode":
                result = num + numbershow;
                break; // 执行“+”加法
            case "minus_mode":
                result = num - numbershow;
                break; // 执行“-”减法
            case "times_mode":
                result = num * numbershow;
                break; //执行“×”乘法
            case "divide_mode":
                if (numbershow != 0) {
                    result = num / numbershow; ///执行“/”除法
                } else {
                    alert("被除数不能为零！");

                }
                break;
            case "persent_mode":
                result = num % numbershow;
                break;
            case "sin_mode":
                result = Math.sin(num / 180 * Math.PI);
                break;
            case "cos_mode":
                result = Math.cos(num / 180 * Math.PI);
                break;
            case "tan_mode":
                result = Math.tan(num / 180 * Math.PI);
                break;



        }

    } else {
        result = numbershow;
    }
    numbershow = String(result);
    numScreen.value = numbershow;
    num = result; //保存当前计算出的数值
}

function plus() { //加法 
    calculator();
    stateInput = true;
    mode = "plus_mode";
}

function minus() { //减法 
    calculator();
    stateInput = true;
    mode = "minus_mode";
}

function times() { //乘法 
    calculator();
    stateInput = true;
    mode = "times_mode";
}

function divide() { //除法 
    calculator();
    stateInput = true;
    mode = "divide_mode";
}

function persent() { //求余 
    calculator();
    stateInput = true;
    mode = "persent_mode";
}

function sin() { //sin函数
    calculator();
    stateInput = true;
    mode = "sin_mode";
}

function cos() { //cos函数
    calculator();
    stateInput = true;
    mode = "cos_mode";
}

function tan() { //tan函数 
    calculator();
    stateInput = true;
    mode = "tan_mode";
}


function equal() {
    calculator(); //等于 
    stateInput = true;
    num = 0;
    result = 0;
    mode = 0;
    numbershow = "0";
}


function deletenumber() { ////退格删除
    var str = String(numScreen.value);
    str = (str != "0") ? str : "";
    str = str.substr(0, str.length - 1);
    str = (str != "") ? str : "0";
    numScreen.value = str;
}

function clearnumber() { //全部清除
    num = 0;
    result = 0;
    numbershow = "0";
    numScreen.value = "0";
}
