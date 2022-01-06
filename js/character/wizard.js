class Wizard extends Character {
  constructor(nameClass= "Wizard", name = "Istarengwa", hp = 10, dmg = 2, mana = 200, shield = 0, sName = "Fireball", sDmg = 7, sShield = 0, sHeal = 0, sBoost = 0, sCost = 25, sDesc="Inflicts 7 points of damage and costs 25 points of mana.", sLogo = "🔥") {
    super(nameClass, name, hp, dmg, mana, shield, sName, sDmg, sShield, sHeal, sBoost, sCost, sDesc, sLogo);
  }
}