class Character {
  constructor(name, hp, dmg, mana, sName, sDmg, sShield, sHeal, sBoost, sCost, sDesc) {
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.sName = sName;
    this.sDmg = sDmg;
    this.sShield = sShield;
    this.sHeal = sHeal;
    this.sBoost = sBoost;
    this.sCost = sCost;
    this.sDesc = sDesc;
    this.status = "playing";
  }

  takeDamage(damage) {
    this.hp -= damage;
    if (this.hp <= 0) this.status = 'loser';
  }

  dealDamage(victim) {
    victim.takeDamage(this.dmg);
  }
}