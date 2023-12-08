const tex = document.getElementById("texto");
const num1 = document.getElementById("num");
let numero1 = Number(prompt("ditige um número:"));
num1.innerHTML = numero1;
// a utilização do += adiciona dados sem apagar os anteriores
tex.innerHTML += numero1 + 2;
tex.innerHTML += "teste";
