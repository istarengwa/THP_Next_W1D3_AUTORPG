let choice = prompt(`
  You are by default a Wizard, but you can change your class here

  Choose 1️⃣ for a Monk 〰️ Special : Heal 💚
  Description of Character: 8 HP / 160 Mana / 3 dmg
  Description of Special: Receive 8 HP. It costs 25 mana.

  Choose 2️⃣ for a Paladin 〰️ Special : Healing Lighting 🕳️  
  Description of Character: 16 HP / 160 Mana / 3 dmg
  Description of Special: Deals 4 damage and heals 5. It costs 40 mana.

  Choose 3️⃣ for a Assassin 〰️ Special : Shadow hit 🌪️  
  Description of Character: 6 HP / 20 Mana / 6 dmg
  Description of Special: Allowing it to deal 7 damage and not take damage on the next turn. This attack costs 20 mana.

  Choose 4️⃣ for a Fighter 〰️ Special : Dark Vision 🦇  
  Description of Character: 12 HP / 40 Mana / 4 dmg
  Description of Special: Deals 5 damage. Reduces damage taken for the turn by 2. It costs 20 mana.

  Choose 5️⃣ for a Wizard 〰️ Special : Fireball 🔥 
  Description of Character: 10 HP / 200 Mana / 2 dmg
  Description of Special: Inflicts 7 points of damage and costs 25 points of mana.
  
  Choose 6️⃣ for a Berzerker 〰️ Special : Rage 😡 
  Description of Character: 8 HP / 0 Mana / 4 dmg
  Description of Special: Deals +1 permanent damage. Deals 1 life to you. It costs 0 mana.
  `);
let choicePlayer = 0

if (choice == 1) {
  choicePlayer = new Monk;
}
else if (choice == 2) {
  choicePlayer = new Paladin;
}
else if (choice == 3) {
  choicePlayer = new Assassin;
}
else if (choice == 4) {
  choicePlayer = new Fighter;
}
else if (choice == 5) {
  choicePlayer = new Wizard;
}
else if (choice == 6) {
  choicePlayer = new Berzerker;
}
else {
  choicePlayer = new Wizard;
}

let player0 = choicePlayer;
let player1 = new Monk;
let player2 = new Paladin;
let player3 = new Assassin;
let player4 = new Fighter;
let player5 = new Berzerker;
let player6 = new Wizard;

let nameChoice = prompt('Choose your name 🗯️');

let allplayer = [player0, player1, player2, player3, player4, player5, player6];

allplayer[0].name = nameChoice;

new Game (allplayer);
