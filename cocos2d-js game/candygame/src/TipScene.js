
var TipLayer;
TipLayer = cc.Layer.extend({
    sprite: null,
    ctor: function () {

        this._super();

        var size = cc.winSize;
        //////游戏说明界面
        var TipStartScene = ccs.csLoader.createNode(res.TipScene_json);
        this.addChild(TipStartScene);
        /////开始按钮返回游戏开始界面
        var TipStartButton = TipStartScene.getChildByName("Button_1");
        ///////////在完成一轮游戏返回到游戏开始界面的时候，再点开游戏说明的界面，点击返回，无法返回到游戏开始的界面是什么问题呢？

        TipStartButton.addTouchEventListener(function(){
            cc.audioEngine.playEffect(res.buttonmusic_mp3 ,false);
            cc.director.runScene(new GameStartScene());
           // console.log("TipClick.......");
        });

        return true;
    }
});

var TipScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new TipLayer();
        this.addChild(layer);
    }
});

