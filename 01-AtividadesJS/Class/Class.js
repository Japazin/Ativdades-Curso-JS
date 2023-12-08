const _velocidade=Symbol("valocidade");

class Pessoa {
  constructor(nome,) {
    (this.nome = nome),  
    (this[_velocidade] = 0);
  }

   get velocidade(){
     return this[_velocidade];
   }

 acelerar(valor) {
    this[_velocidade] += valor;
  }
}



const carro = new Pessoa("BMW");
carro.acelerar(200);
carro.velocidade=3000;
console.log(carro.velocidade);
console.log(".................................");

