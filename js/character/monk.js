class Monk extends Character {
  constructor(name = "Moana", hp = 8, dmg = 2, mana = 200, shield = 0, sName = "Heal", sDmg = 0, sShield = 0, sHeal = 8, sBoost = 0, sCost = 25, sDesc="Receive 8 HP. It costs 25 mana.") {
    super(name, hp, dmg, mana, shield, sName, sDmg, sShield, sHeal, sBoost, sCost, sDesc);
  }
}