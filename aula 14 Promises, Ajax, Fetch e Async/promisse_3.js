function Dispara(nome){
  return new Promise((resolve,reject) =>{
    setTimeout(()=>{
      if(nome != 'string'){
        reject(new Error);
        
      }
      resolve(nome)
    },3000)
  })
}

Dispara(1)
.then(resposta=>{
       console.log(resposta)
})
.catch((e) =>{
  console.log("cara você colocou numero !")
})

      







