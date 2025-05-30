const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso')
    const inputAltura = e.target.querySelector('#altura')


    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);


    if (!peso) {
        setResultado('Peso invalido', false);
        return;
    }
    if (!altura) {
        setResultado('Altura invalida', false);
        return;
    }

    const imc = getImc(peso,altura);
    const getNivelImc = getNivelImc(imc);



    setResultado(msg,true);
    console.log(imc, nivel); 
});

function getNivelImc(imc){
    const nivel= ['abaixo do peso', 'peso normal', 'sobrepeso', 'obesidade grau 1','obesidade grau2'];


    if(imc >=39.9) return nivel [5];
    if(imc >=34.9) return nivel [4];
    if(imc >=29.9) return nivel [3];
    if(imc > 18.5) return nivel [2];
}

function getImc (peso,altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);

}

function criaP(className) {
    const p = document.createElement('p');
    return p;

}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';


    const p = criaP();
    resultado.appendChild(p);
    p.innerHTML = msg;
    
}

