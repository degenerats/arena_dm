class Game {

  constructor() {
    this.game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: this.preload, create: this.create, update: this.update });
  }

  preload () {
    let game = this.game;
  }

  create () {
    let game = this.game;
  }

  update() {
    let game = this.game;
  }
}

export default Game;
