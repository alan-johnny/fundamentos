"use strict";
//classes
/*
 data modifier
 public
 private
 protected
*/
class Character {
    constructor(name, stregth, skill) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.stregth} points`);
    }
    ;
}
//subclass Character
class Magician extends Character {
    constructor(name, stregth, skill, magicPoints) {
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }
}
;
const p1 = new Character("Ken", 25, 98);
const p2 = new Magician("el mago", 12, 100, 59);
p1.attack();
