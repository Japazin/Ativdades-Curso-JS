class ValidaFormula {
  constructor() {
    this.formulario = document.querySelector(".Formulário");
    this.eventos();
  }
  eventos() {
    this.formulario.addEventListener("submit", (e) => {
      this.HandleSubmit(e);
    });
  }
  HandleSubmit(e) {
    e.preventDefault();
    const camposValidos = this.camposValidos();
  }
  camposValidos() {
    let valid = true;
    for (let campo of this.formulario.querySelectorAll (".validar")) {
      console.log(campo);
    }
  }
}
const valida = new ValidaFormula();
