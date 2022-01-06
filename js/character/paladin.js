class Paladin extends Character {
  constructor(name = "Ulder", hp = 16, dmg = 3, mana = 160, shield = 0, sName = "Healing Lighting", sDmg = 4, sShield = 0, sHeal = 5, sBoost = 0, sCost = 40, sDesc="Deals 4 damage and heals 5. It costs 40 mana.") {
    super(name, hp, dmg, mana, shield, sName, sDmg, sShield, sHeal, sBoost, sCost, sDesc);
  }
}