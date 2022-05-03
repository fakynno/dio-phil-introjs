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