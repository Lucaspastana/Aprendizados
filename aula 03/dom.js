const elementos = [
    {tag: 'p', texto: 'Qualquer um'},
    {tag: 'div', texto: 'Frase 1 '},
    {tag: 'section', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++ ) {
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada);
    
}

container.appendChild(div);
