class Game {
  constructor(allPlayer, turnLeft = 10) {
    this.turnLeft = turnLeft;
    this.init(allPlayer);
  }

  init(player) {
    while (this.turnLeft > 0 && player.filter(p => p.status == "loser").length < player.length - 1) {
      this.newTurn();
    }
    console.log("Game over 💣💥");
  }

  newTurn() {

    if (this.turnLeft == 10) {
      console.log(`There are still 1️⃣0️⃣ laps left`);
    }
    else if (this.turnLeft == 9) {
      console.log(`There are still 9️⃣ laps left`);
    }
    else if (this.turnLeft == 8) {
      console.log(`There are still 8️⃣ laps left`);
    }
    else if (this.turnLeft == 7) {
      console.log(`There are still 7️⃣ laps left`);
    }
    else if (this.turnLeft == 6) {
      console.log(`There are still 6️⃣ laps left`);
    }
    else if (this.turnLeft == 5) {
      console.log(`There are still 5️⃣ laps left`);
    }
    else if (this.turnLeft == 4) {
      console.log(`There are still 4️⃣ laps left`);
    }
    else if (this.turnLeft == 3) {
      console.log(`There are still 3️⃣ laps left`);
    }
    else if (this.turnLeft == 2) {
      console.log(`There are still 2️⃣ laps left`);
    }
    else if (this.turnLeft == 1) {
      console.log(`There are still 1️⃣ laps left`);
    }
    
    this.turnLeft -= 1;
    new Turn(allplayer);
  }
}