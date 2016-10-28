var enemyBat;

var enemyLayer = cc.Layer.extend({
   ctor: function() {
      this._super();
      enemyBat = new EnemyBat();
      this.addChild(enemyBat);
      //cc.eventManager.addListener(listener, this);

   }

});
var EnemyBat = cc.Sprite.extend({
  ctor: function() {
    this._super();
    this.initWithFile(res.zonbi_frames);
    this.velocity = cc.p(0, 0);
    this.FrameCount = 0;

    for (i = 0; i < 7; i++) {　　　　　　
      for (j = 0; j < 10; j++) {
        if (level[i][j] == 5) {
          this.setPosition(tileSize / 2 + tileSize * j, 96 * (7 - i) - tileSize / 2);
        }
      }
    }

    //スプライトフレームを格納する配列
    var animationframe = [];

    var frame1 = new cc.SpriteFrame(res.zonbi01_png, cc.rect(0, 0, 96, 120));
        //スプライトフレームを作成
        animationframe.push(frame1);

    //スプライトフレームの配列を連続再生するアニメーションの定義
    var animation = new cc.Animation(animationframe, 0.08);
    //永久ループのアクションを定義
    var action = new cc.RepeatForever(new cc.animate(animation));
    //実行
    this.runAction(action);

    this.scheduleUpdate();

  },

});
