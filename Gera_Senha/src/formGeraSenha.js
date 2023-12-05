import geraSenha from './Geradores';
const senhaGerada = document.querySelector('.senha-gerada');
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const gerarSenha = document.querySelector('.gera-senha');




export default () => {
    gerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera();
    });
};

function gera() {
    const senha = geraSenha(
        qtdCaracteres.value,
        chkMaiusculas.checked,
        chkMinusculas.checked,
        chkNumeros.checked,
        chkSimbolos.checked,
    );
    return senha || 'Nada Selecionado';
}