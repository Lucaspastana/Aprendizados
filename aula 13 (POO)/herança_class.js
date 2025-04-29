class DispositivoEletri{
    constructor(nome){
        this.nome=nome;
        this.ligado= false;
    }

    ligar(){
        if(this.ligado){
            console.log(this.nome + "ja está ligado");
            return;
        }

        this.ligado = true;
    }

    desligar(){
        if(!this.ligado){
            console.log(this.nome + 'está desligado');
            return;
        }
    }


}

//AGORA AQUI É UM CÓDIGO EXTENDIDO DA CLASS PAI. 
//Para criar uma subclasse, usamos a palavra-chave extends para informar ao JavaScript a classe na qual queremos basear nossa classe.

class TV extends DispositivoEletri{
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }

    //caso eu queira posso criar metódos que irão se aplicar em apenas nesse excopo.
}

const c1 = new TV ("samsung", "preto", "fxv");
console.log(c1)
