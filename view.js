export default class View {
  constructor() {}

  testView() {
    console.log("View be running");
  }

  displayPlayerPosition(playerPosition) {
    const visualPlayer = document.querySelector("#player");
    visualPlayer.style.translate = `${playerPosition.x}px 
        ${playerPosition.y}px`;
  }
}
