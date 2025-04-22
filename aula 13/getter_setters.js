/*  O Symbol usado principalmente para criar identificadores únicos. 
Ele é útil quando você quer garantir que uma propriedade de objeto seja única e não colida com outras propriedades, 
mesmo que tenham o mesmo nome.

Quando usar Symbol?
Quando você precisa garantir que uma propriedade seja única;

Para simular campos "privados";

Ao criar APIs ou bibliotecas, evitando conflitos com outras propriedades;

Para sobrecarregar comportamentos padrão (como iteração).
*/


const _velocidade = Symbol('velocidade')
class Carro{ 
    constructor(nome){
        this.nome = nome;
        this[_velocidade]= 0; 
    }

    set velocidade(valor){
        console.log("SETTER");
        if(typeof valor !== 'number')return;
        if(valor >= 100 || valor >= 0)return;
        this[_velocidade] = valor;
    }

    get velocidade(){
        console.log('GETTER');
        return this(_velocidade)
    }

    acelerar(){
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar(){
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro("fusion");

//for (let i= 0; i <= 200; i++){
 //   c1.acelerar();
//}

console.log(c1.velocidade);
c1.velocidade= 55;