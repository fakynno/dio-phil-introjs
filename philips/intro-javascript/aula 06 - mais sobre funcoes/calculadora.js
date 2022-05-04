// FUNÇÕES DE UMA CALCULADORA

function calculadora() {
    const operacao = prompt('Escolha uma operação: \n 1 - Soma (+) \n 2 - Subtração (-) \n ' + 
    '3 - Multiplicação (*) \n 4 - Divisão real (/) \n 5 - Potenciação (**)');


    let numero1 = prompt('Insira o 1o valor');
    let numero2 = prompt('Insira o 2o valor');
    let resultado;

    function soma() {
        resultado = numero1 + numero2;
        alert(`${numero1} + ${numero2} = ${resultado}`);
    }

        if (operacao == 1) {
            soma();
        } else if (operacao == 2) {
            subtracao();
        } else if (operacao == 3) {
            multiplicacao();
        } else if (operacao == 4) {
            divisaoReal();
        } else if (operacao == 5) {
            divisaoInteira();
        } else if (operacao == 6) {
            potenciacao();
        }
 }
 
calculadora();