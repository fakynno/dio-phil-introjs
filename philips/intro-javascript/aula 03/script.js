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