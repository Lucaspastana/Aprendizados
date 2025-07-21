// Criaçao de promessa 

const mypromisse = new Promise((resolve,reject) => {
  const nome = "Lucas";

  if(nome ==="Lucas"){
    resolve("Ok")
  }else{
    reject("Opá !!!")
  }
})

mypromisse.then((data) => {
  console.log(data);
});