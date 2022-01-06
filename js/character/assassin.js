class Assassin extends Character {
  constructor(nameClass= "Assassin", name = "Carl", hp = 6, dmg = 6, mana = 20, shield = 0, sName = "Shadow hit", sDmg = 0, sShield = 99999, sHeal = 0, sBoost = 0, sCost = 20, sDesc="Allowing it to deal 7 damage and not take damage on the next turn. This attack costs 20 mana.") {
    super(nameClass, name, hp, dmg, mana, shield, sName, sDmg, sShield, sHeal, sBoost, sCost, sDesc);
  }
}