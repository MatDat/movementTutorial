export default class Model {
  constructor(controller) {
    this.player = {
      x: 0,
      y: 420,
      regX: 15,
      regY: 32,
      hitbox: {
        x: 4,
        y: 7,
        width: 12,
        height: 17,
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

    if (this.canMoveTo(newPos)) {
      this.player.x = newPos.x;
      this.player.y = newPos.y;
    }
  }

  canMoveTo(pos) {
    const { row, col } = this.coordFromPos(pos);

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
}
