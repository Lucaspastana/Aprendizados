/*

° As funções assíncronas funcionam como Promises, porém sintaxe mais simpls;

° Precisamos declarar a função com a palavra async;

° E quando precisamos aguardar por algo a instrução precisa de await;

° Podemos aplicar o recurso em funções anônimas e métodos de classe;

° Tentar usar o await sem o async gera um erro;
*/

function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}



function espera(msg, tmp) {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      if(typeof msg !== 'string'){
        reject("Caí")
      }
    resolve(msg + ' vambora');
    }, tmp);
  });
}


/*espera(5, 1000).then((value) =>{
  console.log(value)
}).catch((e)=>{
  console.log(e)
}) */

async function executora() {
  try{
  const fase1 = await espera('Ola 1', rand());
  console.log(fase1)
  const fase2 = await espera('Ola 2', rand());
  console.log(fase2)
  const fase3 = await espera('Ola 3', rand());
  console.log(fase3)
  }catch(e){
    console.log(e)
  }
}
  
 