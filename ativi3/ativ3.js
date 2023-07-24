
function imctrue() {
    const prompt = require('prompt-sync')();
    nome1 = prompt("Digite seu nome:");
    const alt = prompt("Digite sua altura em metros usando ponto:");
    const peso = prompt("Digite o seu peso:");
    imc = (peso / (alt * alt));
    imc=parseInt(imc);
}

imctrue();
var imc;
var nome1;
if (imc>!0){
    console.log(`O seu IMC ${nome1} é de:${imc}`)
}
while (imc==0){
 console.log('Digite as informações conforme pedidido!!')
    imctrue();
}