function Criaobjeto(nome, preco) {
    (this.objeto = nome), (this.preco = preco);
}
Object.prototype.aumento = function (aumento) {
    //prototype "global""
    this.preco += aumento;
};
function Criapessoa(nome, preco) {
    Criaobjeto.call(this, nome, preco);
}

const objt = new Criaobjeto("PC", 999);
objt.aumento(100);
console.log(objt);

const objtpessoa = new Criapessoa("mateusalves", 999);
objtpessoa.aumento(400);
console.log(objtpessoa);
