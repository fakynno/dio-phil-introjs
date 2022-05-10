// Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos

const arrayDuplicados = [30, 30, 40, 5, 223, 2049, 3034, 5];

function removeDuplicados(arrayDuplicados) {
    let novoArray = new Set();
    
    for (let i = 0; i < arrayDuplicados.length; i++) {
        novoArray.add(arrayDuplicados[i]);
    }

    return novoArray;
}

console.log('Novo Set populado:');
console.log(removeDuplicados(arrayDuplicados));

console.log('*********************');

// VERSAO DO INSTRUTOR

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
    const mySet = new Set(arr);

    return [...mySet];
}

console.log(valoresUnicos(meuArray));