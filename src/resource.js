var res = {
  //タイトル
  Title_png: "res/titl.png",
  //プレイヤー
  player_sheet: "res/sir_awesome_frames.png",
  player_plist: "res/player.plist",
  player01_png: "res/player1.png",
  player02_png: "res/player2.png",
  player03_png: "res/player3.png",
  player04_png: "res/player4.png",
  player05_png: "res/player5.png",
  //背景
  ground_png: "res/background_front.png",
  background_png: "res/background_back.png",
  background_light_shafts_png:"res/background_light_shafts.png",
  curtain_png:"res/curtain.png",
  curtain2_png: "res/curtain2.png",
  //足場
  block_png: "res/block48X48.png",
  //表示板
  ui_panels_png: "res/ui_panels.png",
  //敵
  bat_frames: "res/bat_frames.png",
  zonbi_frames: "res/zombie_frames.png",
  zonbi01_png: "res/zonbi1.png",
  zonbi02_png: "res/zonbi2.png",
  zonbi03_png: "res/zonbi3.png",
  zonbi04_png: "res/zonbi4.png",
  zonbi05_png: "res/zonbi5.png",
  zonbi06_png: "res/zonbi6.png",
  zonbi07_png: "res/zonbi7.png",
  zonbi08_png: "res/zonbi8.png",

};

var g_resources = [];
for (var i in res) {
   g_resources.push(res[i]);
}
