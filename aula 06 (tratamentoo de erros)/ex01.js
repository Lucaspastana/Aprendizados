function soma(x,y){
    if(x !== 'number' || y !== ' number'){
        throw new reportError ('Não há')
    }

return x + y;
}

console.log(soma(5,5))