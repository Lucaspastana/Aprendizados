//possibilita filttar os resultados dos parametros

/*function ALL(a,b,c){
    let total = 0;
    for(let argumentos of arguments){
        total += argumentos
    }

    console.log(total,a,b,c)
}

ALL(1,2,3,4,5,6,7,8,9,10)
*/

// ESQUEMA DE FATORAÇÃO
function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

// Exemplo de uso:
console.log(fatorial(5)); // Saída: 120
