function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const olamundo = falaFrase('ola')
console.log(olamundo('mundo'))