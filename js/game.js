class Game {
  constructor(allPlayer, turnLeft = 10) {
    //this.newTurn();
    this.turnLeft = turnLeft;
    this.init(allPlayer);
  }

  init(player) {
    console.log(player[1].status);
    while (this.turnLeft > 0 && player.filter(p => p.status == "loser").length < player.length - 1 && player[0].status != "loser" ) {
      this.newTurn();
    }
    console.log("Partie terminée.");
  }

  newTurn() {
    new Turn(allplayer);
    this.turnLeft -= 1;
  }
}