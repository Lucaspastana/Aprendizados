// defineProperty and defineProperties




/* O Object.defineProperty() método estatico define uma nova propiedade diretamente no objeto, ou modifica uma propiedade existente no objeto e o retorna
*/




function Produto (nome,modelo,valor){
  this.nome = nome;
  this.valor = valor;
  Object.defineProperty(this,'modelo',{
    enumerable: true, //MOSTRA AS CHAVES DO OBBJETO
    value: modelo, //VALOR DO PARAMETRO
    writable: false, // SE PODE ALTERAR
    configurable: true, // SE PODE HAVER REDEFINIÇÃO 

  });
// The Object.defineProperties() static method defines new or modifies existing properties directly on an object, returning the object.
  Object.defineProperties(this,{
    nome: {
      enumerable: true,
      value: nome,
      writable: true,
      configurable: true
    },
     valor: {
      enumerable: true,
      value: nome,
      writable: true,
      configurable: true
    },
     modelo: {
      enumerable: true,
      value: nome,
      writable: true,
      configurable: true
    }
  })

}

const p1= new Produto('Camiseta', 20, 30);
//o Object.keys() mostra um array de nomes de propriedade enumeráveis de um determinado objeto.
console.log(Object.keys(p1));


// ESSE FOR MOSTRA AS CHAVES DO OBJETO 
for(let chave in p1){
  console.log(chave)
}