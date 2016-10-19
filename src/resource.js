var res = {
  //プレイヤー
  player_sheet: "res/sir_awesome_frames.png",
  player_plist: "res/player.plist",
  player01_png: "res/player1.png",
  player02_png: "res/player2.png",
  //背景
  ground_png: "res/background_front.png",
  background_png: "res/background_back.png",
  background_light_shafts_png:"res/background_light_shafts.png",
  curtain_png:"res/curtain.png",
  //足場
  block_png: "res/block48X48.png",
  //敵
  bat_frames: "res/bat_frames.png",

};

var g_resources = [];
for (var i in res) {
   g_resources.push(res[i]);
}
