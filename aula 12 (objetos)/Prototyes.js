function Produto(nome, preço){
    this.nome= nome;
    this.preço= preço;
}

Produto.prototype.descoto = function(percentual){
    this.preço = this.preço - (this.preço * (percentual / 100));
};

Produto.prototype.aumento = function(percentual){
    this.preço = this.preço + (this.preço * (percentual / 100));
};

const p1 = new Produto("camisa",50);

const p2 = {
    nome: 'caneca',
    preço: 15
}