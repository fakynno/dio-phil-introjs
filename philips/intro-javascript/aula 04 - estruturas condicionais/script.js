// ESTRUTURAS CONDICIONAIS

var jogador1 = 0;
var jogador2 = 0;
var placar;

// if padrao

if (jogador1 > 0 && jogador2 == 0) {
    console.log('jogador 1 marcou ponto');
    placar = jogador1 > jogador2;
}

if (jogador1 != -1) {    
    // outro if padrao
    if(jogador1 > 0) {
        console.log('Jogador 1 marcou ponto');
    // uso do else if
    } else if (jogador2 > 0) {
        console.log('Jogador 2 marcou ponto');    
    // uso do else
    } else {
        console.log('Ninguém marcou ponto');
    }
}

console.log('*******************');

// exemplo de IF ternario

jogador1 != -1 && jogador2 != -1? console.log('Os jogadores são válidos') : console.log('Jogadores inválidos');


// USO DO SWITCH CASE

switch (placar) {
    case placar = jogador1 > jogador2: 
        console.log('jogador 1 ganhou');
        break;
    case placar = jogador2 > jogador1:
        console.log('jogador 2 ganhou');
        break;
    default:
        console.log('ninguem ganhou');
        break;
}

// USO DO FOR TRADICIONAL

let novoArray = ['valor 1','valor 2','valor 3','valor 4','valor 5'];

let objetoNovo = { 
    propriedade1: 'valor1',
    propriedade2: 'valor2',
    propriedade3: 'valor3'
}

// percorrendo o laco
for (let index = 0; index < novoArray.length; index++) {
    console.log(index);
}