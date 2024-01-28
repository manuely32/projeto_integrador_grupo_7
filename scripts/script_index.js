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
        imagemPost: './img/fotoCuriosidades1.png',
        textoPost: '<strong> Março e maio são os meses com mais nascimentos no Brasil</strong>. Segundo um levantamento feito pela BBC News Brasil, com dados das últimas duas décadas, os meses de março e maio realmente têm mais nascimentos. <br> De acordo com a pesquisa, os números são 17% mais altos que o de nascimentos nos últimos três meses do ano.'
    },
    {
        imagemPost: './img/fotoCuriosidades2.png',
        textoPost: '<strong>Dormir do lado esquerdo é melhor para a grávida</strong> <br> Deitar do lado direito pode provocar a compressão da veia cava, o que pode aumentar a pressão arterial da mulher. Portanto, se deitar do lado esquerdo é sempre mais confortável e seguro.'
    },
    {
        imagemPost: './img/fotoCuriosidades3.png',
        textoPost: '<strong>Os bebês abrem os olhos dentro do útero e podem ver a luz do lado de fora</strong>. <br> Embora os olhos de um bebê possam “ver” a luz a partir mais ou menos da semana 16, seus olhos não estão totalmente formados até cerca da semana 20. Os olhos abrem primeiro entre as semanas 26 e 28.'
    },
    {
        imagemPost: './img/fotoCuriosidades4.png',
        textoPost: '<strong>A dieta da mãe afeta as preferências alimentares futuras de um bebê</strong>. <br> Uma vez que as moléculas de sabor viajam tão facilmente, muitos estudos mostraram que preferências alimentares e aversões a determinados alimentos começam no útero desta maneira. Se a mãe evita certos alimentos, o bebê provavelmente rejeitará esses sabores fora do útero.'
    }
];

for (let i = 0; i < postsCuriosities.length; i++) {

    const containerCardsCuriosities = document.querySelector('#containerCardsCuriosities');
    const cards = document.createElement('div');
    cards.classList.add('cardArtigo');
    cards.innerHTML = `
        <a href="/curiosidades.html" style="text-decoration: none;">
            <p class="paragrafoCardArtigo" style="">
            <img style="margin: 0px 10px 0px 0px ;aspect-ratio: 3/2; width: 140px; box-shadow: 0px 0px 5px rgba(0,0,0, 0.2);float:left;" src="${postsCuriosities[i].imagemPost}" alt="">
            ${postsCuriosities[i].textoPost}
            </p>
        </a>
    `;
    containerCardsCuriosities.appendChild(cards);
}


