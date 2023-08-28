const objetoproto1 = {
  nome: "Mateus",
  idade: 24,
};

const objetoproto2 = {
  nome: "Marcos",
  idade: 27,
};

Object.prototype.anonasc = function (objetonome, idade) {
  idade = 2023 - idade;
  return (objetonome.nasciment = idade);
};

Object.setPrototypeOf(objetoproto2, objetoproto1);

anonasc(objetoproto1, objetoproto1.idade);
anonasc(objetoproto2, objetoproto2.idade);

function ReturnObj (nome, valor) {
    this.nome=nome,
    this.valor=valor
}

const ob1 = Object.create(objetoproto1);
ob1.nome = "mateus";
ob1.idade = 24;
anonasc(ob1, ob1.idade);
ob1.testteobjt = "teste";

const result = new ReturnObj ("dinheiro", 333);

const testeproto= Object.create( ReturnObj.prototype, {
   nome:{value:'criado o objeto e passado o prototype'},
});

console.log( result.nome);
console.log(ob1);

console.log(testeproto.nome);

console.dir(objetoproto1);
console.dir(objetoproto2);