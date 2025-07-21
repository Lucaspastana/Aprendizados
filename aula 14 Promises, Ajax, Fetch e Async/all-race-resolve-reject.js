function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tmp) {
  return new Promise((resolve,reject)=>{
    if(typeof msg != 'string')reject(false);

    setTimeout(() => {
    resolve(msg);

    }, tmp);
  });
}

// Promise.all Promise.race Promise.resolve Promise.reject

const promises = [
    
    espera('Promise 1', rand(1,5)),
    espera('Promise 2', rand(1,5)),
    espera('Promise 3', rand(1,5)),
    
];

/*Promise.all(promises)
  .then(function(valor){
    console.log(valor)
  })
  .catch(function(erro){
    console.log(erro);
  }) */

    // O método race() retorna o primeiro valor resolvido.
Promise.race(promises)
  .then(function(valor){
    console.log(valor)
  })
  .catch(function(erro){
    console.log(erro);
  })

function baixaPagina(){
  const emCache = false;

  if(emCache){
    return Promise.resolve('Pagina em cache');
  }else{
    return espera('baixei', 3000);
  }
}

baixaPagina()
  .then(dadospagina => {
    console.log(dadospagina)
  })

  .catch(e => console.log(e));