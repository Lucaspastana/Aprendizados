function retornaHora(data){ // crie
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando instancia de date');
    }


    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR',{
        hour:'2-digit',
        minute:'2-digit',
        second: '2-digit',
        hour12: false
    });
}

try{
    const data = new Date('01-01-1970');
    const hora = retornaHora();
    console.log(hora);
} catch(e){
  //trata erro
}finally{
    console.log('bom dia');
}