document.addEventListener('click', e=> {
    const el= e.target;
    const tag= el.tagName.toLowerCase();
    
    if (tag == 'a'){
        e.preventDefault();
        carregaPagina(el);
    }
});
 function carregaPagina(el){
    const heref = el.getAttribute('href');
    
    fetch(href)
    .then(response => response.text())
    .then(html=>{

    })
}
function carregaPagina(response){
    const result = document.querySelector('.resultado');
    resultado.innerHTML = response;
}