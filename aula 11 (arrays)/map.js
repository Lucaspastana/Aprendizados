
//MAP pode alterar os valores do array
// Dobre o valor (na function a seguir eu dobrei os valores dentro do ARRAY)
const numeros=[5 ,20 ,50 ,80,70,50,10,58,6,8,74,85,4,85,2,1,7,85,85,32,1,63,41]
const Dobranumero= numeros.map(function (valor){
    return valor * 2;
})

console.log(Dobranumero);