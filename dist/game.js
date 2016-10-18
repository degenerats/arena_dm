/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Game = __webpack_require__(1);

	var _Game2 = _interopRequireDefault(_Game);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	window.onload = function () {
	  var game = new _Game2.default();
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Player = __webpack_require__(2);

	var _Player2 = _interopRequireDefault(_Player);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Game = function () {
	  function Game() {
	    _classCallCheck(this, Game);

	    this.game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: this.preload, create: this.create, update: this.update, render: this.render });
	  }

	  _createClass(Game, [{
	    key: 'preload',
	    value: function preload() {
	      var game = this.game;
	      game.load.image('background', 'sprites/debug-grid-1920x1920.png');
	      game.load.spritesheet('player', 'sprites/skeleton.png', 64, 64);
	    }
	  }, {
	    key: 'create',
	    value: function create() {
	      var game = this.game;
	      game.add.tileSprite(0, 0, 1920, 1920, 'background');
	      game.world.setBounds(0, 0, 1920, 1920);
	      game.physics.startSystem(Phaser.Physics.P2JS);

	      // Create player
	      this.player = new _Player2.default('player', game);
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      var game = this.game;

	      this.player.updatePlayer();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var game = this.game;
	      game.debug.cameraInfo(game.camera, 32, 32);
	      game.debug.spriteCoords(this.player.getPlayer(), 32, 500);
	    }
	  }]);

	  return Game;
	}();

	exports.default = Game;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Player = function () {
	  function Player(sprite, game) {
	    _classCallCheck(this, Player);

	    this.game = game;
	    this.gamePlayer = game.add.sprite(this.game.world.centerX, this.game.world.centerY, sprite);
	    this.game.physics.p2.enable(this.gamePlayer);

	    this.walkFrames = [[0, 1, 2, 3, 4, 5, 6, 7, 8], [9, 10, 11, 12, 13, 14, 15, 16, 17], [18, 19, 20, 21, 22, 23, 24, 25, 26], [27, 28, 29, 30, 31, 32, 33, 34, 35]];

	    this.startFrame = 0;

	    this.gamePlayer.animations.add('walkTop', this.walkFrames[0], 10, true);
	    this.gamePlayer.animations.add('walkLeft', this.walkFrames[1], 10, true);
	    this.gamePlayer.animations.add('walkDown', this.walkFrames[2], 10, true);
	    this.gamePlayer.animations.add('walkRight', this.walkFrames[3], 10, true);

	    game.camera.follow(this.gamePlayer);
	  }

	  _createClass(Player, [{
	    key: 'getPlayer',
	    value: function getPlayer() {
	      return this.gamePlayer;
	    }
	  }, {
	    key: 'updatePlayer',
	    value: function updatePlayer() {
	      var cursors = this.game.input.keyboard.createCursorKeys();

	      this.gamePlayer.body.setZeroVelocity();

	      if (cursors.up.isDown) {
	        this.startFrame = this.walkFrames[0][0];
	        this.gamePlayer.animations.play('walkTop');
	        this.gamePlayer.body.moveUp(200);
	      } else if (cursors.down.isDown) {
	        this.startFrame = this.walkFrames[1][0];
	        this.gamePlayer.animations.play('walkDown');
	        this.gamePlayer.body.moveDown(200);
	      } else if (cursors.left.isDown) {
	        this.startFrame = this.walkFrames[2][0];
	        this.gamePlayer.animations.play('walkLeft');
	        this.gamePlayer.body.velocity.x = -200;
	      } else if (cursors.right.isDown) {
	        this.startFrame = this.walkFrames[3][0];
	        this.gamePlayer.animations.play('walkRight');
	        this.gamePlayer.body.moveRight(200);
	      } else {
	        //  Stand still
	        this.gamePlayer.animations.stop();
	        this.gamePlayer.animations.frame = this.startFrame;
	      }
	    }
	  }]);

	  return Player;
	}();

	exports.default = Player;

/***/ }
/******/ ]);