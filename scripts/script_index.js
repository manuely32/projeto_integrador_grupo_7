// let conjuntoCarrousel = document.querySelector('#carroussel');
// let elementos = Array.from(conjuntoCarrousel.children);
// let indiceElementoAtivo = 0;
// let myInterval;

// function alterarImagem(fator) {
//     let elementoAtivo = conjuntoCarrousel.querySelector('.active');
//     // Remover a classe "active" do elemento atual
//     elementoAtivo.classList.remove("active");

//     // Avançar para o próximo elemento
//     indiceElementoAtivo += fator;

//     // Verificar se atingiu o final da matriz
//     if (indiceElementoAtivo < 0) {
//         // Se atingiu o final, voltar ao primeiro elemento
//         indiceElementoAtivo = elementos.length - 1;
//     }
//     if (indiceElementoAtivo >= elementos.length) {
//         // Se atingiu o final, voltar ao primeiro elemento
//         indiceElementoAtivo = 0;
//     }

//     // Adicionar a classe "active" ao próximo elemento
//     elementos[indiceElementoAtivo].classList.add("active");
//     pararContador()
//     ativarContador()
// }

// // Usar setInterval para chamar a função a cada 2 segundos
// myInterval = setInterval(function () {
//     alterarImagem(1);
// }, 4500);

// function pararContador() {
//     clearInterval(myInterval);
// }

// function ativarContador() {
//     // Reiniciar o intervalo
//     myInterval = setInterval(function () {
//         alterarImagem(1);
//     }, 4500);
// }

const postsArticles = [
    {
        id: 1,
        imagemPost: './img/artigo1.jpg',
        titulo: 'Acretismo Placentário, Conheça uma das principais causas da morte materna',
        subtitulo: 'A ocorrência da doença aumentou nas últimas décadas, acompanhando o aumento dos partos cesáreas.',
        paragrafos: [
            {
                texto: 'O <strong>Acretismo Placentário</strong> é uma importante causa de mortalidade materna no mundo. Tais mortes podem ser evitadas com o pré-natal de qualidade e profissionais atentos à placenta das gestantes com histórico de cesarianas, como explica especialista da Faculdade de Medicina da UFMG.',
                style: 'texto_artigos'
            },
            {
                texto: 'Também conhecida como espectro da placenta acreta, a doença ocorre quando a placenta fica mais aderida ao útero que o normal durante a gestação, causando uma grande hemorragia na hora do parto. Segundo o International Journal of Ginecology and Obstetrics, a incidência do acretismo na década de 1950 era de 1 para cada 30.000 partos. Atualmente, as ocorrências são de aproximadamente 1 para cada 500, a depender do local.',
                style: 'texto_artigos'
            },
            {
                texto: 'O sangramento do acretismo ameaça a vida da paciente, visto que a hemorragia é volumosa e nem sempre os hospitais estão preparados para uma cirurgia de alta complexidade ou para a necessidade de um grande volume de reposição de sangue, como pode ocorrer nesses casos. “O que faz com que aconteça o acretismo placentário ainda não está totalmente esclarecido, mas sabemos que o principal fator de risco é uma cirurgia uterina prévia. E a cirurgia uterina mais comumente realizada é a cesariana. Pela sua alta frequência, não só no Brasil como no mundo, os casos de acretismo são cada vez mais comuns”, aponta o chefe do Departamento de Ginecologia e Obstetrícia (GOB) da UFMG, Gabriel Osanan.',
                style: 'texto_artigos'
            },
            {
                texto: 'Geralmente, a placenta se solta depois do parto e a mulher a expulsa espontaneamente ou com ajuda médica. No caso do acretismo, ela fica fortemente ligada ao útero e faz com que a expulsão não seja possível. Por isso, é preciso que uma equipe multidisciplinar esteja preparada para realizar o parto e fazer com que a paciente perca o mínimo de sangue possível. “Um dos piores cenários que eu posso ter com acretismo placentário é a paciente começar a ter contrações fora da hora, ter parto de urgência e fora de um hospital especializado, sem capacidade de oferecer o cuidado necessário. Ela fica totalmente à mercê da sorte, visto que é uma cirurgia de alta complexidade”, aponta.',
                style: 'texto_artigos'
            },
            {
                texto: 'Nas ocorrências de acretismo, a placenta pode aparecer de três formas diferentes,classificadas a partir da profundidade que ela atinge o útero: acreta, quando está aderida de forma mais superficial; increta, quando afeta a musculatura do útero; ou percreta, quando penetra toda a musculatura e atinge outros órgãos, como a bexiga.',
                style: 'italic'
            },
            {
                texto: 'Além de um parto cesárea anterior, a doença também pode ser causada por outras cirurgias que causam cicatrizes uterinas, como a retirada de um mioma, curetagens de repetição, e até mesmo fertilização in vitro. “Quando a paciente já tem uma cesariana e a placenta está se formando na gravidez seguinte, ela pode aderir exatamente nessa cicatriz de forma mais profunda, gerando o quadro de acretismo”, explica o professor sobre a relação entre as cesáreas e o acretismo.',
                style: 'texto_artigos'
            }
        ],
        subsessões: [
            {
                titulo_sessão: 'Pré Natal é essencial',
                style: 'titulo_artigos',
                imagem_sessão: '/img/fotoArtigo2.png',
                paragrafos_sessao: [
                    {
                        texto: 'Por isso, o pré-natal é essencial: além de identificar um possível acretismo, o profissional poderá encaminhar a paciente a um centro de tratamento especializado e fazer os demais procedimentos para evitar complicações no parto. “Um dos maiores problemas com os casos dessa doença, e que pode contribuir para a morte materna, é quando o pré-natal não se atentou aos sinais de acretismo ou não foi feito pré-natal. Nesses casos, os partos ocorrem na urgência. É o pior cenário. Você vai ter um hospital despreparado e muito mais dificuldades”, afirma.',
                        style: 'texto_artigos'
                    },
                    {
                        texto: 'Para lidar com a doença, é necessário uma equipe multidisciplinar e especializada no seu tratamento, para que grandes complicações sejam evitadas. As gestantes com suspeita de acretismo devem ser encaminhadas a um centro de referência ainda durante o pré-natal para que tratamentos adequados sejam feitos e, então, o parto ocorra em ambiente mais seguro possível. Além disso, o pré-natal deve ter cuidado redobrado com possíveis complicações de uma gravidez. “Se eu sei que essa paciente tem um alto risco de ter uma hemorragia e a ela tem anemia, eu vou tratar essa condição primeiro. Pois se ela tem anemia e tiver um sangramento muito grande no parto, vai ficar ainda mais vulnerável”, explica.',
                        style: 'texto_artigos'
                    },
                    {
                        texto: 'Sendo assim, um importante ponto de partida é o entendimento de que o pré-natal é crucial não só para o diagnóstico de acretismo, mas também para outras doenças. Além disso, um ultrassom com atenção à placenta, em pacientes com fatores de risco para acretismo também é fundamental. “Nós estamos na fase de incentivar as pessoas a entenderem os riscos que elas têm. E só de olhar para a placenta com mais cautela já seria um grande avanço”, finaliza.',
                        style: 'texto_artigos'
                    }
                ]
            }
        ],
        link_post: '/artigos.html',
        textoPost: '<strong>Conheça o acretismo placentário, uma das principais causas de morte materna</strong>. A ocorrência da doença aumentou nas últimas décadas, acompanhando o aumento dos partos cesáreas.',
        fonte: 'site/fonte:https://www.medicina.ufmg.br/conheca-o-acretismo-placentario-uma-das-principais-causas-de-morte-materna/',
    },
    {
        id: 2,
        imagemPost: './img/artigo2.jpg',
        titulo: 'ECLÂMPSIA E PRÉ-ECLÂMPSIA',
        subtitulo: 'Eclâmpsia é uma doença caracterizada pela liberação, por parte do feto, de proteínas na circulação materna que provocam uma resposta imunológica da gestante.',
        link_post: 'https://drauziovarella.uol.com.br/doencas-e-sintomas/eclampsia-e-pre-eclampsia/',
        textoPost: '<strong>Eclâmpsia e Pré-Eclâmpsia</strong>. A gravidez pressupõe o crescimento de um ser geneticamente diferente dentro do útero da mulher, uma vez que herdou metade dos genes do pai. Ela não rejeita esse corpo estranho porque desenvolve mecanismos imunológicos para proteger o feto.'
    },
    {
        id: 3,
        imagemPost: './img/artigo3.jpg',
        link_post: 'https://drapatriciavarella.com.br/blog/qual-a-importancia-da-atividade-fisica-na-gestacao/',
        textoPost: '<strong>Qual a importância da atividade física na gestação?</strong> Você já ouviu falar que grávidas não podem praticar exercícios físicos? Pois é! Esse mito foi disseminado e é muito comum ouvi-lo.Mas, a verdade é que realizar exercícios durante a gestação é fundamental para a saúde!'
    },
    {
        id: 4,
        imagemPost: './img/artigo4.jpg',
        link_post: 'https://begenerous.com.br/blog/alimentacao-para-gestantes/',
        textoPost: '<strong>Alimentação para gestantes: Mais saúde para a mãe e o bebê.</strong> Durante a gravidez e a amamentação, a demanda por nutrientes aumenta, fazendo com que a ingestão de alimentos seja maior. Isso é necessário, pois a alimentação para gestantes precisa atender tanto às necessidades do organismo da mãe quanto apoiar o crescimento e o desenvolvimento do bebê.'
    }
];

// function artigoVisualizado(id) {
//     localStorage.setItem("artigo", id)
//     window.location.href = 'artigos.html';
// }


for (let i = 0; i < postsArticles.length; i++) {

    const containerCardsArticles = document.querySelector('#containerCardsArticles');
    const cards = document.createElement('div');
    cards.classList.add('cardArtigo');
    cards.innerHTML = `
    <a href="artigos.html" onclick="artigoVisualizado(${postsArticles[i].id})" style="text-decoration: none;">
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

