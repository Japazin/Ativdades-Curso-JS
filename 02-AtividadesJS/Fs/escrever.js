const fs = require('fs').promises;
const path = require('path');
const caminho = path.resolve(__dirname, './', 'jasoncriado.json');

const dados = {
    nome: 'Mateus',
    idade: '24',
};
const Json = JSON.stringify(dados);

fs.writeFile(caminho, Json, { flag: 'w' });