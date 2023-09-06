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

    for (let erroText of this.formulario.querySelectorAll('.erro-text')) {
      erroText.remove();
    }

    for (let campo of this.formulario.querySelectorAll(".validar")) {
      const label = campo.previousElementSibling.innerText;

      if (!campo.value) {
        this.criaerro(campo, `campo "${label}" não pode estar vazio.`);
        valid = false;
      }

      if (campo.classList.contains('CPF')) {
        if (!this.validacpf(campo)) valid = false;
      }

    }
  }
  validacpf(campo) {
    const cpf = new ValidaCPF(campo.value);

    if (!cpf.valida()) {
      this.criaerro(campo, 'CPF inválido.');
      return false;
    }
    return true;
  }

  criaerro(campo, msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('erro-text');
    campo.insertAdjacentElement('afterend', div);
  }
}
const valida = new ValidaFormula();
