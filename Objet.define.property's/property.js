function ProdutoObjt(nome, preco, estoque) {
  (this.nome = nome),(this.preco = preco)
  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra a chave?
    value: estoque, // valor da chave :
    writable: true, // pode alterar?
    configurable: false, // reconfigurável?
  });

  Object.defineProperties(this, {
    nome:{
      enumerable: true, // mostra a chave?
      value: estoque, // valor da chave :
      writable: true, // pode alterar?
      configurable: false, // reconfigurável?  
    }
  })
}

const produto1 = new ProdutoObjt("camiseta", 30, 1);
console.log(produto1);
