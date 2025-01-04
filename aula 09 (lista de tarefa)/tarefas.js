const Tarefas = document.querySelector('.tarefas')
const Inserir = document.querySelector('.insirir')
const Lista = document.querySelector('.coisas')

function CriaLi(){
    const li = document.createElement('li')
    return li;
}


/* Tarefas.addEventListener('keypress', function(e){
    console.log(e);
}) */ //FUNÇÃO PARA VIZUALIZAR O KEYCODE DA TECLA PRESSIONADA 

function PegaTarefa(Texto){
    const li = CriaLi();
    li.innerText = Texto;
    Lista.appendChild(li);
}

Inserir.addEventListener('click', function(){
    if(!Tarefas.value) return; //PEGUEI O EVENTO DE CLICK E FIZ UMA FUNÇÃO PARA ME RETORNAR O VALOR NO INPUT
    PegaTarefa(Tarefas.value);
});