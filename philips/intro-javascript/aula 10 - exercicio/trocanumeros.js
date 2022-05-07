// exercicio 10

// Troque todos os elementos pares e diferentes de zero de um array pelo número 0.
// Se o array for vazio, retorne -1

// entrada: [1, 3, 4, 6, 80, 33, 23, 90]
// saida: [1, 3, 0, 0, 0, 33, 23, 0]
// entrada: []
// saida: -1

function arrayPares(arrayNumeros) {
    if (!arrayNumeros) return -1;
    if (!arrayNumeros.length) return -1;
    
    for (let i = 0; i < arrayNumeros.length; i++) {
        if (arrayNumeros[i] === 0) {
            console.log("você já é zero!");
        } else if (arrayNumeros[i] % 2 === 0) {
            console.log(`Substituindo ${arrayNumeros[i]} por 0...`);
            arrayNumeros[i] = 0;
        }
    }

    return arrayNumeros;
}

let novoArray = [1, 3, 4, 6, 80, 33, 23, 90];
