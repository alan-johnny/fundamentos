"use strict";
//classes


class Character {
    constructor(stregth, skill) {
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.stregth} points`);
    }
    ;
}
const p1 = new Character(25, 98);
p1.attack();
