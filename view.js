export default class View {
  constructor() {
    this.displayPlayerPosition = this.displayPlayerPosition;
  }

  testView() {
    console.log("View be running");
  }

  createTiles(TILE_SIZE, GRID_HEIGHT, GRID_WIDTH) {
    const background = document.querySelector("#background");

    for (let row = 0; row < GRID_HEIGHT; row++) {
      for (let col = 0; col < GRID_WIDTH; col++) {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        background.appendChild(tile);
      }
    }
    background.style.setProperty("--GRID_WIDTH", GRID_WIDTH);
    background.style.setProperty("--GRID_HEIGHT", GRID_HEIGHT);
    background.style.setProperty("--TILE_SIZE", TILE_SIZE + "px");
  }

  displayTiles(tiles, GRID_HEIGHT, GRID_WIDTH) {
    const visualTiles = document.querySelectorAll("#background .tile");

    for (let row = 0; row < GRID_HEIGHT; row++) {
      for (let col = 0; col < GRID_WIDTH; col++) {
        const modelTile = tiles[row][col];
        const visualTile = visualTiles[row * GRID_WIDTH + col];
        // visualTile.classList.add("grass");
        visualTile.classList.add(this.getClassForTilestype(modelTile));
      }
    }
  }

  getClassForTilestype(tileType) {
    switch (tileType) {
      case 0:
        return "grass";
        break;
      case 1:
        return "water";
        break;
      case 2:
        return "abyss";
        break;
      case 3:
        return "wall";
        break;
      case 4:
        return "floor_planks";
        break;
      case 5:
        return "door";
        break;
      case 6:
        return "path";
        break;
      case 7:
        return "tree";
        break;
      case 8:
        return "cliff";
        break;
      case 9:
        return "well";
        break;
      case 10:
        return "flowers";
        break;
      default:
        break;
    }
  }

  displayPlayerPosition(player) {
    const visualPlayer = document.querySelector("#player");
    visualPlayer.style.translate = `${player.x - player.regX}px ${
      player.y - player.regY
    }px`;
  }

  displayPlayerAnimation(player) {
    const visualPlayer = document.querySelector("#player");

    if (player.isMoving && !visualPlayer.classList.contains("#animate")) {
      visualPlayer.classList.add("animate");
      visualPlayer.classList.remove("up", "down", "left", "right");
      visualPlayer.classList.add(player.direction);
    } else {
      visualPlayer.classList.remove("animate");
    }
  }
}
