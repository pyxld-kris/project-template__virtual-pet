import Phaser from "phaser";

import Animal from "../classes/Animal.js";
import Ball from "../classes/Ball.js";

export default class PlayScene extends Phaser.Scene {
  preload() {
    this.load.image("sky", "../assets/sky.png");
    this.load.image("ground", "../assets/ground.png");
    this.load.image("cloud", "../assets/cloud.png");
    this.load.image("meat", "../assets/meat.png");
    this.load.image("ball", "../assets/ball.png");

    // Load the pet's spritesheet
    this.load.spritesheet("pet", "../assets/pet.png", {
      frameWidth: 17,
      frameHeight: 21,
      margin: 0,
      spacing: 0
    });
  }

  create() {
    let halfGameWidth = this.game.config.width / 2;
    let halfGameHeight = this.game.config.height / 2;

    // Create sky
    this.sky = this.add.sprite(halfGameWidth, halfGameHeight, "sky");

    // Create ground
    this.ground = this.physics.add.staticSprite(halfGameWidth, 83, "ground");

    // Create clouds
    this.cloudLeft = this.add.sprite(50, 20, "cloud");
    this.cloudRight = this.add.sprite(150, 5, "cloud");

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

  /* <Begin> helper functions added by Kris */
  //
  //

  addPhysicalRectangle(x, y, width, height, color, alphaIThinkMaybe) {
    // TODO: alphaIThinkMaybe name change
    let rect = this.add.rectangle(x, y, width, height, color, alphaIThinkMaybe);
    rect = this.physics.add.existing(rect, true);

    return rect;
  }

  /* </End> Helper functions added by kris */
}
