function criaPessoa(nome, idade, dinheiro) {
  return Object.create(pessoa, {
    nome: {value:nome},
    idade: {value:idade},
    dinheiro: {value:dinheiro},
  });
}
const ganha = {
    ganhar100(valor) {
      this.dinheiro.value+=valor},
    }

const pessoa = {...ganha};

const mateus = criaPessoa("mateus", 24, 0);
mateus.ganhar100(100);
mateus.ganhar100(100);
console.dir(`${mateus.idade}`);
