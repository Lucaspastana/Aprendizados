function lifeseconds(segundos){
    let data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}
const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
let segundos = 0;

function iniciarRelogio(){
    const timer = setInterval(function(){
     segundos++;
     relogio.innerHTML = lifeseconds(segundos);
    },1000);
}


iniciar.addEventListener('click', function(event){
    iniciarRelogio();
});
