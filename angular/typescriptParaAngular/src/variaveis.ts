// variaveis tipo primitivas 

let ligado :boolean = false;
let nome : string = "john";
let idade : number = 1 ;

/// variaveis especias

let nulo : null = null;
let indefinido: undefined = undefined;

//tipo abrangentes 

let retorno : void = undefined; // recebe  vazio
let coisas : any = undefined;   // recebe qualquer coisa 


/// objeto - sem previsibilidade 

let produdo : object = {
  nome : "joão",
  cidade : "sp",
  idade : 30,
};

type ProdutoLoja = {
   nome: string;
   preco: number;
   unidades: number;

};

let meuProdudo: ProdutoLoja = {
  nome: "sapato",
  preco: 89.99,
  unidades: 5,
};


// arrays

let dados: string[] = ["felipe", "ana", "joan"];
let dados2: Array<string> = ["felipe", "ana", "joan"];

let infos: (string|number)[] = ["felipe", "ana", 3, 65];

/// tuplas

let boleto:[string, number, number] = ["agua conta", 199.55 , 1212444551154 ]

/// Datas

let aniversario:Date = new Date("2024-01-24 05:00");
console.log(aniversario.toString());

