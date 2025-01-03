const Tarefas = document.querySelector('.tarefas')
const Inserir = document.querySelector('.insirir')
const Lista = document.querySelector('.coisas')
function PegaTarefa(Texto){
    console.log(Texto)
}

Inserir.addEventListener('click', function(){
    if(!Tarefas.value) return; //PEGUEI O EVENTO DE CLICK E FIZ UMA FUNÇÃO PARA ME RETORNAR O VALOR NO INPUT
    PegaTarefa(Tarefas.value);
});