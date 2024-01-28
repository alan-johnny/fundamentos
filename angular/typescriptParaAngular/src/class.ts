//classes
/*
 data modifier
 public
 private
 protected
*/


class Character {
  private name?: string;
  readonly stregth: number;
  skill: number;

  constructor(name:string, stregth: number, skill: number) {
    this.name = name;
    this.stregth = stregth;
    this.skill = skill;
  }

  attack():void {
    console.log(`Attack with ${this.stregth} points`);
  };
}

//subclass Character
class Magician extends Character {
  magicPoints: number;
  constructor(
    name:string,
    stregth: number,
    skill: number,
    magicPoints: number){
    super(name, stregth, skill);
    this.magicPoints = magicPoints;
  }
};

const p1 = new Character("Ken",25,98);
const p2 = new Magician("el mago", 12, 100, 59);

p1.attack();