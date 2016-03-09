var res = {
    StartScene_json : "res/StartScene.json",
    GameScene_json : "res/GameScene.json",
    OverScene_json : "res/OverScene.json",
    Loading_json : 'res/Loading.json',
    TipScene_json : "res/TipScene.json",
    candy_png : "res/Candy.plist",
    loadinglogo_png : "res/IconItems/logo-23.png",
    backgroundmusic1_mp3:"res/Scounds/bgm1.mp3",
    backgroundmusic2_mp3:"res/Scounds/bgm2.mp3",
    buttonmusic_mp3:"res/Scounds/btn.mp3",
    hitmusic_mp3:"res/Scounds/hit.mp3",
    shootmusic_mp3:"res/Scounds/shoot.mp3"



};

var g_resources = [
    //fonts

    {

        type: "font",

        name: "prion",

        srcs: ["res/piron.otf"]

}
];
for (var i in res) {
    g_resources.push(res[i]);
}