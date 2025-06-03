/* Aqui trataremos de possíveis erros que podem acontecer com usuarios e não temos
o controle total desses erros, mas podemos implementar funcionalidade previa para tratativa
desse erro */

// a instrução THROW é uma captura de erro que impede o programa executar o código posterior a ele. Mas esse erro caso ocorra no programa, pode ser capturado por blocos de tratamentos de erros.

//Uma cláusula catch contém declarações que especificam o que fazer caso uma exceção seja lançada no bloco try. Ou seja, se você quer que o bloco try tenha êxito, e caso não tenha, você quer que o controle passe para o bloco catch.

//TRY tenta executar o código.

//catch(e) é inserido quando qualquer exceção for lançada.


function soma (x,y){
  if(typeof x !== 'Number' || typeof y !== 'Number'){
    throw new ReferenceError(`xeynsenumber`);
  }
  return x + y;
}
try{
console.log(soma(5,5))
}catch(err){
  //console.log(err)
  console.log("Exibição do erro mais amigavel" + err);
}