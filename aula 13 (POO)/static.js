class ControleRemoto{
    constructor(nome){
        this.nome =nome;
        this.volume= 0;
    }

    
    aumentar(){
        this.volume += 2;
        return
    
    }
    diminuir(){
        this.volume -= 2;
        return
    }
//o STATIC é basicamente uma funçao que está dentro de uma class.
//Usamos o static para organização do código.
    static soma(x,y){
        return x + y;
        
    }
}


const IniciaControle1 = new ControleRemoto("itv");

IniciaControle1.aumentar();
IniciaControle1.aumentar();
IniciaControle1.aumentar();
//O metodo STATIC  só pode ser chamado pela class no exemplo utilizei a class principal que é: "ControleRemoto".
console.log(ControleRemoto.soma(5,5));


console.log(IniciaControle1);