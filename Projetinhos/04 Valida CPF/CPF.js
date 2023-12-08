function CPFválido(cpfp) {
    Object.defineProperty(this, "cpfLimpo", {
        enumerable: true,
        get: function () {
            cpfp = cpfp.replace(/\D+/g, "");
            const cpfarray = Array.from(cpfp);
            const digito1 = this.novedigtosresult(cpfarray);
            const digito2 = this.dezdigtosresult(cpfarray);
            const digito1verdadeiro = cpfarray[9];
            const digito2verdadeiro = cpfarray[10];
            //validação do CPF
            if (this.sequenciacpf(cpfp) === true) return "CPF inválido!!";
            return digito1 != digito1verdadeiro || digito2 != digito2verdadeiro
                ? "CPF inválido!!"
                : "CPF Válido!!";
        },
    });
}
CPFválido.prototype.novedigtosresult = function (cpf1) {
    let cpf = [...cpf1];
    cpf = cpf.splice(0, 9);
    let contadoor = cpf.length + 2;
    cpf = cpf.reduce(function (acul, valor) {
        contadoor = contadoor - 1;
        return acul + valor * contadoor; //mutiplicação e soma dos 9 digitos
    }, 0);
    cpf = cpf % 11;
    cpf < 2 ? (cpf = 0) : (cpf = 11 - cpf); //verificando se é menor que 2 e retornando 0 se verdadeiro
    return cpf;
};
CPFválido.prototype.dezdigtosresult = function (cpf1) {
    let cpf10 = [...cpf1];
    cpf10 = cpf10.splice(0, 10);
   let contadoor = cpf10.length + 2;
    cpf10 = cpf10.reduce(function (acul, valor) {
        contadoor = contadoor - 1;
        return acul + valor * contadoor; //mutiplicação e soma dos 10 digitos
    }, 0);
    cpf10 = cpf10 % 11;
    cpf10 < 2 ? (cpf10 = 0) : (cpf10 = 11 - cpf10); //verificando se é menor que 2 e retornando 0 se verdadeiro
    return cpf10;
};
CPFválido.prototype.sequenciacpf = function (cpfp) {
    const sequencia = cpfp[0].repeat(cpfp.length);
    return sequencia === cpfp;
};
let result = new CPFválido("111.111.111-11");
console.log(result.cpfLimpo);
// 705.484.450-52 070.987.720-03
