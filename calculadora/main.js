function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
  
        inicia() {
            alert("olá mateus");
            this.cliquesBotoes();
        },
        clearDisplay(){
            this.display.value ='';
        },
        apagUm(){
         this.display.value = this.display.value.slice(0, -1);
        },
        resul(){
            this.display.value = eval(this.display.value)
        },
        cliquesBotoes() {
            document.addEventListener('click', (e) => {
                const el = e.target;
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                if (el.classList.contains('btn-del')){
                    this.apagUm();
                }
                if( el.classList.contains('btn-eq')){
                    this.resul();
                }

            });
        },
        btnParaDisplay(valor) {
            this.display.value += valor;
        },
    };
};

const calculadora = criaCalculadora();
calculadora.inicia();