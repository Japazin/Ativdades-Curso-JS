const pessoas = [
  { nome: 'MATEUS', idade: 24 },
  { nome: 'MARCOS', idade: 27 },
  { nome: 'FRANCISCO', idade: 21 },
  { nome: 'ANA', idade: 53 }
];
const pes = pessoas.filter(obj => obj.idade > 30);//Filter não altera o array ou objeto original podendo diminuir  itens
const terminaemA= pessoas.filter(obj=> obj.nome.toLocaleLowerCase().endsWith("a"));
const nome5indices=pessoas.filter(obj=> obj.nome.length>5);
console.log(nome5indices);
console.log(pessoas);
ou

const arrai =[1,2,3,4,54,56,23,22,676,674,22,2];
function callBackFilter(valor,indice,array){
    if (valor>100) {
        return true;
    }else{
        return false;
    }
}
const maiorq100=arrai.filter(callBackFilter);
console.log(maiorq100);

OU

 const arrai =[1,2,3,4,54,56,23,22,676,674,22,2];
 const maiorq100=arrai.filter( (valor,indice,array)=>valor>10);
 console.log(maiorq100);

OU

const arrai =[1,2,3,4,54,56,23,22,676,674,22,2];
 const maiorq100=arrai.filter( (valor,indice,array)=>{
   console.log(indice,valor);
    return valor>10
});
 console.log(maiorq100);
