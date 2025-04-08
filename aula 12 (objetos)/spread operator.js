const none1={
    nome:"lucas",
    idade:"16",
    sobrenome:"pastana"
}

const none2= {
    ...none1,
    cargo: "estudante"
};
//Esse operador, representado por três pontos (…), “espalha” as propriedades do objeto original em um novo objeto. 
// Em outras palavras, ele copia todas as propriedades do objeto original para um novo objeto.

none1.nome="joão"
console.log(none2);
console.log(none1);    //o objeto original não é alterado


function constr(marca,modelo,cor){
    this.marca=marca;
    this.modelo=modelo;
    this.cor=cor;
}

//criando objetos com o construtor
const carro1 = new constr("fiat","uno","vermelho");
const carro2 = new constr("ford","ka","azul");

console.log(carro1);


