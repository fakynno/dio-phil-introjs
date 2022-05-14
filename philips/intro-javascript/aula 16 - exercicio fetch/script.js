// Atividade: API "catAPI"
// Nesta atividade, vamos criar uma página que carrega fotos aleatórias de gatinhos 
// sempre que clicamos em um botão.
// Utilize a API https://thatcopy.pw/catapi/rest para fazer as chamadas com o método fetch();
// Utilize seus conhecimentos na manipulação do DOM para criar a imagem e ativar o evento de clique do botão!

//  function carregaImagem() {
//      fetch(url, {
//          method: 'GET',
//          mode: 'no-cors',
//          cache: 'no-cache'    
//      })
//        .then(resp => resp.json())       
//        .then(json => console.log(json))
//        .catch(function(err) {
//            console.log(err);
//        })
//  };

const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('troca-gato');
const catImg = document.getElementById('gato');

const obterGatos = async () => {
    try {
        const dados = await fetch(BASE_URL);
        const json = await dados.json();
    
        return json.webpurl;        
    } catch (err) {
        console.log(err.message);
    }
}

const loadImg = async () => {
    catImg.src = await obterGatos();
};

catBtn.addEventListener('click', loadImg);

loadImg();