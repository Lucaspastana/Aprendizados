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

Tarefas.addEventListener('keypress', function(e){
    if(e.keyCode === 13){// AQUI PEGUEI O KEYCODE DO ENTER PARA ATRIBUIR FUNCIONALIDADE NELE
      if(!Tarefas.value) return; //PEGUEI O EVENTO DE CLICK E FIZ UMA FUNÇÃO PARA ME RETORNAR O VALOR NO INPUT
     PegaTarefa(Tarefas.value);    
    }
})

function LimpaInput(){
    Tarefas.value = '';
    Tarefas.focus(); //O FOCUS É UM EVENTO DO HTML PARA O CURSOR

}

function PegaTarefa(Texto){
    const li = CriaLi();
    li.innerText = Texto;
    Lista.appendChild(li);
    LimpaInput();
    criaButton(li);

}

Inserir.addEventListener('click', function(){
    if(!Tarefas.value) return; //PEGUEI O EVENTO DE CLICK E FIZ UMA FUNÇÃO PARA ME RETORNAR O VALOR NO INPUT
    PegaTarefa(Tarefas.value);
    
});

function criaButton(li){
    li.innerText += " ";
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = "click";
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'apagar');
    li.appendChild(botaoApagar);
}

document.addEventListener('click', function(e){
    const el = e.target;

    if(el.classList.contains('apagar')){ //SELECIONEI O BOTAO DAS TAREFAS PARA APAGAR  (QUANDO CLICAR)
        console.log('clicou')
    }   
})