// vetores e arrays

// declaracao de arrays
let array = ['Fabio Aquino', 12.56, true];
console.log('=================');

// arrays podem guardar outros arrays
let outroArray = ['Uma string qualquer', 126.79, 125751, ['array1'], ['array2'], ['array3']];
// mostra todo o array
console.log('=================');
console.log(outroArray);

// mostra um indice especifico
console.log(outroArray[2]);

console.log('=================');

// percorrendo o array com forEach
outroArray.forEach(function(item, index){
    console.log(item, index);
});
console.log('=================');

// push --> adiciona um novo item no final do array
outroArray.push('um novo item');
console.log(outroArray);
console.log('=================');

// pop --> remove um item no final do array
outroArray.pop();
console.log(outroArray);
console.log('=================');

// pop --> remove um item no início do array
outroArray.pop();
console.log(outroArray);
console.log('=================');

// shift --> remove um item no início do array
outroArray.shift();
console.log(outroArray);
console.log('=================');

// unshift --> adiciona um item no início do array
outroArray.unshift();
console.log(outroArray);
console.log('=================');

// indexOf --> retorna o índice de um valor
console.log(outroArray.indexOf(125751));
console.log('=================');

outroArray.push('Marcos graciano');
outroArray.push('Felipe');
outroArray.push('Mirella');
outroArray.push('Mais do mesmo');

console.log(outroArray);

// uso do splice --> remove ou substitui um
// item pelo indice

outroArray.splice(2, 4);
console.log(outroArray);

// uso do slice --> retorna uma parte de um array existente
let novoArray = outroArray.slice(1, 3);
console.log(novoArray);

console.log('============================');

// UTILIZANDO OBJETOS

let meuObjeto = {
    string: 'Fabio Aquino',
    number: 40,
    boolean: true,
    arrayCozinha: [
        'faca',
        'garfo',
        'colher',
        'prato',
        'guardanapo'
    ],
    arrayQuarto: [
        'cama',
        'coberta',
        'travesseiro',
        'chinelo',
        'colchão',
        'lençol',
        'tomada',
    ],
    objetoInterno: {
        nome: 'fabio',
        sobrenome: 'Aquino',
        profissao: 'Programador',
        salario: 1752.35
    }
}

// acessando os elementos do objeto principal pelo tipo
console.log('acessando os elementos do objeto principal pelo tipo');
console.log(meuObjeto.string);

// acessando os elementos do objeto cozinha pelo indice
console.log('acessando os elementos do objeto cozinha pelo indice');
console.log(meuObjeto.arrayCozinha[4]);

// acessando os elementos do objeto quarto pelo indice
console.log('acessando os elementos do objeto quarto pelo indice');
console.log(meuObjeto.arrayQuarto[2]);

// acessando todos os elementos do objeto interno pelo indice
console.log('acessando os elementos do objeto interno pelo indice');
console.log(meuObjeto.objetoInterno);

// acessando um elemento especifico do objeto interno pelo nome do elemento
console.log('acessando os elementos do objeto interno pelo nome do elemento');
console.log(meuObjeto.objetoInterno.profissao);
console.log('============================');


// DESESTRUTURACAO DE OBJETOS

// podemos selecionar o tipo desejado e jogar dentro de uma variavel,
// para depois chamar seu valor

var texto = meuObjeto.string;
console.log(texto);
console.log('============================');

var texto2 = meuObjeto.objetoInterno;
console.log(texto2);
console.log('============================');

// outra forma de desestruturar é declarar uma chave vazia
// e atribuir o objeto a ela
// dentro das chaves podemos colocar o que quisermos desse objeto

var { string, number } = meuObjeto;
console.log(string, number);
console.log('============================');


var { string, arrayCozinha } = meuObjeto;
console.log(arrayCozinha, string);
console.log('============================');


var { arrayCozinha, arrayQuarto, objetoInterno } = meuObjeto;
console.log(arrayCozinha, objetoInterno, arrayQuarto);