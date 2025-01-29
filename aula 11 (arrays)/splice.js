//                -5      -4      -3      -2         -1
//                0       1      2         3          4
const nomes = ['maria','joao','eduardo','gabriel','juliana'];
//nomes.splice(indice, delete, elem1, elem2, elem3);

                               //AQUI COMEÇOU 
const removidos = nomes.splice(-2,Number.MAX_VALUE);
console.log(nomes,removidos);

//The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements
