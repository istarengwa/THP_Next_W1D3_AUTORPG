class Character {
  constructor(name, hp, dmg, mana, shield = 0, sName = "", sDmg = 0, sShield = 0, sHeal = 0, sBoost = 0, sCost = 0, sDesc = "") {
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.shield = shield;
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
    this.hp -= (damage - this.shield);
    if (this.hp <= 0) this.status = 'loser';
  }

  dealDamage(victim) {
    console.log(`${this.name} inflicts ${this.dmg} damage on ${victim.name}.`);
    
    victim.takeDamage(this.dmg);
    if (victim.hp <= 0) this.status = 'winner'; //remove for multi player
    if (victim.hp <= 0) this.mana += 20;
  }
}