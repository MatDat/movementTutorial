import Model from "./model.js";
import View from "./view.js";

class Controller {
  constructor() {
    this.model = new Model(this);
    this.view = new View(this);
    window.model = this.model;
    window.view = this.view;
    window.updatePlayerPosition = (player) => this.updatePlayerPosition(player);
  }

  direction = "left";

  controls = {
    left: false,
    right: false,
    up: false,
    down: false,
    use: false,
  };

  setup() {
    console.log("JS be running");
    this.model.testModel();
    this.view.testView();

    document.addEventListener("keydown", this.keyDown);
    document.addEventListener("keyup", this.keyUp);

    requestAnimationFrame(() => this.tick());

    this.view.createItems(
      this.model.itemsGrid,
      this.model.visualItemsGrid,
      this.model.GRID_HEIGHT,
      this.model.GRID_WIDTH
    );

    this.view.createTiles(
      this.model.TILE_SIZE,
      this.model.GRID_HEIGHT,
      this.model.GRID_WIDTH
    );
    this.view.displayTiles(
      this.model.tiles,
      this.model.GRID_HEIGHT,
      this.model.GRID_WIDTH
    );
  }

  lastTimeStamp = 0;

  tick(timestamp) {
    requestAnimationFrame((timestamp) => this.tick(timestamp));

    const deltaTime = (timestamp - this.lastTimeStamp) / 1000;
    this.lastTimeStamp = timestamp;
    // console.log(deltaTime);

    this.model.movePlayer(deltaTime);

    // this.model.checkFortems();

    this.updatePlayerPosition(this.model.player);
    this.view.displayPlayerAnimation(this.model.player);

    this.showdebugging();
  }

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
      case "e":
        this.controls.use = true;
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
      case "e":
        this.controls.use = false;
        break;
    }
  };

  updatePlayerPosition(player) {
    this.view.displayPlayerPosition(player);
  }
  //----------------------------------------------------------------------------------------------------

  showdebugging() {
    //Yellow outline
    this.showDebugTileUnderPlayer();
    //Red outline
    this.showDebugPlayerRect();
    //Blue dot
    this.showDebugPlayerRegistrationPoint();
    //White outline
    this.hitbox();
  }

  lastPlayerCoords = [];

  // //Yellow outline OLD version
  // showDebugTileUnderPlayer() {
  //   const coord = this.model.coordFromPos(this.model.player);

  //   if (
  //     coord &&
  //     (coord.row !== this.lastPlayerCoord.row ||
  //       coord.col !== this.lastPlayerCoord.col)
  //   ) {
  //     this.unhighlightTile(this.lastPlayerCoord);
  //     this.highlightTile(coord);
  //   }

  //   this.lastPlayerCoord = coord;
  // }

  //Yellow outline
  showDebugTileUnderPlayer() {
    this.lastPlayerCoords.forEach(this.unhighlightTile);

    const tileCoords = this.model.getTilesUnderPlayer(this.model.player);
    tileCoords.forEach(this.highlightTile);

    this.lastPlayerCoords = tileCoords;

    this.lastPlayerCoord = coord;
  }

  //Red outline
  showDebugPlayerRect() {
    const visualPlayer = document.querySelector("#player");

    if (!visualPlayer.classList.contains("show-rect")) {
      visualPlayer.classList.add("show-rect");
    }
  }
  //White outline
  hitbox() {
    const visualPlayer = document.querySelector("#player");

    if (!visualPlayer.classList.contains("show-hitbox")) {
      visualPlayer.classList.add("show-hitbox");
    }
    visualPlayer.style.setProperty(
      "--hitboxX",
      this.model.player.hitbox.x + "px"
    );
    visualPlayer.style.setProperty(
      "--hitboxY",
      this.model.player.hitbox.y + "px"
    );
    visualPlayer.style.setProperty(
      "--hitboxWidth",
      this.model.player.hitbox.w + "px"
    );
    visualPlayer.style.setProperty(
      "--hitboxHeight",
      this.model.player.hitbox.h + "px"
    );
  }

  //Blue dot
  showDebugPlayerRegistrationPoint() {
    const visualPlayer = document.querySelector("#player");

    if (!visualPlayer.classList.contains("show-reg-point")) {
      visualPlayer.classList.add("show-reg-point");
    }
    visualPlayer.style.setProperty("--regX", this.model.player.regX + "px");
    visualPlayer.style.setProperty("--regY", this.model.player.regY + "px");
  }

  highlightTile({ row, col }) {
    const visualTiles = document.querySelectorAll("#background .tile");
    const visualTile = visualTiles[row * this.model.GRID_WIDTH + col];

    visualTile.classList.add("highlight");
  }

  unhighlightTile({ row, col }) {
    const visualTiles = document.querySelectorAll("#background .tile");
    const visualTile = visualTiles[row * this.model.GRID_WIDTH + col];

    visualTile.classList.remove("highlight");
  }
}

let controller = new Controller();
window.addEventListener("load", () => controller.setup());
