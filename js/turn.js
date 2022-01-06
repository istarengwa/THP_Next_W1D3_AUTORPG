class Turn {
  constructor(allPlayer) {
    this.init(allPlayer);
  }

  init(player) {
    
    
    console.log(player[0]);
    console.log(player[1]);
    console.log(player[2]);
    let attack = 0;
    if (player[0].status != "loser") {
      attack = prompt(`Choose 1 to attack ${player[1].name}, Choose 2 to attack ${player[2].name}`);
      player[0].dealDamage(player[attack]);
    }
    if (player[1].status != "loser") {
      if (player[0].status != "loser") {
        player[1].dealDamage(player[0]);
      }
      else {
        player[1].dealDamage(player[2]);
      }     
    }
    if (player[2].status != "loser") {
      if (player[1].status != "loser") {
        player[2].dealDamage(player[1]);
      }
      else {
       player[2].dealDamage(player[0]); 
      }
    }
    
    let test2 = player.filter(p => p.status == "loser").length;
    console.log(test2);

    if (player.filter(p => p.status == "loser").length === player.length - 1) { //victory system
      for (let i=0; i < player.length; i++) {
        if (player[i].status === "winner") {
          console.log(`The player ${player[i].name} wins the game`);
        }
      }
    }
    
    console.log(test2);
    console.log(player[0]);
    console.log(player[1]);
    console.log(player[2]);
  }
    
}
 