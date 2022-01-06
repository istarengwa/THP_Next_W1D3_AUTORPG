class Turn {
  constructor(allPlayer) {
    this.init(allPlayer);
  }

  init(player) {
    
    console.log(player[0]);
    console.log(player[1]);
    console.log(player[2]);
    console.log(player[3]);
    console.log(player[4]);
    console.log(player[5]);
    console.log(player[6]);
    let attack = 0;

    

    if (player[0].status != "loser") { //choice player target system
      attack = prompt(`Choose 1 to attack ${player[1].name}, Choose 2 to attack ${player[2].name}, Choose 3 to attack ${player[3].name}, 
      Choose 4 to attack ${player[4].name}, Choose 5 to attack ${player[5].name}, Choose 6 to attack ${player[6].name}`);
      if (player[attack].hp <= 0) {
        attack = prompt(`The chosen character is dead, choose 1 to attack ${player[1].name}, Choose 2 to attack ${player[2].name}, Choose 3 to attack ${player[3].name}, 
        Choose 4 to attack ${player[4].name}, Choose 5 to attack ${player[5].name}, Choose 6 to attack ${player[6].name}`);
        player[0].dealDamage(player[attack]);
      }
      else {
        player[0].dealDamage(player[attack]);
      }  
    }


    for (let random = 1; random < player.length; random++) { //random npc target system

      let targetRandom = player.filter(p => p !== player[random]);
      let victimRandom = targetRandom[Math.floor(Math.random() * targetRandom.length)];
      
      if (player[random].status != "loser") {
        if (victimRandom.status != "loser") {
          player[random].dealDamage(victimRandom);
        }
        else {
          console.log(`${player[random].name} wanted to attack ${victimRandom.name} but this one is already dead`);
        }
        
      }
    }

    if (player.filter(p => p.status == "loser").length === player.length - 1) { //victory system
      for (let i=0; i < player.length; i++) {
        if (player[i].status === "winner") {
          console.log(`The player ${player[i].name} wins the game`);
        }
      }
    }
  }
    
}
 