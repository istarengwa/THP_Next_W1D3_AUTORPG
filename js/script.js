let choice = prompt(`Choose 1 for a Monk, Choose 2 for a Paladin, Choose 3 for a Assassin, Choose 4 for a Fighter, Choose 5 for a Wizard, Choose 6 for a Berzerker`);
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

let player0 = choicePlayer;
let player1 = new Monk;
let player2 = new Paladin;
let player3 = new Assassin;
let player4 = new Fighter;
let player5 = new Berzerker;
let player6 = new Wizard;

let allplayer = [player0, player1, player2, player3, player4, player5, player6];
new Game (allplayer);
