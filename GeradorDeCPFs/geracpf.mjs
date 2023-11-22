import ValidaCPF from "./CPFClass";


 class GeraCPF {
rand(min =100000000, max =999999999){
    return  String(Math.floor(Math.random()*(max -min)+min))
}
geranovoCPF(){
    const cpfSemDigito= this.rand();
    const digito1 = ValidaCPF.calculo9digitos(cpfSemDigito);
    const digito2 = ValidaCPF.calculo10digitos(cpfSemDigito);
    const novoCPF = cpfSemDigito+digito1+digito2;
    return  console.log(novoCPF);
}
}
(function (){
    const gera = new GeraCPF();
    const cpfGerado= document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geranovoCPF();
})