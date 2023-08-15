const objetoproto1 = {
    nome: "Mateus",
    idade: 24,
};

const objetoproto2 = {
    nome: "Marcos",
    idade: 27,
};

Object.prototype.anonasc = function(objetonome,idade){
   idade=2023-idade;
    return objetonome.nasciment=idade;
};

Object.setPrototypeOf(objetoproto2,objetoproto1);

anonasc(objetoproto1,objetoproto1.idade);
anonasc(objetoproto2,objetoproto2.idade);

console.dir(objetoproto1);
console.dir(objetoproto2);