import Model from "./model.js";
import View from "./view.js";

class Controller {
  constructor() {
    this.model = new Model(this);
    this.view = new View(this);
  }

  setup() {
    console.log("JS be running");
    this.model.testModel();
    this.view.testView();
    this.view.displayPlayerPosition(this.model.player);
  }
}

let controller = new Controller();
window.addEventListener("load", () => controller.setup());
