class Turn {
  constructor(allPlayer) {
    this.init(allPlayer);
  }

  init(player) {
    
    console.log(player[0]);
    console.log(player[1]);
    if (player[0].status != "loser"){
      player[0].dealDamage(player[1]);
      console.log(`Le joueur ${player[0].name} inflige ${player[0].dmg} points de dégâts à ${player[1].name}!`);
    }
    if (player[1].status != "loser"){
      player[1].dealDamage(player[0]);
      console.log(`Le joueur ${player[1].name} inflige ${player[1].dmg} points de dégâts à ${player[0].name}!`);
    }
    
    console.log(player[0].status);
    console.log(player[1].status);
    

    
    if (player[0].status === "loser") {
      console.log(`Le joueur ${player[1].name} gagne la partie`);
    }
    if (player[1].status === "loser") {
      console.log(`Le joueur ${player[0].name} gagne la partie`);
    }
  }
  
}
 