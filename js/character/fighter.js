class Fighter extends Character {
  constructor(nameClass= "Fighter", name = "Grace", hp = 12, dmg = 4, mana = 40, shield = 0, sName = "Dark Vision", sDmg = 5, sShield = 2, sHeal = 0, sBoost = 0, sCost = 20, sDesc="Deals 5 damage. Reduces damage taken for the turn by 2. It costs 20 mana") {
    super(nameClass, name, hp, dmg, mana, shield, sName, sDmg, sShield, sHeal, sBoost, sCost, sDesc);
  }
}