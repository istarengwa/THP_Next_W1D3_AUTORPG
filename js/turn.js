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
      if (player[attack].hp <= 0) {
        attack = prompt(`The chosen character is dead, choose 1 to attack ${player[1].name}, Choose 2 to attack ${player[2].name}`);
      }
      else {
        player[0].dealDamage(player[attack]);
      }  
    }


    for (let random = 1; random < player.length; random++) {

      let targetRandom = player.filter(p => p !== player[random]);
      let victimRandom = targetRandom[Math.floor(Math.random() * targetRandom.length)];
      
      console.log(`Ici ce trouve le test du choix du joueur random dans la boucle : ${player[random].name} et de sa target ${victimRandom.name}`)
      if (player[random].status != "loser") {
        if (victimRandom.status != "loser") {
          player[random].dealDamage(victimRandom);
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
    
    console.log(player[0]);
    console.log(player[1]);
    console.log(player[2]);
  }
    
}
 