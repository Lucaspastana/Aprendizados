function criaPessoa(nome,sobrenome, a, p){
    return {
        nome,
        sobrenome,
        fala(assunto){
            return `${nome} está ${assunto}`;
        },
        altura :a,
        peso: p,
        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('lucas', 'pastana', 1.8,80);
console.log(p1.fala('falando'));
