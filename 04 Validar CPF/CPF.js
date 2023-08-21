function CPFválido(cpfp) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function () {
            cpfp = cpfp.replace(/\D+/g, "");
            const cpfarray = Array.from(cpfp);
            const digito1 = this.novedigtosresult(cpfarray);
            const digito2 = this.dezdigtosresult(cpfarray);
            const digito1verdadeiro = cpfarray[9];
            const digito2verdadeiro = cpfarray[10];
            //validação do CPF
            return digito1 != digito1verdadeiro || digito2 != digito2verdadeiro
                ? "CPF inválido!!"
                : "CPF Válido!!";
        }
    })
}
CPFválido.prototype.novedigtosresult = function (cpf1) {
    let cpf = [...cpf1];
    cpf = cpf.splice(0, 9);
    contadoor = cpf.length + 2;
    cpf = cpf.reduce(function (acul, valor) {
        contadoor = contadoor - 1;
        return acul + valor * contadoor; //mutiplicação e soma dos 9 digitos
    }, 0);
    cpf = cpf % 11;
    cpf < 2 ? (cpf = 0) : (cpf = 11 - cpf); //verificando se é menor que 2 e retornando 0 se verdadeiro
    return cpf;
}
CPFválido.prototype.dezdigtosresult = function (cpf1) {
    let cpf = [...cpf1];
    cpf = cpf.splice(0, 10);
    contadoor = cpf.length + 2;
    cpf = cpf.reduce(function (acul, valor) {
        contadoor = contadoor - 1;
        return acul + valor * contadoor; //mutiplicação e soma dos 10 digitos
    }, 0);
    cpf = cpf % 11;
    cpf < 2 ? (cpf = 0) : (cpf = 11 - cpf); //verificando se é menor que 2 e retornando 0 se verdadeiro
    return cpf;
}
let result = new CPFválido("705.484.450-52");
console.log(result.cpfLimpo);
