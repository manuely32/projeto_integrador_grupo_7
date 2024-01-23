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

//Usar setInterval para chamar a função a cada 6000 milissegundos (6 segundos)
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
        imagemPost: './img/artigo1.jpg',
        link_post: 'https://www.medicina.ufmg.br/conheca-o-acretismo-placentario-uma-das-principais-causas-de-morte-materna/',
        textoPost: '<strong>Conheça o acretismo placentário, uma das principais causas de morte materna</strong>. A ocorrência da doença aumentou nas últimas décadas, acompanhando o aumento dos partos cesáreas.'
    },
    {
        imagemPost: './img/artigo2.jpg',
        link_post: 'https://drauziovarella.uol.com.br/doencas-e-sintomas/eclampsia-e-pre-eclampsia/',
        textoPost: '<strong>Eclâmpsia e Pré-Eclâmpsia</strong>. A gravidez pressupõe o crescimento de um ser geneticamente diferente dentro do útero da mulher, uma vez que herdou metade dos genes do pai. Ela não rejeita esse corpo estranho porque desenvolve mecanismos imunológicos para proteger o feto.'
    },
    {
        imagemPost: './img/artigo3.jpg',
        link_post: 'https://drapatriciavarella.com.br/blog/qual-a-importancia-da-atividade-fisica-na-gestacao/',
        textoPost: '<strong>Qual a importância da atividade física na gestação?</strong> Você já ouviu falar que grávidas não podem praticar exercícios físicos? Pois é! Esse mito foi disseminado e é muito comum ouvi-lo.Mas, a verdade é que realizar exercícios durante a gestação é fundamental para a saúde!'
    },
    {
        imagemPost: './img/artigo4.jpg',
        link_post: 'https://begenerous.com.br/blog/alimentacao-para-gestantes/',
        textoPost: '<strong>Alimentação para gestantes: Mais saúde para a mãe e o bebê.</strong> Durante a gravidez e a amamentação, a demanda por nutrientes aumenta, fazendo com que a ingestão de alimentos seja maior. Isso é necessário, pois a alimentação para gestantes precisa atender tanto às necessidades do organismo da mãe quanto apoiar o crescimento e o desenvolvimento do bebê.'
    }
];


for (let i = 0; i < postsArticles.length; i++) {

    const containerCardsArticles = document.querySelector('#containerCardsArticles');
    const cards = document.createElement('div');
    cards.classList.add('cardArtigo');
    cards.innerHTML = `
        <a href="${postsArticles[i].link_post}" target='blank' style="text-decoration: none;">
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
        imagemPost: './img/imagem_link_curiosidade_1.png',
        textoPost: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam vero quas animi id adipisci dignissimos quo voluptate illum illo, ipsa porro, libero, nobis harum sint dicta debitis? Numquam et in quasi! Eum nisi repudiandae voluptate rerum inventore impedit sapiente possimus ipsum modi adipisci. Voluptas, veritatis. Quidem doloribus quam molestias amet.'
    },
    {
        imagemPost: './img/imagem_link_curiosidade_1.png',
        textoPost: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam vero quas animi id adipisci dignissimos quo voluptate illum illo, ipsa porro, libero, nobis harum sint dicta debitis? Numquam et in quasi! Eum nisi repudiandae voluptate rerum inventore impedit sapiente possimus ipsum modi adipisci. Voluptas, veritatis. Quidem doloribus quam molestias amet.'
    },
    {
        imagemPost: './img/imagem_link_curiosidade_1.png',
        textoPost: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam vero quas animi id adipisci dignissimos quo voluptate illum illo, ipsa porro, libero, nobis harum sint dicta debitis? Numquam et in quasi! Eum nisi repudiandae voluptate rerum inventore impedit sapiente possimus ipsum modi adipisci. Voluptas, veritatis. Quidem doloribus quam molestias amet.'
    },
    {
        imagemPost: './img/imagem_link_curiosidade_1.png',
        textoPost: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam vero quas animi id adipisci dignissimos quo voluptate illum illo, ipsa porro, libero, nobis harum sint dicta debitis? Numquam et in quasi! Eum nisi repudiandae voluptate rerum inventore impedit sapiente possimus ipsum modi adipisci. Voluptas, veritatis. Quidem doloribus quam molestias amet.'
    }
];
for (let i = 0; i < postsCuriosities.length; i++) {

    const containerCardsCuriosities = document.querySelector('#containerCardsCuriosities');
    const cards = document.createElement('div');
    cards.classList.add('cardArtigo');
    cards.innerHTML = `
        <a href="" target='blank' style="text-decoration: none;">
            <p class="paragrafoCardArtigo" style="">
            <img style="margin: 0px 10px 0px 0px ;aspect-ratio: 3/2; width: 140px; box-shadow: 0px 0px 5px rgba(0,0,0, 0.2);float:left;" src="${postsCuriosities[i].imagemPost}" alt="">
            ${postsCuriosities[i].textoPost}
            </p>
        </a>
    `;
    containerCardsCuriosities.appendChild(cards);
}


