/* Getters e Setteer são usador para proteger seus dados, especialmente na criação de classes.
Para cada instacia de variavel. um método GETTER retorna seu valor.
Enquanto o metódo SETTER o define ou atualiza.

*/



/*const _velocidade = Symbol('velocidade');

class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor) {
        console.log("SET")
        if (typeof valor !== 'number') return;
        if (valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    get velocidade() {
        console.log("GETTER");
        return this[_velocidade];
    }

    acelerar() {
        if (this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freia() {
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--;

    }

}

const c1 = new Carro('voiage');
c1.velocidade = 200;
console.log(c1.velocidade);


// esse For faz com aceleramos o carrinho.
/*for (let i = 0; i <= 100; i++) {
    c1.acelerar();
} */



// O metodo SET tem o poder de mudar ou redefinir os valores das variaveis.

class Pessoa {
    constructor(nome,sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomecompleto(){
        return this.nome ` ` + this.sobrenome;
    
    }

    set nomecompleto(valor){
    valor = valor.split(' ');
    this.nome = valor.shift();
    this.sobrenome = valor.join(' ');

    }
}

const p1 = new Pessoa ("Lucas", "Pastana");
p1.nomecompleto = 'Vinicius Pastana';

console.log(p1);


