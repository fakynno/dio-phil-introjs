// USO DE FUNÇÕES

function novaFuncao() {
    console.log('Chegamos até aqui');    
}

novaFuncao();


// USO DE FUNÇÕES COM PARÂMETROS

function soma(a, b) {
    console.log('resultado: ' + (a+b));
}

valor1 = 12;
valor2 = 25;

console.log('soma: ' + soma(valor1, valor2));

console.log('***********************');

// outro exemplo

function mensagem(primeira, segunda) {
    console.log(primeira, segunda);
}

mensagem('A estrada', 'até aqui');