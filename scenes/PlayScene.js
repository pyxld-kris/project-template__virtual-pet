import Phaser from "phaser";

import Animal from "../classes/Animal.js";
import Ball from "../classes/Ball.js";

export default class PlayScene extends Phaser.Scene {
  constructor() {
    super("PlayScene");
  }

  create() {
    // Start UIScene, which will layer on top of PlayScene
    this.scene.run("UIScene");

    let halfGameWidth = this.game.config.width / 2;
    let halfGameHeight = this.game.config.height / 2;

    // Create sky
    this.sky = this.add.sprite(halfGameWidth + 1, halfGameHeight, "sky");

    // Create ground
    this.ground = this.physics.add.staticSprite(
      halfGameWidth + 1,
      this.game.config.height,
      "ground"
    );

    // Create pet
    this.pet = new Animal(this, 30, 10);

    // Create the ball
    this.ball = new Ball(this, 50, 10);

    this.physics.add.collider(this.pet, this.ground);
    this.physics.add.collider(this.ball, this.ground);
    this.physics.add.collider(this.pet, this.ball);

    const camera = this.cameras.main;
    const cursors = this.input.keyboard.createCursorKeys();
    camera.setBounds(0, 0, this.game.config.width, this.game.config.height);
  }

  update(time, delta) {}
}
