// Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. 
// Crie seus próprios objetos para esta atividade

const pessoa1 = {
    nome: 'Fabio Aquino',
    idade: 40
}

const pessoa2 = {
    nome: 'Andrea Macedo',
    idade: 42
}

function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.`;
}

// uso da chamada com CALL
console.log(calculaIdade.call(pessoa1, 7));
console.log(calculaIdade.call(pessoa2, 9));

// uso da chamada com APPLY
console.log(calculaIdade.apply(pessoa2, [5]));