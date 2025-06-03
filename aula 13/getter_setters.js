/*  O Symbol usado principalmente para criar identificadores únicos. 
Ele é útil quando você quer garantir que uma propriedade de objeto seja única e não colida com outras propriedades, 
mesmo que tenham o mesmo nome.

Quando usar Symbol?
Quando você precisa garantir que uma propriedade seja única;

Para simular campos "privados";

Ao criar APIs ou bibliotecas, evitando conflitos com outras propriedades;

Para sobrecarregar comportamentos padrão (como iteração).
*/



/* o metodo SET  serve para quando eu preciso alterar || mudar o valor de um atríbuto */


const _velocidade = Symbol('velocidade')
class Carro{ 
    constructor(nome){
        this.nome = nome;
        this[_velocidade]= 0; 
    }

    set velocidade(valor){
        console.log("SETTER");
        if (typeof valor !== 'number') return;
        if (valor < 0 || valor > 100) return;        
        this[_velocidade] = valor;
    }

    get velocidade(){
        console.log('GETTER');
        return this[_velocidade]
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
c1.velocidade= 98;
console.log(c1.velocidade);
