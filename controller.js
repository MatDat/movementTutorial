import Model from "./model.js";
import View from "./view.js";

class Controller {
  constructor() {
    this.model = new Model(this);
    this.view = new View(this);
    window.model = this.model;
    window.updatePlayerPosition = (player) => this.updatePlayerPosition(player);
  }

  setup() {
    console.log("JS be running");
    this.model.testModel();
    this.view.testView();

    document.addEventListener("keydown", this.keyDown);
    document.addEventListener("keyup", this.keyUp);

    requestAnimationFrame(() => this.tick());
  }

  lastTimeStamp = 0;

  tick(timestamp) {
    requestAnimationFrame((timestamp) => this.tick(timestamp));

    const deltaTime = (timestamp - this.lastTimeStamp) / 1000;
    this.lastTimeStamp = timestamp;
    // console.log(deltaTime);

    this.model.movePlayer(deltaTime);

    this.updatePlayerPosition(this.model.player);
    this.view.displayPlayerAnimation(this.model.player);
  }

  direction = "left";

  controls = {
    left: false,
    right: false,
    up: false,
    down: false,
  };

  keyDown = (event) => {
    switch (event.key) {
      case "ArrowLeft":
        this.controls.left = true;
        break;
      case "ArrowRight":
        this.controls.right = true;
        break;
      case "ArrowUp":
        this.controls.up = true;
        break;
      case "ArrowDown":
        this.controls.down = true;
        break;
    }
  };

  keyUp = (event) => {
    switch (event.key) {
      case "ArrowLeft":
        this.controls.left = false;
        break;
      case "ArrowRight":
        this.controls.right = false;
        break;
      case "ArrowUp":
        this.controls.up = false;
        break;
      case "ArrowDown":
        this.controls.down = false;
        break;

      default:
        break;
    }
  };

  updatePlayerPosition(player) {
    this.view.displayPlayerPosition(player);
  }
}

let controller = new Controller();
window.addEventListener("load", () => controller.setup());
