//decorators
// function ExibirNome(target: any){
//   console.log(target);
// }

// @ExibirNome
// class Funcionario {}

// @ExibirNome
// class Quincas {}

function apiVersion(version: string) {
  return (target: any) => {
    Object.assign(target.prototype, { __version: version, __name: "John"});
  }
}

// attribute decorator

function  minLength(length:number) {
  return  (target: any , key:string) => {
    console.log(target[key]);
    
  }
}

class Api {
    @minLength(3)
    name: string;

    constructor(name: string){
      this.name = name;
    }
}

const api = new Api("produtos");
console.log(api.name);

