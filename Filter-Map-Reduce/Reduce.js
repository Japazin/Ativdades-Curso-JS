// const array =[100,1,2,3,4];

// const total= array.reduce(function(acum,valor){
//     if (valor % 2 === 0) acum.push(valor);
//     return acum; 
// },[]);
// console.log(total);

const pessoas = [
    { nome: 'MATEUS', idade: 24 },
    { nome: 'MARCOS', idade: 27 },
    { nome: 'FRANCISCO', idade: 21 },
    { nome: 'ANA', idade: 53 }
  ];
  const maisVelho= pessoas.reduce(function(acm,valor){
 if (acm.idade>valor.idade)return acm;
 return valor;
  });
  console.log(maisVelho);