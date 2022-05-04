// FUNÇÕES DE UMA CALCULADORA

function calculadora() {
    const operacao = Number(prompt('Escolha uma operação: \n 1 - Soma (+) \n 2 - Subtração (-) \n ' + 
    '3 - Multiplicação (*) \n 4 - Divisão real (/) \n 5 - Divisão Inteira (%) \n 6 - Potenciação (**)'));


    let numero1 = Number(prompt('Insira o 1o valor'));
    let numero2 = Number(prompt('Insira o 2o valor'));
    let resultado;

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

    function soma() {
        resultado = numero1 + numero2;
        alert(`${numero1} + ${numero2} = ${resultado}`);
    }

    function subtracao() {
        resultado = numero1 - numero2;
        alert(`${numero1} - ${numero2} = ${resultado}`);
    }

    function multiplicacao() {
        resultado = numero1 * numero2;
        alert(`${numero1} * ${numero2} = ${resultado}`);
    }

    function divisaoReal() {
        resultado = numero1 / numero2;
        alert(`${numero1} / ${numero2} = ${resultado}`);        
    }

    function divisaoInteira() {
        resultado = numero1 % numero2;
        alert(`O resto da divisão entre ${numero1} e ${numero2} é igual a ${resultado}`);
    }

    function potenciacao() {
        resultado = numero1 ** numero2;
        alert(`${numero1} elevado a ${numero2} é igual a ${resultado}`);
    }

 }

calculadora();