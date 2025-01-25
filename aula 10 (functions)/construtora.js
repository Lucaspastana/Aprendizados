function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
      return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
    };
  }
  
  const person = new Person("Lucas", 25); // a palavra new cria um objeto automaticamente na engine
  console.log(person.greet());
  