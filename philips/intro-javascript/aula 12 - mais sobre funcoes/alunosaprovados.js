// ATIVIDADE PRÁTICA
// Crie uma função que recebe o array alunos e um número que irá representar a média final;
// Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são 
// maiores ou iguais à média final;
// Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.

const alunos = [
    {
        nome: 'Fabio Aquino',
        nota: 7,
        turma: '1C'        
    },
    {
        nome: 'Andrea Macedo',
        nota: 9,
        turma: '2C'
    },
    {
        nome: 'Luigi Macedo',
        nota: 3,
        turma: '7A'
    },
    {
        nome: 'Gabriel Rocha',
        nota: 4,
        turma: '9B'
    }
]

function alunosAprovados(arr, mediaFinal) {
    let aprovados = [];

    for (let i = 0; i < arr.length; i++) {

        const { nota, nome } = arr[i];

        if (nota >= mediaFinal) {
            aprovados.push(nome);
        }
    }    
    return aprovados;
}

console.log('Alunos aprovados: \n' + alunosAprovados(alunos, 5));