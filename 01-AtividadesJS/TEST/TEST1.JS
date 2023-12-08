function returnDifrent(array1, array2) {
  let arrayok = array1.concat(array2);
  let apagado = arrayok;

  arrayok = arrayok.filter(function (valor, indice, array) {
    if (valor == array[indice +1 ]) {
        return arrayok.slice(valor);
    }}).filter(function(valor,indice, array){
          if (apagado[indice] == valor) {
      arrayok.slice(array[indice]);
    }
    });

  return arrayok;
}

const array1 = ["x", "x", "x", "v", "v", "m"];
const array2 = ["x", "x", "x"];
const result = returnDifrent(array1, array2);
console.log(result);
