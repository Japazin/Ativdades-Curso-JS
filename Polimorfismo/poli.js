function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}
Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
}
Conta.prototype.sacar = function (valor) {
    if (this.saldo - valor <= 0) return console.log(`saldo insuficiente! Saldo de:${this.saldo}`);
    this.saldo -= valor;

}
Conta.prototype.verSaldo = function () {
    console.log(`Agencia:${this.conta}///Saldo:R$${this.saldo}`);
}
function Poupanca(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
Poupanca.prototype = Object.create(Conta.prototype);
Poupanca.prototype.constructor = Poupanca; //passado o proto de Conta para Poupança 

Poupanca.prototype.sacar = function (valor) { //refeito a logica de sacar incluindo o paramentro limte da função criadora Poupança
    if (valor > this.limite + this.saldo)
        return console.log(`saldo insuficiente! Saldo de:${this.saldo}`);
    this.saldo -= valor;
}


const contaMateusp = new Poupanca("01", "001", 0, 100);
contaMateusp.depositar(10);
contaMateusp.sacar(109);
contaMateusp.verSaldo();

console.log();

const contaMateus = new Conta('02', '002', 0);
contaMateus.depositar(1200);
contaMateus.sacar(1201);
contaMateus.verSaldo();