const elementos =[
    {tag:'p',text:'teste de objeto elemento p'},
    {tag:'div',text:'teste de objeto elemento div'},
    {tag:'section',text:'teste de objeto elemento section'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i =0; i<elementos.length;i++) {
let { tag, text } =elementos[i];
let tagcriada = document.createElement(tag);
tagcriada.innerHTML=text;
div.appendChild(tagcriada);
};

container.appendChild(div);