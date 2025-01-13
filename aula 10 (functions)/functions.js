Falaoi();

function Falaoi(){
    console.log('ola');
}

//first class
// function expression

const SouumDado= function(){
    console.log ('Bora')

}

function Executadora(funçao){
    console.log('Deu certo') // PASSEI A FUNÇAO SouumDado PARA A FUNÇAO Executadora
    funçao();
}
Executadora(SouumDado)

// ARROWS FUNCTIONS
const Arrowfunction = () =>{
    console.log('irei falar')
}

Arrowfunction();

// FUNCTIONS OBJECTS

const Obj = {
    imspeak: function(){
        console.log("i'm speak"); //FUNCTIONS DECLARADAS COMO OBJETOS 
    }

}
Obj.imspeak(); //INVOCAÇÃO