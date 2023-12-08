const array = [1, 2, 3, 4, 54, 56, 23, 22, 676, 674, 22, 2];

const filterMapReduce = array
  .filter((valor) => valor % 2 === 0)//filtra po array ou objeto
  .map((valor) => valor * 2)// mapea o array parecido com filter 
  .reduce((acum, valor) => acum + valor);// reduz o codigo e faz o que map e filter fazen

console.log(filterMapReduce);


array.forEach(valor => console.log(valor)); //somente percorre o array parecido com for