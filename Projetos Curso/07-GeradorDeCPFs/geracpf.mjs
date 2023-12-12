import ValidaCPF from "./CPFClass.js";
class GeraCPF {
    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min))
    }
    geranovoCPF() {
        const cpfSemDigito = this.rand();
        const digito1 = ValidaCPF.calculo9digitos(Array.from(cpfSemDigito));
        const digito2 = ValidaCPF.calculo10digitos(Array.from(cpfSemDigito+digito1));
        const novoCPF = cpfSemDigito + digito1 + digito2;
        return novoCPF;
    }
};
(function () {
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geranovoCPF();
})();

