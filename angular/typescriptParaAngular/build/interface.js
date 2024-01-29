"use strict";
const bot1 = {
    id: 1,
    name: "mega robot",
};
const bot2 = {
    id: 1,
    name: "mega robot",
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
console.log(bot1);
console.log(bot2);
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return ` Hello ${this.name}`;
    }
}
const p = new Pessoa(2, "marcos");
console.log(p.sayHello());
