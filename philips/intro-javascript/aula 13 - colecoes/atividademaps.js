// Crie uma funcao que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.
// Crie uma funcao 'getAdmins' que recebe um 'Map';
// Crie um Map e popule-o com nomes de usuarios e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
// Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usuarios 
// que são administradores.

const usuarios = [
    {
        nome: 'Fabio',
        perfil: 'analista'
    },
    {
        nome: 'Luigi',
        perfil: 'admin'
    },
    {
        nome: 'gabriel',
        perfil: 'admin'
    },
    {
        nome: 'andrea',
        perfil: 'analista'
    },
    {
        nome: 'fernanda',
        perfil: 'analista'
    },
    {
        nome: 'gil',
        perfil: 'admin'
    }
];

function getAdmins(perfil) {
    let perfilMap = new Map();
    
    for (let i = 0; i < usuarios.length; i++) {        
        if (usuarios[i].perfil === 'admin') {
            perfilMap.set(usuarios[i].nome, usuarios[i].perfil);
        }        
    }

    //for (let lista of perfilMap) {
    //    console.log(lista);
    //}

    return perfilMap;
}

console.log(getAdmins(usuarios));