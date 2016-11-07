var res = {
  //タイトル
  TitleBG_png: "res/background_back2.png",
  title_png: "res/title.png",
  start_png: "res/btn_play.png",
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
  zombi_frames: "res/zombie_frames.png",
  zombi_plist: "res/zombi.plist",
  slime_green_frames: "res/slime_green_frames.png",
  slime_green_plist: "res/slime_green.plist",
  slime_red_frames: "res/slime_red_frames.png",
  slime_red_plist: "res/slime_red.plist",
  slime_yellow_plist: "res/slime_yellow.plist",
};

var g_resources = [];
for (var i in res) {
   g_resources.push(res[i]);
}
