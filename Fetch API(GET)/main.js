// document.addEventListener("click", (e) => {
//   const el = e.target;
//   const tag = el.tagName.toLowerCase();

//   if (tag == "a") {
//     e.preventDefault();
//     carregaPagina(el);
//   }
// });
// function carregaPagina(el) {
//   const href = el.getAttribute("href");

//   fetch(href)
//     .then(response => response.text())
//     .then( html => carregaResultado(html))
//     .catch(e => console.log(e));
// }
// function carregaResultado(response) {
//   const result = document.querySelector(".resultado");
//   result.innerHTML = response;
// } 

