function calculaIMC() {
  const prompt = require("prompt-sync")();
  let nome1 = prompt("Digite seu nome:");

  function imctrue() {
    const alt = prompt("Digite sua altura em metros usando ponto:");
    const peso = prompt("Digite o seu peso:");
    let imc = peso / (alt * alt);
    return (imc = imc);
  }
  let imc = imctrue();

  if (!isNaN(imc)) {
    console.log(`O seu IMC ${nome1} é de:${imc.toFixed(2)}`);
    console.log("Obrigado por usar o codigo!")
  } else {
    console.log('DIGITE AS INFORMAÇÕES CORRETAS!!')
    calculaIMC();
  }
}

calculaIMC();
