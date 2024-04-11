export default class View {
  constructor() {
    this.displayPlayerPosition = this.displayPlayerPosition;
  }

  testView() {
    console.log("View be running");
  }

  displayPlayerPosition(player) {
    const visualPlayer = document.querySelector("#player");
    visualPlayer.style.translate = `${player.x}px ${player.y}px`;
  }

  displayPlayerAnimation(player) {
    const visualPlayer = document.querySelector("#player");

    if (player.isMoving) {
      visualPlayer.classList.add("animate");
      visualPlayer.classList.remove("up", "down", "left", "right");
      visualPlayer.classList.add(player.direction);
    } else {
      visualPlayer.classList.remove("animate");
    }
  }
}
