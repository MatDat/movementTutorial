export default class Model {
  constructor(controller) {
    this.player = {
      isTaking: false,
      x: 27,
      y: 425,
      regX: 15,
      regY: 32,
      hitbox: {
        x: 8,
        y: 7,
        w: 16,
        h: 32,
      },
      speed: 200,
      isMoving: false,
      direction: undefined,
    };

    this.tiles = [
      [3, 3, 3, 3, 3, 3, 3, 3, 6, 10, 1, 7, 0, 0, 0, 0, 0, 8, 8],
      [3, 4, 4, 4, 5, 4, 4, 3, 6, 0, 1, 7, 0, 7, 7, 8, 8, 8, 8],
      [3, 4, 4, 4, 3, 3, 3, 3, 6, 0, 0, 0, 0, 0, 0, 7, 8, 8, 8],
      [3, 4, 4, 4, 3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 7, 7, 7],
      [3, 3, 5, 3, 3, 6, 3, 3, 3, 3, 3, 0, 0, 6, 0, 0, 0, 10, 10],
      [7, 0, 6, 0, 10, 6, 5, 4, 4, 4, 3, 10, 0, 6, 6, 6, 6, 6, 6],
      [7, 0, 6, 0, 7, 6, 3, 3, 3, 3, 3, 10, 0, 0, 7, 7, 7, 7, 7],
      [6, 6, 6, 6, 6, 6, 10, 0, 0, 0, 0, 3, 3, 3, 3, 7, 0, 0, 7],
      [10, 10, 0, 0, 0, 6, 9, 10, 0, 0, 0, 3, 4, 4, 3, 7, 0, 8, 8],
      [7, 7, 7, 10, 10, 6, 6, 6, 6, 6, 6, 3, 4, 4, 3, 10, 0, 7, 7],
      [7, 7, 7, 10, 10, 0, 0, 0, 0, 0, 6, 3, 5, 3, 3, 10, 0, 10, 10],
      [1, 1, 1, 1, 1, 1, 1, 1, 10, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 6, 0, 0, 0, 7, 7, 7],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 10, 6, 7, 7, 7, 8, 8, 8],
    ];

    this.GRID_HEIGHT = this.tiles.length;
    this.GRID_WIDTH = this.tiles[0].length;
    this.TILE_SIZE = 56;

    this.itemsGrid = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

    this.visualItemsGrid = [];

    this.controller = controller;
  }
  coord = {
    row: 0,
    col: 0,
  };

  coordFromPos({ x, y }) {
    const row = Math.floor(y / this.TILE_SIZE);
    const col = Math.floor(x / this.TILE_SIZE);
    const coord = { row, col };
    return coord;
  }

  posFromCoord({ row, col }) {}

  getTilesAtCoord({ row, col }) {
    // const row = coord.row;
    // const col = coord.col;
    // const { row, col } = coord;

    return this.tiles[row][col];
  }

  getTilesUnderPlayer(newPos = { x: this.player.x, y: this.player.y }) {
    const tileCoords = [];
    const topLeft = {
      x: newPos.x - this.player.regX + this.player.hitbox.x,
      y: newPos.y - this.player.regY + this.player.hitbox.y,
    };
    const topRight = { x: topLeft.x + this.player.hitbox.w, y: topLeft.y };
    const bottomLeft = { x: topLeft.x, y: topLeft.y + this.player.hitbox.h };
    const bottomRight = { x: topRight.x, y: bottomLeft.y };

    const topLeftCoords = this.coordFromPos(topLeft);
    const topRightCoords = this.coordFromPos(topRight);
    const bottomLeftCoords = this.coordFromPos(bottomLeft);
    const bottomRightCoords = this.coordFromPos(bottomRight);

    tileCoords.push(topLeftCoords);
    tileCoords.push(topRightCoords);
    tileCoords.push(bottomLeftCoords);
    tileCoords.push(bottomRightCoords);

    return tileCoords;
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
    }
    if (controls.right) {
      this.player.isMoving = true;
      this.player.direction = "right";
      newPos.x += this.player.speed * deltaTime;
    }

    if (controls.up) {
      this.player.isMoving = true;
      this.player.direction = "up";
      newPos.y -= this.player.speed * deltaTime;
    }
    if (controls.down) {
      this.player.isMoving = true;
      this.player.direction = "down";
      newPos.y += this.player.speed * deltaTime;
    }

    if (this.canMovePlayerToPos(newPos)) {
      this.player.x = newPos.x;
      this.player.y = newPos.y;
    }
  }

  checkForItems() {
    const items = this.getItemsUnderPlayer();
    if (
      items.length > 0 &&
      this.controller.controls.use &&
      !this.player.isTaking
    ) {
      this.player.isTaking = true;
      items.forEach(this.takeItem, this);
    }
    if (this.player.isTaking && !this.controller.controls.use) {
      this.player.isTaking = false;
    }
  }

  getItemsUnderPlayer() {
    const items = [];
    const playerCoords = this.coordFromPos(this.player); // Get coordinates of player

    // Check if player coordinates are within grid bounds
    if (
      playerCoords.row >= 0 &&
      playerCoords.row < this.GRID_HEIGHT &&
      playerCoords.col >= 0 &&
      playerCoords.col < this.GRID_WIDTH
    ) {
      const itemValue = this.itemsGrid[playerCoords.row][playerCoords.col];
      if (itemValue !== 0) {
        items.push({ row: playerCoords.row, col: playerCoords.col });
      }
    }

    return items;
  }

  takeItem(coords) {
    console.log("Attempting to take item at coordinates:", coords);
    console.log("Items grid:", this.itemsGrid);

    const itemValue = this.itemsGrid[coords.row][coords.col];
    console.log("Item value:", itemValue);

    if (itemValue !== 0) {
      this.itemsGrid[coords.row][coords.col] = 0;
      const visualItem = this.visualItemsGrid[coords.row][coords.col];
      visualItem.classList.add("take");
    }
  }

  canMoveTo({ row, col }) {
    // const { row, col } = this.coordFromPos(pos);

    if (
      row < 0 ||
      row >= this.GRID_HEIGHT ||
      col < 0 ||
      col >= this.GRID_WIDTH
    ) {
      return false;
    }

    const tileType = this.getTilesAtCoord({ row, col });
    switch (tileType) {
      case 6:
      case 10:
      case 5:
      case 0:
      case 4:
        return true;
      case 3:
      case 1:
      case 8:
      case 7:
      case 9:
        return false;
      default:
        break;
    }
    return true;
  }

  canMovePlayerToPos(newPos) {
    const coords = this.getTilesUnderPlayer(newPos);

    let canMove = true;

    for (let i = 0; i < coords.length; i++) {
      if (!this.canMoveTo(coords[i])) {
        canMove = false;
      }
    }
    return canMove;
  }
}
