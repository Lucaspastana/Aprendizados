// TIPO DE FUNÇOES PARECIDO COMO BONECAS RUSSAS, FICA UMA NO ESCOPO DA OUTRA.

/*function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('ola')
const resto = fala('mundo');
console.log(resto); */

function criaMultiplicador(multiplicador){
    return function (n){
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)

console.log(duplica(2))
console.log(triplica(3))
console.log(quadriplica(4))