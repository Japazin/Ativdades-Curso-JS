class Dispositivo {
    constructor(nome, valor, ligado) {
        (this.nome = nome),
        (this.valor = valor), 
        (this.ligado = ligado);
    }
    ligar(){
        console.log("ligado!");
       if(!this.ligado) this.ligado =true;
    }
    desligar(){
        console.log("desligado");
        if(this.ligado) this.ligado =false;
     }
}

const smartphone = new Dispositivo("POCO x5", 2000, true);
smartphone.desligar();
console.log(smartphone);
console.log(".................................");

class Tablet extends Dispositivo {
    constructor(nome, valor, cor, ligado) {
        super(nome, valor, ligado); //trás os parâmetros para essa nova class
        this.cor = cor;
    }
}

const tablet = new Tablet("iPad", 1000,"preto", false, );
tablet.ligar();
console.log(tablet);
