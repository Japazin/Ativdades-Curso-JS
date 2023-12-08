// Map 
const arrai =[1,2,3,4,54,56,23,22,676,674,22,2];
const pessoas = [
    { nome: 'MATEUS', idade: 24 },
    { nome: 'MARCOS', idade: 27 },
    { nome: 'FRANCISCO', idade: 21 },
    { nome: 'ANA', idade: 53 }
  ];
const dobro = arrai.map(valor=> valor*2);// mapea o array não podendo adicionar mais ao tamaho do array, que terá sempre o mesmo tamanho
const pessoanomeobj= pessoas.map(obj=> ({nome: obj.nome}));
// const id =pessoas.map(function(obj,indice){
// return obj.id =indice +1;
// });
const naoalteraarrayoriginal= pessoas.map(function(obj,indice){
    const newarray={...obj};
     newarray.id = indice;// adiciona um indici no array novo 
     return newarray;
});
console.log(pessoas);
console.log(naoalteraarrayoriginal);
