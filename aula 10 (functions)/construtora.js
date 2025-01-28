function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
      return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
    };
  }
  
  const person = new Person("Lucas", 25); // a palavra new cria um objeto automaticamente na engine
  console.log(person.greet());
  

  //A diferença entre funções de fábrica e funções de construtor em JavaScript está em sua implementação e uso para criar objetos. Aqui está uma análise:
/*
Função de fábrica
Uma função de fábrica é uma função regular que retorna um objeto.
Não utiliza a newpalavra-chave.
Ele permite mais flexibilidade na criação de objetos, como propriedades privadas e métodos usando fechamentos.
Mais fácil de compor ou misturar com outras funções. */

/*Função Construtora
Uma função construtora é uma função usada especificamente com a newpalavra-chave para criar objetos.
Ele atua como um modelo para criação de instâncias.
A newpalavra-chave cria automaticamente um objeto, atribui-o a thise o retorna.
Propriedades e métodos definidos usando thissão adicionados diretamente à instância.*/