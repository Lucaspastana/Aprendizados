/* As PROMISES são algo que provavelmente irar acontecer no código. EX: (Esperando receber a resposta de um servidor,buscando algum dados no DB etc), e podemos dar uma mensagem de sucesso ou erro (Não apenas mensagens mas ações diversas) */

//const myPromise = new Promise(); Ele recebe dois parâmetros: um para o sucesso (resolve) e um em caso de erro (reject):

function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tmp) {
/* 1. Criação:
Você cria uma Promise usando o construtor new Promise((resolve, reject) => { ... }). A função passada como argumento, chamada de função executora, contém o código assíncrono. */
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
    resolve(msg);
  
    }, tmp);
  });
}
//No entanto, o método then( ) serve apenas para as promises resolvidas. E se a promise não for resolvida? Neste caso, precisaremos usar o método catch( ) .
espera("Olá 1", rand(1,3))
  .then(resposta => {
    console.log(resposta);
    return espera('Buscando dados', rand(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
    return espera('Tratando  ', rand(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
    return espera('Tratando  ', rand(1, 3));
  })




/* ARVORE DE NATAL (GAMBIARRA)
espera('calma 1', rand(1, 3), function () {
  espera('calma 2', rand(1, 3), function () {
    espera('calma 3', rand(1, 3));
  });
});
*/



