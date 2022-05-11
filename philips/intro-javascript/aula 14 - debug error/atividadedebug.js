// Tratamento de Erros
// Atividade: validação de erros por tipo
// Crie uma função que recebe um array e um número
// Realize as seguintes validações
// Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
// Se o array não for do tipo 'object', lance um erro do tipo TypeError
// Se o número não for do tipo 'number', lance um erro do tipo TypeError
// Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
// Utilize a declaração try...catch
// Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof

function verificaArray(arr, numero) {
    
    try{
        if (!arr && !numero) throw new ReferenceError("Parâmetros faltando");

        if (typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object");

        if (typeof numero !== 'number') throw new TypeError("Variável '" + numero + "' não é um número");

        if (arr.length !== numero) throw new RangeError("Tamanho inválido");        

        console.log("Elementos do Array: ");

        return arr;
    }
    catch (e) {
        if (e instanceof ReferenceError) {
            console.log("Tipo do Erro - ReferenceError: não foi passado nenhum parâmetro")                        
            console.log(e.stack);
        } else if (e instanceof TypeError) {
            console.log("Tipo do Erro - TypeError");
            console.log(e.stack);
        } else if (e instanceof RangeError) {
            console.log("Tipo do Erro - RangeError: Fora do intervalo");
            console.log(e.stack);
        } else {
            console.log("Tipo de erro não esperado: " + e);
        }
    }
    
}

console.log(verificaArray([1, 2, 3], 3));
