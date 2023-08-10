const array =[100,1,2,3,4];

const total= array.reduce(function(acum,valor){
    if (valor % 2 === 0) acum.push(valor);
    return acum; 
},[]);
console.log(total);