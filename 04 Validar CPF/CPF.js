
let cpfp = "12345678909";
//primeira validação mutiplicando os 9 primeiros digitos do CPF com 10 até 2 soma resultado e divide por 11


function novedgsoma (cpf){
    let cpf1= Array.from(cpf);
    cpf1 = cpf1.splice(0,9);
    cpf1= cpf1.reduce(function (acul,indice,valor) {
return acul = acul+valor ;
    },0);

    console.log(cpf1);
}
novedgsoma(cpfp);

// const result = validaCPF(cpfp);
// console.log(result);