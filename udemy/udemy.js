/*const nome='lucas';
const sobrenome='pastana';
const idade=18;
const peso=60;
const altura=1.70;

let imc = peso / (altura*altura);
let datanascimento=2005;

console.log(`ola meu nome,${nome} ,eu tenho, ${sobrenome} , ${idade}, ${peso}, ${altura}, ${imc}, ${datanascimento}`)

*/
/*
let num1 = 10.25;
let num2 = 2.5;
let temp = num1 * 'ola';
console.log(Number.isNaN(temp));
 */

/*const numero = Number(prompt('Digite o numero'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = '';
texto.innerHTML += `<p>Seu numero + 2 é ${numero + 2}.</p>`;*/


// 2 CODIGO DO JS.

/*function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];
    
    function recebeEventoForm(evento){
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome:nome.value,
            sobrenome:sobrenome.value,
            peso:peso.value,
            altura:altura.value
        });

        console.log(pessoas);
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value}
        ${altura.value}`;
    } 
 
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo(); */

//3 CÓDIGO JS

class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

falar() {
    console.log(`${this.nome} está comendo`);
}
}


const p1 = new Pessoa("Lucas", 25);
console.log(p1);
