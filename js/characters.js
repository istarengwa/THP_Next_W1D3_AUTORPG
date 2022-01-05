class Character {
  constructor(name, hp, dmg, mana) {
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
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