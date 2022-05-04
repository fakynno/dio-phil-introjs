// TIPOS DE FUNÇÃO

// expressão de função
// com nomeação da função
var funcao = function novaFuncao() {
    console.log('Uma função qualquer');
}

funcao();

console.log('***************');

// expressão de função
// sem nomeação da função
var outraFuncao = function() {
    console.log('Aqui outra mensagem');
}

outraFuncao();

console.log('***************');

// usando arrow function
var novaFuncao = () => {
    console.log('Aqui é uma arrow function');
}

novaFuncao();