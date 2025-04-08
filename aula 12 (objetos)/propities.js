function Produto(nome,preço,estoque){
    this.nome = nome
    this.preço = preço
}

Object.defineProperty(this,'estoque',{
    enumerable:true, //mostra a chave
    value: estoque, //valor
    writable: true, //pode alterar
    configurable:true //configuravel
});

const p1 = new Produto("camisa",20,3);
console.log(Object.keys(p1));



 