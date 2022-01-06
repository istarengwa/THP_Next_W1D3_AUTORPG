class Berzerker extends Character {
  constructor(nameClass= "Berzerker", name = "Draven", hp = 8, dmg = 4, mana = 200, shield = 0, sName = "Rage", sDmg = 0, sShield = 0, sHeal = 0, sBoost = 1, sCost = 40, sDesc="Deals +1 permanent damage. Deals 1 life to you. It costs 0 mana.", sLogo = "😡") {
    super(nameClass, name, hp, dmg, mana, shield, sName, sDmg, sShield, sHeal, sBoost, sCost, sDesc, sLogo);
  }
}