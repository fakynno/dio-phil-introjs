// tipos primitivos

// boolean
var vOuF = false;
console.log(typeof(vOuF));

// number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

// string
var nome = 'Fabio Aquino';
console.log(typeof(nome));

// funcao
var funcao = function() {}
console.log(typeof(funcao));

// declaracao de variaveis com var
var variavel = 'mensagem de teste';
console.log(variavel);

// declaracao de variaveis com let
let outraVariavel = 'Luigi Macedo';
console.log(outraVariavel);

// declaracao de variaveis com const
const constante = 'Gabriel';
console.log(constante);

// usando escopo global
var escopoGlobal = 'global';
console.log(escopoGlobal);

// funcao com escopo global
function escopoLocal() {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

escopoLocal();

// exemplos de comparacao
var comparacao = '0' == 0 ;
console.log(comparacao);

// exemplos de comparacao identica
var comparacaoIdentica = '0' === 0 ;
console.log(comparacaoIdentica);

// OPERADORES ARITMETICOS

// Adicao
var soma = 12 + 46;
console.log('Valor da soma: ' + soma);

// Subtracao
var subtracao = 46 - 12;
console.log('Valor da subtracao: ' + subtracao);

// Multiplicacao
var multiplicacao = 46 * 12;
console.log('Valor da multiplicacao: ' + multiplicacao);

// Divisao
var divisao = 46 / 12;
console.log('Valor da divisao real: ' + divisao);

// Divisao inteira (ou resto)
var modulo = 5 % 2;
console.log('Resto de 5 dividido por 2 => ' + modulo);

// Potenciacao
var potencia = 2 ** 10;
console.log('Resultado da potenciacao => ' + potencia);

// OPERADORES RELACIONAIS

// maior que
var maiorQue = 10 > 5;
console.log('10 é maior que 5? ' + maiorQue);

// menor que
var menorQue = 10 < 5;
console.log('10 é menor que 5? ' + menorQue);

// maior ou igual a
var maiorOuIgual = 10 >= 7;
console.log('10 é maior ou igual a 7? ' + maiorOuIgual);

// menor ou igual a
var menorOuIgual = 10 <= 7;
console.log('10 é menor ou igual a 7? ' + menorOuIgual);