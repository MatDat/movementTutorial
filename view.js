export default class View {
  constructor() {
    this.displayPlayerPosition = this.displayPlayerPosition;
  }

  testView() {
    console.log("View be running");
  }

  displayPlayerPosition(player) {
    const visualPlayer = document.querySelector("#player");
    visualPlayer.style.translate = `${player.x}px, ${player.y}px`;
  }
}
