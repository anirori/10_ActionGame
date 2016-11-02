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
          this.setPosition(tileSize / 2 + tileSize * j, tileSize);
        }
      }
    }

    //スプライトフレームを格納する配列
    var animationframe = [];

    var frame1 = new cc.SpriteFrame(res.zonbi01_png, cc.rect(0, 0, 96, 120));
    var frame2 = new cc.SpriteFrame(res.zonbi02_png, cc.rect(0, 0, 96, 120));
    var frame3 = new cc.SpriteFrame(res.zonbi03_png, cc.rect(0, 0, 96, 120));
    var frame4 = new cc.SpriteFrame(res.zonbi04_png, cc.rect(0, 0, 96, 120));
    var frame5 = new cc.SpriteFrame(res.zonbi05_png, cc.rect(0, 0, 96, 120));
    var frame6 = new cc.SpriteFrame(res.zonbi06_png, cc.rect(0, 0, 96, 120));
    var frame7 = new cc.SpriteFrame(res.zonbi07_png, cc.rect(0, 0, 96, 120));
    var frame8 = new cc.SpriteFrame(res.zonbi08_png, cc.rect(0, 0, 96, 120));
        //スプライトフレームを作成
        animationframe.push(frame1);
        animationframe.push(frame2);
        animationframe.push(frame3);
        animationframe.push(frame4);
        animationframe.push(frame5);
        animationframe.push(frame6);
        animationframe.push(frame7);
        animationframe.push(frame8);

    //スプライトフレームの配列を連続再生するアニメーションの定義
    var animation = new cc.Animation(animationframe, 0.3);
    //永久ループのアクションを定義
    var action = new cc.RepeatForever(new cc.animate(animation));
    //実行
    this.runAction(action);

    this.scheduleUpdate();

  },

});
