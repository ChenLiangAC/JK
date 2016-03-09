/**
 * Created by Administrator on 2016/1/25.
 */

var GameLayer;
GameLayer = cc.Layer.extend({
    isMouseDown: false,
    lives01:null,   // 生命值
    number:null,   // 生命值
    score:0,  // 分数赋值为0
    scoreBoard:null, // 分数
    _candys:null,/////糖果
    _boos:null,/////骷髅和蝙蝠
    sprite:null,
    _pumpkin:null,/////南瓜
    GamePlayScene:null,
    _bullets:null,///////子弹
    ctor: function () {

        this._super();
        var size = cc.winSize;
        ////////背景音乐
        cc.audioEngine.playMusic(res.backgroundmusic2_mp3,true);
        var effectVolume = cc.audioEngine.getEffectsVolume();
        var volume = cc.audioEngine.getMusicVolume(0.3);
        //////游戏界面
       this.GamePlayScene = ccs.csLoader.createNode(res.GameScene_json);
        this.addChild(this.GamePlayScene);

        //////返回和结束游戏
        var btntostart= this.GamePlayScene.getChildByName("Button_backtostart_0");
        var btntoend= this.GamePlayScene.getChildByName("Button_backtostart");

        ///////返回游戏开始界面
        var GametranToStart = new cc.TransitionMoveInL(1,new GameStartScene());
        btntostart.addClickEventListener(function(){
            cc.director.pushScene(GametranToStart);
            cc.audioEngine.playEffect(res.buttonmusic_mp3 ,false);
        });
        /////直接结束游戏
        var GametranToEnd = new cc.TransitionMoveInR(1,new OverScene());
        btntoend.addClickEventListener(function(){
            cc.director.pushScene(GametranToEnd);
            cc.audioEngine.playEffect(res.buttonmusic_mp3 ,false);
        });
        ////分数，生命值，子弹，糖果，敌人初始化
        this.number = 60;
        this.score = 0;
        this._bullets =[];
        this._candys =[];
        this._boos =[];
        //分数
        this.scoreBoard= new cc.LabelTTF("0","piron",50);
        this.scoreBoard.setAnchorPoint(0,1);
        this.scoreBoard.setPosition(25,size.height-78);
        this.addChild(this.scoreBoard,6);

        //生命值
        this.lives01= new cc.LabelTTF(this.number+"'","piron",50);
        this.lives01.setAnchorPoint(1,1);
        this.lives01.setPosition(size.width-15,size.height-78);
        this.addChild(this.lives01,5);
        //////南瓜
        this._pumpkin= this.GamePlayScene.getChildByName("Sprite_1");

     ////////给南瓜绑定触摸移动事件
        var listener1 = cc.EventListener.create({//创建一个事件监听器
            event: cc.EventListener.TOUCH_ALL_AT_ONCE,//触摸事件
            onTouchesMoved: function (touches, event) {//移动触点时的函数
                var touch = touches[0];//第一个触点
                var delta = touch.getDelta();//获得触点坐标改变量
                var node =event.getCurrentTarget();
                var diff = cc.pAdd(delta, node.getPosition());//触点该变量+主角位置
                node.setPosition(diff);//设置主角位置
                if(node.x<0){
                    node.x=0;
                }
                if(node.x>size.width){
                    node.x=size.width;
                }
                if(node.y<0){
                    node.y=0;
                }
                if(node.y>size.height){
                    node.y=size.height;
                }
            }
        }, this);
        cc.eventManager.addListener(listener1, this._pumpkin);
        ///////////////////////////////////////这里觉得重复代码太多了，怎么简化呢？
        ////定时器每0.3秒执行子弹的动作
        this.schedule(this.addBullet,0.3);
        ////定时器每1秒执行黄色棒棒糖的动作
        this.schedule(this.addCandyYellow,1);
        ////定时器每1.3秒执行粉色棒棒糖的动作
        this.schedule(this.addCandyPink,1.3);
        ////定时器每1.5秒执行蓝色棒棒糖的动作
        this.schedule(this.addCandyBlue,1.5);
        ////定时器每2.1秒执行粉红色棒棒糖的动作
        this.schedule(this.addCandyRed,2.1);
        ////定时器每2.2秒执行红色波板糖的动作
        this.schedule(this.addCandyDarkRed,2.2);
        ////定时器每1.5秒执行蝙蝠的动作
        this.schedule(this.addCandybat,1.5);
        ////定时器每1秒执行黄色方糖的动作
        this.schedule(this.addCandyYellowsugar,1);
        ////定时器每1秒执行骷髅的动作
        this.schedule(this.addCandyboon,1);
        ////定时器每1秒执绿色方糖的动作
        this.schedule(this.addCandyGreensugar,1);
        ////定时器每2秒执行蓝色方糖的动作
        this.schedule(this.addCandyBulesugar,2);
        ////定时器执行销毁子弹，糖果，敌人的动作和加分，生命值为0时结束游戏
        this.schedule(this.updateGame);
        /////////////////////////////////////////////////////////
        return true;
    },
    //////添加子弹
    addBullet:function(){
    var winSize = cc.winSize;
    var origin = cc.director.getVisibleOrigin();
    // 获得南瓜的位置
    var pumpkinPosition = this._pumpkin.getPosition();
    // 子弹穿越屏幕要花费的秒数
    var bulletDuration = 1;

    // 创建一个子弹
    var bullet = this.GamePlayScene.getChildByName("Sprite_2");

    // 根据南瓜的位置，初始化子弹的位置
    bullet.setPosition(cc.p(pumpkinPosition.x-50,pumpkinPosition.y+bullet.getContentSize().height-400));

    // 第一个参数为移动到目标所需要花费的秒数，为了保持速度不变，需要按移动的距离与屏幕高度按比例计算出花费的秒数
    var actionMove = cc.MoveTo.create(bulletDuration * ((winSize.height - pumpkinPosition.y - bullet.getContentSize().height/2)/winSize.height),
        cc.p(pumpkinPosition.x, origin.y + winSize.height + bullet.getContentSize().height/2));
    // 设置一个回调函数，移动完毕后回调spriteMoveFinished（）方法。
    var actionMoveDone = new cc.CallFunc(this.spriteMoveFinished,this);
    // 让子弹执行动作
    bullet.runAction(new cc.Sequence(actionMove,actionMoveDone));
    // 为子弹设置标签，以后可以根据这个标签判断是否这个元素为子弹
    bullet.setTag(6);
        cc.audioEngine.playEffect(res.shootmusic_mp3 ,false);
    this._bullets.push(bullet);

},
///////////////////////////////////////////////这里开始代码重复太多了，这些元素都执行同样的动作，代码该怎么简化呢？
    //////////黄色棒棒糖
    addCandyYellow:function(){

        var candy1 = this.GamePlayScene.getChildByName("Sprite_5");
        var winSize = cc.winSize;
        // 设置敌机糖果随机出现的X轴的值
        var minX = candy1.getContentSize().width/2;
        var maxX = winSize.width - candy1.getContentSize().width/2;
        var rangeX = maxX - minX;
        var actualX = Math.random() * rangeX + minX;
        // 在一定范围内随机糖果的速度
        var minDuration = 10.5;
        var maxDuration = 4;
        var rangeDuration = maxDuration - minDuration;
        var actualDuration = Math.random() * rangeDuration + minDuration;
        candy1.setPosition(cc.p(actualX-50, winSize.height + candy1.getContentSize().height/2));
        var actionMove = cc.MoveTo.create(actualDuration ,cc.p(actualX, 0 - candy1.getContentSize().height));
        var actionMoveDone = new cc.CallFunc(this.spriteMoveFinished,this);
        candy1.runAction(new cc.Sequence(actionMove,actionMoveDone));
        candy1.setTag(1);

        this._candys.push(candy1);
    },
    //////////粉色棒棒糖
    addCandyPink:function(){

       var candy = this.GamePlayScene.getChildByName("Sprite_5_0");
       var winSize = cc.winSize;

        // 设置糖果随机出现的X轴的值
        var minX = candy.getContentSize().width/2;
        var maxX = winSize.width - candy.getContentSize().width/2;
        var rangeX = maxX - minX;
        var actualX = Math.random() * rangeX + minX;
        // 在一定范围内随机糖果的速度
        var minDuration = 11.5;
        var maxDuration = 4;
        var rangeDuration = maxDuration - minDuration;
        var actualDuration = Math.random() * rangeDuration + minDuration;
        candy.setPosition(cc.p(actualX-40, winSize.height + candy.getContentSize().height/2));
        var actionMove = cc.MoveTo.create(actualDuration ,cc.p(actualX, 0 - candy.getContentSize().height));
        var actionMoveDone = new cc.CallFunc(this.spriteMoveFinished,this);
        candy.runAction(new cc.Sequence(actionMove,actionMoveDone));
        candy.setTag(2);

        this._candys.push(candy);
    },
    //////////蓝色棒棒糖
    addCandyBlue:function(){

        var candy = this.GamePlayScene.getChildByName("Sprite_5_0_0");
        var winSize = cc.winSize;
        // 设置糖果随机出现的X轴的值
        var minX = candy.getContentSize().width/2;
        var maxX = winSize.width - candy.getContentSize().width/2;
        var rangeX = maxX - minX;
        var actualX = Math.random() * rangeX + minX;
        // 在一定范围内随机糖果的速度
        var minDuration = 11.5;
        var maxDuration = 4;
        var rangeDuration = maxDuration - minDuration;
        var actualDuration = Math.random() * rangeDuration + minDuration;
        candy.setPosition(cc.p(actualX+40, winSize.height + candy.getContentSize().height/2));
        var actionMove = cc.MoveTo.create(actualDuration ,cc.p(actualX, 0 - candy.getContentSize().height));
        var actionMoveDone = new cc.CallFunc(this.spriteMoveFinished,this);
        candy.runAction(new cc.Sequence(actionMove,actionMoveDone));
        candy.setTag(3);

        this._candys.push(candy);
    },
    //////////粉红色棒棒糖
    addCandyRed:function(){

        var candy = this.GamePlayScene.getChildByName("Sprite_5_0_6");
        var winSize = cc.winSize;

        // 设置糖果随机出现的X轴的值
        var minX = candy.getContentSize().width/2;
        var maxX = winSize.width - candy.getContentSize().width/2;
        var rangeX = maxX - minX;
        var actualX = Math.random() * rangeX + minX;
        // 在一定范围内随机糖果的速度
        var minDuration = 11.5;
        var maxDuration = 4;
        var rangeDuration = maxDuration - minDuration;
        var actualDuration = Math.random() * rangeDuration + minDuration;
        candy.setPosition(cc.p(actualX+60, winSize.height + candy.getContentSize().height/2));
        var actionMove = cc.MoveTo.create(actualDuration ,cc.p(actualX, 0 - candy.getContentSize().height));
        var actionMoveDone = new cc.CallFunc(this.spriteMoveFinished,this);

        candy.runAction(new cc.Sequence(actionMove,actionMoveDone));
        candy.setTag(4);

        this._candys.push(candy);
    },
    //////////红色波板糖
    addCandyDarkRed:function(){
        var candy = this.GamePlayScene.getChildByName("Sprite_5_0_2");
        var winSize = cc.winSize;

        // 设置糖果随机出现的X轴的值
        var minX = candy.getContentSize().width/2;
        var maxX = winSize.width - candy.getContentSize().width/2;
        var rangeX = maxX - minX;
        var actualX = Math.random() * rangeX + minX;
        // 在一定范围内随机糖果的速度
        var minDuration = 11.5;
        var maxDuration = 4;
        var rangeDuration = maxDuration - minDuration;
        var actualDuration = Math.random() * rangeDuration + minDuration;
        candy.setPosition(cc.p(actualX-30, winSize.height + candy.getContentSize().height/2));
        var actionMove = cc.MoveTo.create(actualDuration ,cc.p(actualX, 0 - candy.getContentSize().height));
        var actionMoveDone = new cc.CallFunc(this.spriteMoveFinished,this);

        candy.runAction(new cc.Sequence(actionMove,actionMoveDone));
        candy.setTag(5);

        this._candys.push(candy);
    },
    //////////蝙蝠
    addCandybat:function(){

        var candy = this.GamePlayScene.getChildByName("Sprite_5_0_4");
        var winSize = cc.winSize;

        // 设置敌人随机出现的X轴的值
        var minX = candy.getContentSize().width/2;
        var maxX = winSize.width - candy.getContentSize().width/2;
        var rangeX = maxX - minX;
        var actualX = Math.random() * rangeX + minX;
        // 在一定范围内随机敌人的速度
        var minDuration = 11.5;
        var maxDuration = 4;
        var rangeDuration = maxDuration - minDuration;
        var actualDuration = Math.random() * rangeDuration + minDuration;
        candy.setPosition(cc.p(actualX+120, winSize.height + candy.getContentSize().height/2));
        var actionMove = cc.MoveTo.create(actualDuration,cc.p(actualX+70, 0 - candy.getContentSize().height));
        var actionMoveDone = new cc.CallFunc(this.spriteMoveFinished,this);

        candy.runAction(new cc.Sequence(actionMove,actionMoveDone));
        candy.setTag(7);

        this._boos.push(candy);
    },
    //////////黄色方糖
    addCandyYellowsugar:function(){

        var candy = this.GamePlayScene.getChildByName("Sprite_5_0_1");
        var winSize = cc.winSize;

        // 设置糖果随机出现的X轴的值
        var minX = candy.getContentSize().width/2;
        var maxX = winSize.width - candy.getContentSize().width/2;
        var rangeX = maxX - minX;
        var actualX = Math.random() * rangeX + minX;
        // 在一定范围内随机糖果的速度
        var minDuration = 11.5;
        var maxDuration = 4;
        var rangeDuration = maxDuration - minDuration;
        var actualDuration = Math.random() * rangeDuration + minDuration;
        candy.setPosition(cc.p(actualX+10, winSize.height + candy.getContentSize().height/2));
        var actionMove = cc.MoveTo.create(actualDuration ,cc.p(actualX, 0 - candy.getContentSize().height));
        var actionMoveDone = new cc.CallFunc(this.spriteMoveFinished,this);
        candy.runAction(new cc.Sequence(actionMove,actionMoveDone));
        candy.setTag(9);

        this._candys.push(candy);
    },
    //////////绿色方糖
    addCandyGreensugar:function(){

        var candy = this.GamePlayScene.getChildByName("Sprite_5_0_7");
        var winSize = cc.winSize;

        // 设置糖果随机出现的X轴的值
        var minX = candy.getContentSize().width/2;
        var maxX = winSize.width - candy.getContentSize().width/2;
        var rangeX = maxX - minX;
        var actualX = Math.random() * rangeX + minX;
        // 在一定范围内随机糖果的速度
        var minDuration = 11.5;
        var maxDuration = 4;
        var rangeDuration = maxDuration - minDuration;
        var actualDuration = Math.random() * rangeDuration + minDuration;
        candy.setPosition(cc.p(actualX+180, winSize.height + candy.getContentSize().height/2+180));
        var actionMove = cc.MoveTo.create(actualDuration ,cc.p(actualX, 0 - candy.getContentSize().height));
        var actionMoveDone = new cc.CallFunc(this.spriteMoveFinished,this);
        candy.runAction(new cc.Sequence(actionMove,actionMoveDone));
        candy.setTag(10);

        this._candys.push(candy);
    },
    //////////骷髅
    addCandyboon:function(){
        var candy = this.GamePlayScene.getChildByName("Sprite_5_0_3");
        var winSize = cc.winSize;

        // 设置敌人随机出现的X轴的值
        var minX = candy.getContentSize().width/2;
        var maxX = winSize.width - candy.getContentSize().width/2;
        var rangeX = maxX - minX;
        var actualX = Math.random() * rangeX + minX;
        // 在一定范围内随机敌人的速度
        var minDuration = 11.5;
        var maxDuration = 4;
        var rangeDuration = maxDuration - minDuration;
        var actualDuration = Math.random() * rangeDuration + minDuration;
        candy.setPosition(cc.p(actualX, winSize.height + candy.getContentSize().height/2));
        var actionMove = cc.MoveTo.create(actualDuration ,cc.p(actualX, 0 - candy.getContentSize().height));
        var actionMoveDone = new cc.CallFunc(this.spriteMoveFinished,this);
        candy.runAction(new cc.Sequence(actionMove,actionMoveDone));
        candy.setTag(8);

        this._boos.push(candy);
    },
    //////////蓝色方糖
    addCandyBulesugar:function(){

        var candy = this.GamePlayScene.getChildByName("Sprite_5_0_5");
        var winSize = cc.winSize;

        // 设置糖果随机出现的X轴的值
        var minX = candy.getContentSize().width/2;
        var maxX = winSize.width - candy.getContentSize().width/2;
        var rangeX = maxX - minX;
        var actualX = Math.random() * rangeX + minX;
        // 在一定范围内随机糖果的速度
        var minDuration = 11.5;
        var maxDuration = 4;
        var rangeDuration = maxDuration - minDuration;
        var actualDuration = Math.random() * rangeDuration + minDuration;
        candy.setPosition(cc.p(actualX, winSize.height + candy.getContentSize().height/2));
        var actionMove = cc.MoveTo.create(actualDuration ,cc.p(actualX, 0 - candy.getContentSize().height));
        var actionMoveDone = new cc.CallFunc(this.spriteMoveFinished,this);
        candy.runAction(new cc.Sequence(actionMove,actionMoveDone));
        candy.setTag(11);

        this._candys.push(candy);
    },
    //////////////////////////////////////////////////////////////////////////////元素执行动作结束
    //////////更新游戏元素动作
    updateGame: function(){
        var targets2Delete = [];   // 添加敌机删除数组，相撞的会被存储在这，之后删除
        var pumpkinRect = this._pumpkin.getBoundingBox();
        var i;
        // 添加敌人数组，相撞的会被存储在这，之后删除
        var enemyBulletsDelete = [];
        // 与敌人碰撞，消除敌人
        // 遍历敌人
        for(i in this._boos){
            // 获取数组中的第i个敌人
            var enemyBulletsKill = this._boos[i];
            // 获得相应敌人的图片边界
            var enemyBulletRect = enemyBulletsKill.getBoundingBox();
            // 判断敌人图片是否和南瓜图片有交集的部分
            if (cc.rectIntersectsRect(enemyBulletRect,pumpkinRect)){
                enemyBulletsDelete.push(enemyBulletsKill);
                // 与敌人相撞减去50分，生命值减1
                this.score -= 50;
                this.scoreBoard.setString(this.score);

                this.reduceLives();
            }
            // 更新数值
            // 将有交集的敌人删除
            for(i in enemyBulletsDelete){
                // 将敌机子弹人删除数组中的内容删除
                var enemyBulletRemove = enemyBulletsDelete;
                var index =this._boos.indexOf(enemyBulletRemove);
                if(index > -1){
                    this._boos.splice(index, 1);
                }
                this.removeChild(enemyBulletRemove);
            }
            enemyBulletsKill = null;
        }
        /////// 敌人与子弹|| 碰撞，消除子弹|| 南瓜和敌人
        // 遍历所有敌人
        for(i in this._candys){

            // 获取第i个敌人
            var target = this._candys[i];
            // 获取相应敌人的图片边界
            var targetRect = target.getBoundingBox();
            // 我方子弹删除数组
            var bullets2Delete = [];
            // 敌人删除数组
            var targetRemove = [];
            // 判断敌人和糖果是否有交集
            if (cc.rectIntersectsRect(targetRect, pumpkinRect)){
                // 将有交集的敌人送入数组中

                targetRemove.push(target);
            }
            // 遍历删除数组中的内容并删除
            for(i in targetRemove){
                var targetAway = targetRemove;
                var index = this._candys.indexOf(targetAway);
                if(index > -1){
                    this._candys.splice(index, 1);
                }
                this.removeChild(targetAway);
            }
            // 子弹和敌人的碰撞检测，原理同上
            for(i in this._bullets){
                var bullet = this._bullets[i];
                var bulletRect = bullet.getBoundingBox();
                if(cc.rectIntersectsRect(bulletRect, targetRect)){
                    bullets2Delete.push(bullet);
                    // 每收集一个糖果则加上10分
                     this.score += 10;
                    // 更新数值
                    this.scoreBoard.setString(this.score);
                }
            }
            if(bullets2Delete.length > 0){
                targets2Delete.push(target);
            }
            for(i in bullets2Delete){
                var bullet = bullets2Delete;
                var index = this._bullets.indexOf(bullet);
                if(index > -1){
                    this._bullets.splice(index, 1);
                }
                this.removeChild(bullet);
            }
            bullets2Delete = null;
        }
        for(i in targets2Delete){
            var target = targets2Delete;
            var index = this._candys.indexOf(target);
            if(index > -1) {
                this._candys.splice(index, 1);
            }
            this.removeChild(target);
        }

        targets2Delete = null;
    },
    // 生命值
    reduceLives:function(){
        // 调用这个方法时number数减1
        this.number -= 1;
        // 更新生命值数值
        this.lives01.setString(this.number);
        // 生命值数值为0时结束游戏
        if (this.number == 0){
            ///结束游戏

            var gameover =new OverScene();
            gameover.setscore(this.score);
            var GameOverScene = new cc.TransitionFade(0.2,gameover);
            cc.director.runScene(GameOverScene);
        }
    },
    // 移除元素
    spriteMoveFinished:function(sprite){
        // 将元素移除出Layer
        this.removeChild(sprite, true);
        if(sprite.getTag()==1){
            // 把目标从数组中移除
            var index = this._candys.indexOf(sprite);
            if (index > -1) {
                this._candys.splice(index, 1);
            }
        } else if(sprite.getTag()==2){
            // 把目标从数组中移除
            var index = this._candys.indexOf(sprite);
            if (index > -1) {
                this._candys.splice(index, 1);
            }
        }else if(sprite.getTag()==3){
            // 把目标从数组中移除
            var index = this._candys.indexOf(sprite);
            if (index > -1) {
                this._candys.splice(index, 1);
            }
        }else if(sprite.getTag()==4){
            // 把目标从数组中移除
            var index = this._candys.indexOf(sprite);
            if (index > -1) {
                this._candys.splice(index, 1);
            }
        }else if(sprite.getTag()==5){
            // 把目标从数组中移除
            var index = this._candys.indexOf(sprite);
            if (index > -1) {
                this._candys.splice(index, 1);
            }
        }else if(sprite.getTag()==7){
            // 把目标从数组中移除
            var index = this._boos.indexOf(sprite);
            if (index > -1) {
                this._boos.splice(index, 1);
            }
        }else if(sprite.getTag()==8){
            // 把目标从数组中移除
            var index = this._boos.indexOf(sprite);
            if (index > -1) {
                this._boos.splice(index, 1);
            }
        }else if(sprite.getTag()==9){
            // 把目标从数组中移除
            var index = this._candys.indexOf(sprite);
            if (index > -1) {
                this._candys.splice(index, 1);
            }
        }else if(sprite.getTag()==10){
            // 把目标从数组中移除
            var index = this._candys.indexOf(sprite);
            if (index > -1) {
                this._candys.splice(index, 1);
            }
        }else if(sprite.getTag()==11){
            // 把目标从数组中移除
            var index = this._candys.indexOf(sprite);
            if (index > -1) {
                this._candys.splice(index, 1);
            }
        }
        else if(sprite.getTag()==6){
            // 把子弹从数组中移除
            var index = this._bullets.indexOf(sprite);
            if (index > -1) {
                this._bullets.splice(index, 1);
            }
        }
    }



});

var GameScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new GameLayer();
        this.addChild(layer);
        layer.ctor();

    }
});

