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
    if (this.shield > 999) {
      this.hp = this.hp;
    }
    else {
      this.hp -= (damage - this.shield);
    }
    
    if (this.hp <= 0) this.status = 'loser';
  }

  dealDamage(victim) {
    if (victim.shield > 999) {
      console.log(`${this.name} inflicts 0 damage on ${victim.name} because this one is protected by its ulti.`);
    }
    else {
      console.log(`${this.name} inflicts ${this.dmg - victim.shield} damage on ${victim.name}.`);
    }

    victim.takeDamage(this.dmg);
    if (victim.hp <= 0) this.status = 'winner';
    if (victim.hp <= 0) this.mana += 20;
  }

  special(victim) {
    if (this.mana >= this.sCost) {
      this.mana -= this.sCost;
      console.log(`${this.name} cast ${this.sName}.`);
      if (this.sShield > 0) {
        this.shield += this.sShield;
        console.log(`${this.name} reduce damage by ${this.sShield} this turn.`);
      }
      if (this.sDmg > 0) {
        console.log(`${this.name} inflicts ${this.sDmg - victim.shield} damage on ${victim.name}.`);
        victim.takeDamage(this.sDmg);
      }
      if (this.sHeal > 0) {
        this.hp += this.sHeal;
        console.log(`${this.name} restore ${this.sHeal} health points.`);
      }
      if (this.sBoost > 0) {
        this.dmg += 1;
        console.log(`${this.name} gains ${this.sBoost} permanent damage points.`);
        if (this.hp > 1) {
          this.hp -= 1;
          console.log(`${this.name} receive 1 point of damage.`);
        }
      }
    }
    else {
      console.log(`Not having enough mana, you launch a normal attack.`);
      this.dealDamage(victim);
    }
  };
}