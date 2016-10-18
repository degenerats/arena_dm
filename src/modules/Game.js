import Player from './Player.js';

class Game {

  constructor() {
    this.game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: this.preload, create: this.create, update: this.update, render: this.render });
  }

  preload() {
    let game = this.game;
    game.load.image('background','sprites/debug-grid-1920x1920.png');
    game.load.spritesheet('player','sprites/skeleton.png', 64, 64);
  }

  create() {
    let game = this.game;
    game.add.tileSprite(0, 0, 1920, 1920, 'background');
    game.world.setBounds(0, 0, 1920, 1920);
    game.physics.startSystem(Phaser.Physics.P2JS);

    // Create player
    this.player = new Player('player', game);
  }

  update() {
    let game = this.game;

    this.player.updatePlayer();
  }

  render() {
    let game = this.game;
    game.debug.cameraInfo(game.camera, 32, 32);
    game.debug.spriteCoords(this.player.getPlayer(), 32, 500);
  }
}

export default Game;
