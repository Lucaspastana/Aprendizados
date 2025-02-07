//retorne os numeros maiores que 10

const numeros = [4,50,20,285,1,8,61,0,54,8,6,12,5,55,1,]
//                              ARROW FUNCTION que tem uma condiçao atrelado a FILTER()
const filtrados = numeros.filter(valor => valor < 10);

console.log(filtrados)



const pessoas = [
    {nome: 'luiz', idade: 52},
    {nome: 'lucas', idade: 52},
    {nome: 'vinicius', idade: 52},
    {nome: 'otavio', idade: 52},
    {nome: 'jessiacas', idade: 52},
];

const pessoasNome = pessoas.filter(obj => obj.nome.length >= 5);
const pessoasIdade = pessoas.filter(obj => obj.idade > 50);

console.log(pessoasNome,pessoasIdade)


