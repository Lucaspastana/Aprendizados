//O escopo léxico em JavaScript é o local onde uma expressão é definida, ou seja, o local onde um item foi criado. Ele define a visibilidade e a acessibilidade de variáveis em um contexto específico.

const nome = 'lucas'

function falaNome(){
    console.log(nome);
}

function usaFalanome(){
    const nome = 'vini'
    falaNome(nome)
}
usaFalanome()