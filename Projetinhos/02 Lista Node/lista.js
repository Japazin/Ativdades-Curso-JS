const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefa = document.querySelector(".tarefas");

function criaTarefa(taref) {
  const li = document.createElement("li");
  li.innerText = taref;
  tarefa.appendChild(li);
  criaButton(li);
  cleanInput();
  salvarTarefas();
}
function salvarTarefas() {
  const lista = document.querySelectorAll("li");
  const listataref = [];
  for (let tar of lista) {
    let textoTaref = tar.innerText;
    textoTaref = textoTaref.replace("apagar", "").trim();
    listataref.push(textoTaref);

    const tarefasJSON = JSON.stringify(listataref);
    localStorage.setItem("tarefas", tarefasJSON);
  }
}
function criaButton(li) {
  li.innerText += " ";
  const button = document.createElement("button");
  button.innerText = "apagar";
  button.setAttribute("class", "apagar");
  li.appendChild(button);
}
function cleanInput() {
  inputTarefa.value = "";
}

inputTarefa.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});

btnTarefa.addEventListener("click", (e) => {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});

document.addEventListener("click", function (e) {
  const el = e.target;
  if (el.classList.contains("apagar")) {
    el.parentElement.remove();
    salvarTarefas();
  }
});

function adicionartarefas() {
  const tarefas = localStorage.getItem("tarefas");
  const listadetarefa = JSON.parse(tarefas);
  console.log(listadetarefa);
  for (let tarefa of listadetarefa) {
    criaTarefa(tarefa);
  }
}
adicionartarefas();
