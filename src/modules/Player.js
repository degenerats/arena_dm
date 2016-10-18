class Player {
  constructor(sprite, game) {
    this.game = game;
    this.gamePlayer = game.add.sprite(this.game.world.centerX, this.game.world.centerY, sprite);
    this.game.physics.p2.enable(this.gamePlayer);

    this.walkFrames = [
      [0, 1, 2, 3, 4, 5, 6, 7, 8],
      [9, 10, 11, 12, 13, 14, 15, 16, 17],
      [18, 19, 20, 21, 22, 23, 24, 25, 26],
      [27, 28, 29, 30, 31, 32, 33, 34, 35]
    ];

    this.startFrame = 0;

    this.gamePlayer.animations.add('walkTop', this.walkFrames[0], 10, true);
    this.gamePlayer.animations.add('walkLeft', this.walkFrames[1], 10, true);
    this.gamePlayer.animations.add('walkDown', this.walkFrames[2], 10, true);
    this.gamePlayer.animations.add('walkRight', this.walkFrames[3], 10, true);

    game.camera.follow(this.gamePlayer);
  }
  getPlayer() {
    return this.gamePlayer;
  }
  updatePlayer() {
    let cursors = this.game.input.keyboard.createCursorKeys();

    this.gamePlayer.body.setZeroVelocity();

    if (cursors.up.isDown) {
      this.startFrame = this.walkFrames[0][0]
      this.gamePlayer.animations.play('walkTop');
      this.gamePlayer.body.moveUp(200)
    } else if (cursors.down.isDown) {
      this.startFrame = this.walkFrames[1][0]
      this.gamePlayer.animations.play('walkDown');
      this.gamePlayer.body.moveDown(200);
    } else if (cursors.left.isDown) {
      this.startFrame = this.walkFrames[2][0]
      this.gamePlayer.animations.play('walkLeft');
      this.gamePlayer.body.velocity.x = -200;
    } else if (cursors.right.isDown) {
      this.startFrame = this.walkFrames[3][0]
      this.gamePlayer.animations.play('walkRight');
      this.gamePlayer.body.moveRight(200);
    }
    else {
      //  Stand still
      this.gamePlayer.animations.stop();
      this.gamePlayer.animations.frame = this.startFrame;
    }
  }
}

export default Player;
