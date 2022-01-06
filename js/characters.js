class Character {
  constructor(nameClass, name, hp, dmg, mana, shield = 0, sName = "", sDmg = 0, sShield = 0, sHeal = 0, sBoost = 0, sCost = 0, sDesc = "") {
    this.nameClass = nameClass;
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
    console.log(`${this.name} inflicts ${this.dmg - victim.shield} damage on ${victim.name}.`);
    
    victim.takeDamage(this.dmg);
    if (victim.hp <= 0) this.status = 'winner';
    if (victim.hp <= 0) this.mana += 20;
  }

  special(victim) {
    if (this.mana >= this.spCost) {
      this.mana -= this.spCost;
      console.log(`${this.name} cast ${this.spName}.`);
      if (this.spShield > 0) {
        this.shield += this.spShield;
        console.log(`${this.name} reduce damage by ${this.spShield} this turn.`);
      }
      if (this.spDmg > 0) {
        console.log(`${this.name} inflicts ${this.spDmg - victim.shield} damage on ${victim.name}.`);
        victim.takeDamage(this.spDmg);
      }
      if (this.spHeal > 0) {
        this.hp += this.spHeal;
        console.log(`${this.name} restore ${this.spHeal} health points.`);
      }
      if (this.spBoost > 0) {
        this.dmg += 1;
        console.log(`${this.name} gains ${this.spBoost} permanent damage points.`);
        if (this.hp > 1) {
          this.hp -= 1;
          console.log(`${this.name} inflicts 1 point of damage.`);
        }
      }
    }
    else {
      console.log(`Not having enough mana, you launch a normal attack.`);
      this.dealDamage(victim);
    }
  };
}