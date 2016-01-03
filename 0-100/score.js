var Inputscore = document.getElementById("Inputscore");
Inputscore.focus();

function student() {
    // 获取输入的分数

    var test = Inputscore.value;
    var level = 11 - Math.ceil(test / 10) + '等生';
    var over = '分数不正确...';
    var negative = '请输入您的分数...';
    var worngform = '输入格式不正确,请输入数字';

    if (test <= 0) {
        Inputscore.value = "";
        alert(negative);



    } else if (test > 100) {
        Inputscore.value = "";
        alert(over);



    } else if (isNaN(test)) {
        Inputscore.value = "";

        alert(worngform);


    } else {
        alert(level);

    }



}
