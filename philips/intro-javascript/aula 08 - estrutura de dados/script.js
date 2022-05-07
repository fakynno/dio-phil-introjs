// estrutura de dados - tipo STRING

let nome = "Fabio";

console.log(`Tipo do dado '${nome}': ${typeof(nome)}`);

let sobrenome = "Aquino";

console.log(`Nomes concatenados: ${nome.concat(sobrenome)}`);

let concatenado = nome.concat(sobrenome);
console.log(typeof(concatenado));

console.log(`Quantidade de caracteres de ${concatenado}: ${concatenado.length}`);

let frase = "o peito do pé do pedro é preto!"

console.log(frase.split(""));

console.log('*****************');

console.log(frase.split(" "));

console.log(frase.includes("peito"));

console.log(frase.startsWith("o"));

console.log(frase.endsWith("!"));

