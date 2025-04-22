//  (1° definição) A CLASSE (CLASS) funciona como molde para criação ou reaprveitamento de algo.
//   (2° definição) Classes nada mais são do que construtores personalizados usados para definir tipos de referencias personalizadas
class  Person{
    constructor(name, last_name){
        this.name = name;
        this.last_name = last_name;

    }

    andar(){
        console.log(`${this.name} está andando `)
    }
}

const nome = new Person ("lucas", "pastana")
console.log(Person);

