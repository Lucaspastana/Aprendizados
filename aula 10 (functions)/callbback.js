function Inserir(callback){
    let name = "lucas";
    callback(name); 
}

function Mostrar(name){
    console.log("ola"+ name);
}

Inserir(Mostrar);