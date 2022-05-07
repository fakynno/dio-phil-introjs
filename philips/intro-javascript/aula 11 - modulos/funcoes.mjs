// crie uma função chamada mostraIdade, que recebe 'nome' e 'idade' e retorna a string:
// `a idade de ${} é ${}`
// siga o mesmo padrão para outras funções como 'mostraCidade' e 'mostraHobby'
// exporte essas funções

function mostraIdade(nome, idade) {
    return `A idade de ${nome} é ${idade}`;
}

function mostraCidade(nome, cidade) {
    "use strict";    
    return `A cidade de ${nome} se chama ${cidade}`;
}

function mostraHobby(nome, hobby) {
    return `O hobby de ${nome} é ${hobby}`;
}

export { mostraIdade, mostraCidade,mostraHobby };

