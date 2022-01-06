class Game {
  constructor(allPlayer, turnLeft = 10) {
    this.turnLeft = turnLeft;
    this.init(allPlayer);
  }

  init(player) {
    while (this.turnLeft > 0 && player.filter(p => p.status == "loser").length < player.length - 1 && player[0].status != "loser" ) {
      this.newTurn();
    }
    console.log("Game over");
  }

  newTurn() {
    console.log(`There are still ${this.turnLeft} laps left`)
    new Turn(allplayer);
    this.turnLeft -= 1;
  }
}