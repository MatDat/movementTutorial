import Model from "./model.js";
import View from "./view.js";

class Controller {
  constructor() {
    this.model = new Model(this);
    this.view = new View(this);
    window.player = this.model;
    window.updatePlayerPosition = this.updatePlayerPosition;
  }

  setup() {
    console.log("JS be running");
    this.model.testModel();
    this.view.testView();
    // this.view.displayPlayerPosition(this.model.player.x, this.model.player.y);
    this.updatePlayerPosition(this.model.player);
  }

  updatePlayerPosition(player) {
    this.view.displayPlayerPosition(player);
  }
}

let controller = new Controller();
window.addEventListener("load", () => controller.setup());
