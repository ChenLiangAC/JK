/**
 * Created by Administrator on 2016/1/25.
 */

var OverLayer;
OverLayer = cc.Layer.extend({
    score:null,
    ctor: function () {

        this._super();
        var size = cc.winSize;
        //////结束游戏界面
        var OverPlayScene = ccs.csLoader.createNode(res.OverScene_json);
        this.addChild(OverPlayScene);
        /////返回开始游戏界面
        var backButton = OverPlayScene.getChildByName("Button_1");
        backButton.addClickEventListener(function(){
            var tranToGameStart = new cc.TransitionFade(1,new GameStartScene());
            cc.director.runScene(tranToGameStart);
            cc.audioEngine.playEffect(res.buttonmusic_mp3 ,false);
        });
        //最终分数
        this.score= new cc.LabelTTF("0","piron",40);
        this.score.setPosition(size.width/2+35,size.height/2-63);
        this.addChild(this.score);
        return true;
    },
    setscore:function(value){
    this.score.setString(value);
    }
});

var OverScene = cc.Scene.extend({
    _layer:null,
    ctor:function(){
        this._super();
        this._layer = new OverLayer();
        this.addChild(this._layer);
    },
    onEnter: function () {
        this._super();

    },
    setscore:function(value){
        this._layer.setscore(value);

    }

});

