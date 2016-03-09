
var GameStartLayer;
GameStartLayer = cc.Layer.extend({
    sprite: null,
    ctor: function () {

        this._super();


        var size = cc.winSize;
        ////////背景音乐
        cc.audioEngine.playMusic(res.backgroundmusic1_mp3,true);
        var effectVolume = cc.audioEngine.getEffectsVolume();
        var volume = cc.audioEngine.getMusicVolume(0.3);
        //////开始游戏
        var StartScene = ccs.csLoader.createNode(res.StartScene_json);
        this.addChild(StartScene);
        /////开始按钮
        var StartButton = StartScene.getChildByName("Button_1");
        ////游戏说明按钮
        var TipButton = StartScene.getChildByName("Button_3");
        ////进入游戏界面
        var tranToGame = new cc.TransitionFade(1,new GameScene());
        StartButton.addClickEventListener(function(){
            cc.audioEngine.playEffect(res.buttonmusic_mp3 ,false);
            cc.director.runScene(tranToGame);
            cc.audioEngine.stopMusic(true);
        });

        //////进入游戏说明界面
        var tranToTip = new cc.TransitionSlideInR(1,new TipScene());
        TipButton.addClickEventListener(function(){
            cc.audioEngine.playEffect(res.buttonmusic_mp3 ,false);
            cc.director.runScene(tranToTip);

        });



        return true;
    }
});

var GameStartScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new GameStartLayer();
        this.addChild(layer);
    }
});

