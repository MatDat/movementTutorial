export default class Model {
  constructor(controller) {
    this.player = {
      x: 0,
      y: 0,
      speed: 120,
      isMoving: false,
      direction: undefined,
    };
    this.controller = controller;
  }

  testModel() {
    console.log("Model be running");
  }

  movePlayer(deltaTime) {
    const controls = this.controller.controls;
    this.player.isMoving = false;

    const newPos = {
      x: this.player.x,
      y: this.player.y,
    };

    if (controls.left) {
      this.player.isMoving = true;
      this.player.direction = "left";
      newPos.x -= this.player.speed * deltaTime;
    } else if (controls.right) {
      this.player.isMoving = true;
      this.player.direction = "right";
      newPos.x += this.player.speed * deltaTime;
    }

    if (controls.up) {
      this.player.isMoving = true;
      this.player.direction = "up";
      newPos.y -= this.player.speed * deltaTime;
    } else if (controls.down) {
      this.player.isMoving = true;
      this.player.direction = "down";
      newPos.y += this.player.speed * deltaTime;
    }

    if (this.canMoveTo(newPos)) {
      this.player.x = newPos.x;
      this.player.y = newPos.y;
    }
  }

  canMoveTo(pos) {
    if (pos.x < 0 || pos.x > 450 || pos.y < 0 || pos.y > 435) {
      return false;
    } else {
      return true;
    }
  }
}
