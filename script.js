let conjuntoCarrousel = document.querySelector('#carroussel');
let elementos = Array.from(conjuntoCarrousel.children);
let indiceElementoAtivo = 0;
let myInterval;
let temporizador;

function alterarImagem(fator) {
    let elementoAtivo = conjuntoCarrousel.querySelector('.active');

    // Remover a classe "active" do elemento atual
    elementoAtivo.classList.remove("active");

    // Avançar para o próximo elemento
    indiceElementoAtivo += fator;

    // Verificar se atingiu o final da matriz
    if (indiceElementoAtivo < 0) {
        // Se atingiu o final, voltar ao primeiro elemento
        indiceElementoAtivo = elementos.length - 1;
    }
    if (indiceElementoAtivo >= elementos.length) {
        // Se atingiu o final, voltar ao primeiro elemento
        indiceElementoAtivo = 0;
    }

    // Adicionar a classe "active" ao próximo elemento
    elementos[indiceElementoAtivo].classList.add("active");
    console.log(indiceElementoAtivo);
    pararContador()
    ativarContador()    
}

// Usar setInterval para chamar a função a cada 6000 milissegundos (6 segundos)
myInterval = setInterval(proximaImagem, 6000);

function pararContador() {
    clearInterval(myInterval);
}

function ativarContador() {
    // Usar setInterval novamente para reiniciar o intervalo
    myInterval = setInterval(proximaImagem, 6000);
}


const postsArticles = [
    {
        imagemPost: './img/images_1.jpg',
        textoPost: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam vero quas animi id adipisci dignissimos quo voluptate illum illo, ipsa porro, libero, nobis harum sint dicta debitis? Numquam et in quasi! Eum nisi repudiandae voluptate rerum inventore impedit sapiente possimus ipsum modi adipisci. Voluptas, veritatis. Quidem doloribus quam molestias amet.'
    },
    {
        imagemPost: './img/images_3.jpg',
        textoPost: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam vero quas animi id adipisci dignissimos quo voluptate illum illo, ipsa porro, libero, nobis harum sint dicta debitis? Numquam et in quasi! Eum nisi repudiandae voluptate rerum inventore impedit sapiente possimus ipsum modi adipisci. Voluptas, veritatis. Quidem doloribus quam molestias amet.'
    },
    {
        imagemPost: './img/images_2.jpg',
        textoPost: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam vero quas animi id adipisci dignissimos quo voluptate illum illo, ipsa porro, libero, nobis harum sint dicta debitis? Numquam et in quasi! Eum nisi repudiandae voluptate rerum inventore impedit sapiente possimus ipsum modi adipisci. Voluptas, veritatis. Quidem doloribus quam molestias amet.'
    },
    {
        imagemPost: './img/images_1.jpg',
        textoPost: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam vero quas animi id adipisci dignissimos quo voluptate illum illo, ipsa porro, libero, nobis harum sint dicta debitis? Numquam et in quasi! Eum nisi repudiandae voluptate rerum inventore impedit sapiente possimus ipsum modi adipisci. Voluptas, veritatis. Quidem doloribus quam molestias amet.'
    }
];
for(let i = 0; i < postsArticles.length; i++){

    const containerCardsArticles = document.querySelector('#containerCardsArticles');
    const cards = document.createElement('div');
    cards.classList.add('cardArtigo');
    cards.innerHTML = `
        <a href="" style="text-decoration: none; color: #f76363;">
            <p class="paragrafoCardArtigo" style="">
            <img style="margin: 0px 10px 0px 0px ;aspect-ratio: 3/2; width: 140px; box-shadow: 0px 0px 5px rgba(0,0,0, 0.2);float:left;" src="${postsArticles[i].imagemPost}" alt="">
            ${postsArticles[i].textoPost}
            </p>
        </a>
    `;
    containerCardsArticles.appendChild(cards);
}

const postsCuriosities = [
    {
        imagemPost: './img/images_1.jpg',
        textoPost: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam vero quas animi id adipisci dignissimos quo voluptate illum illo, ipsa porro, libero, nobis harum sint dicta debitis? Numquam et in quasi! Eum nisi repudiandae voluptate rerum inventore impedit sapiente possimus ipsum modi adipisci. Voluptas, veritatis. Quidem doloribus quam molestias amet.'
    },
    {
        imagemPost: './img/images_3.jpg',
        textoPost: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam vero quas animi id adipisci dignissimos quo voluptate illum illo, ipsa porro, libero, nobis harum sint dicta debitis? Numquam et in quasi! Eum nisi repudiandae voluptate rerum inventore impedit sapiente possimus ipsum modi adipisci. Voluptas, veritatis. Quidem doloribus quam molestias amet.'
    },
    {
        imagemPost: './img/images_2.jpg',
        textoPost: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam vero quas animi id adipisci dignissimos quo voluptate illum illo, ipsa porro, libero, nobis harum sint dicta debitis? Numquam et in quasi! Eum nisi repudiandae voluptate rerum inventore impedit sapiente possimus ipsum modi adipisci. Voluptas, veritatis. Quidem doloribus quam molestias amet.'
    },
    {
        imagemPost: './img/images_1.jpg',
        textoPost: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam vero quas animi id adipisci dignissimos quo voluptate illum illo, ipsa porro, libero, nobis harum sint dicta debitis? Numquam et in quasi! Eum nisi repudiandae voluptate rerum inventore impedit sapiente possimus ipsum modi adipisci. Voluptas, veritatis. Quidem doloribus quam molestias amet.'
    }
];
for(let i = 0; i < postsCuriosities.length; i++){

    const containerCardsCuriosities = document.querySelector('#containerCardsCuriosities');
    const cards = document.createElement('div');
    cards.classList.add('cardArtigo');
    cards.innerHTML = `
        <a href="" style="text-decoration: none; color: #f76363;">
            <p class="paragrafoCardArtigo" style="">
            <img style="margin: 0px 10px 0px 0px ;aspect-ratio: 3/2; width: 140px; box-shadow: 0px 0px 5px rgba(0,0,0, 0.2);float:left;" src="${postsCuriosities[i].imagemPost}" alt="">
            ${postsCuriosities[i].textoPost}
            </p>
        </a>
    `;
    containerCardsCuriosities.appendChild(cards);
}


