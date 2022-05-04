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

