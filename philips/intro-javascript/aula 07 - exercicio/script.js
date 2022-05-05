// exercício prático

// crie uma função que recebe 2 números como parâmetros
// confira se os números são iguais
// confira se a soma dos número é maior que 10 ou menor que 20
// retorne uma string dizendo: "os números 'num1' e 'num2' não/são iguais. sua soma é 
// 'soma', que é 'maior/menor' que 10 e 'menor/maior' que 20

function comparaNumeros() {
    
    let numero1 = Number(prompt('Informe um número: '));
    let numero2 = Number(prompt('Informe outro número: '));
    let soma = numero1 + numero2;
    
    let resultado = numero1 == numero2? alert(`Os números ${numero1} e ${numero2} são iguais`) 
    : alert(`Os números ${numero1} e ${numero2} não são iguais`);
    alert(`Sua soma é ${numero1 + numero2}, que é ${(numero1 + numero2 > 10? 'maior' : 'menor')} que 10 e 
    ${(numero1 + numero2 > 20? 'maior' : 'menor')} que 20`);
    
    // const opcao = Number(prompt('Informe um número: '));

}

comparaNumeros();