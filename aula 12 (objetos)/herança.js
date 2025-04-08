/* A Herança é um conceito fundamental d programação orientada a objetos e permite
que UM OBJETO HERDE PROPRIEDADES E METODOS DE OUTROS. Isso ajuda a criar uma estrutura mais 
organizada e reutilizavel no códio */

function Produto(nome, preço){
    this.nome = nome;
    this.preço = preço;
}

Produto.prototype.aumento = function(quantia){
    this.preço += quantia
};

Produto.prototype.desconto = function(quantia){
    this.preço -= quantia
};

// Agora aqui vamos fazer uma função que roda a function Produto

function Camiseta(nome, preço){
    Produto.call(this,preço,nome);
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(percentual){
    this.preço = this.preço + (this.preço *(percentual / 100))
}
const camiseta = new Camiseta("regata", 1.78);

console.log(Produto);

 