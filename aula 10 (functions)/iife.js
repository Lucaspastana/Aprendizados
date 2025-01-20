(function(idade, peso,altura){
    const sobrenome ="Pastana";
    function criaNome(nome){
        return nome + " " +sobrenome;
    }

    function falaNome(){
        console.log(criaNome('Lukinhas'));
    }

    falaNome();
    console.log(idade,peso,altura);
})(30,80,1.80);