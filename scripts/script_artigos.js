
const artigo_id = localStorage.getItem("artigo")

if (!artigo_id) {
    window.location.href = 'index.html';
}

fetch("/scripts/dados.json").then((response) => {
    response.json().then((dados) => {
        const artigo = dados.postsArticles.find(artigo => artigo.id === Number(artigo_id))

        const titulo = document.querySelector('#titulo_pagina')
        titulo.textContent = artigo.titulo

        const subtitulo = document.querySelector('.titulo_artigos i')
        subtitulo.textContent = artigo.subtitulo

        const div_artigos = document.querySelector('.post_artigos')

        const imagem = document.createElement('img')
        imagem.className = '.imgPost'
        imagem.style.width = '100%'
        imagem.src = artigo.imagemPost

        const fontImage = document.createElement('small')
        fontImage.style.fontStyle = 'italic'
        fontImage.textContent = artigo.fontImg

        div_artigos.appendChild(imagem)
        div_artigos.appendChild(fontImage)

        for (let i = 0; i < artigo.paragrafos.length; i++) {
            const elemento_p = document.createElement('p')
            elemento_p.className = artigo.paragrafos[i].style
            elemento_p.textContent = artigo.paragrafos[i].texto
            div_artigos.appendChild(elemento_p)
        }

        for (let i = 0; i < artigo.subsessoes.length; i++) {
            const elemento_titulo = document.createElement('h1')
            elemento_titulo.className = artigo.subsessoes[i].style
            elemento_titulo.textContent = artigo.subsessoes[i].titulo_sessão

            div_artigos.appendChild(elemento_titulo)

            if (artigo.subsessoes[i].imagem_sessão !== '') {
                const img = document.createElement('img')
                img.src = artigo.subsessoes[i].imagem_sessão
                img.style.className = 'imgPost'
                img.style.width = '100%'

                const fontImg = document.createElement('small')
                fontImg.style.fontStyle = 'italic'
                fontImg.textContent = artigo.subsessoes[i].fontImg

                div_artigos.appendChild(img)
                div_artigos.appendChild(fontImg)
            }

            for (let l = 0; l < artigo.subsessoes[i].paragrafos_sessao.length; l++) {
                const paragrafo_sessao = document.createElement('p')
                paragrafo_sessao.className = artigo.subsessoes[i].paragrafos_sessao[l].style
                paragrafo_sessao.textContent = artigo.subsessoes[i].paragrafos_sessao[l].texto
                div_artigos.appendChild(paragrafo_sessao)
            }
        }

        const font = document.createElement('p')
        font.style.marginTop = '50px'
        font.style.fontStyle = 'italic'
        font.textContent = artigo.fonte

        div_artigos.appendChild(font)

        const link_curiosidades = document.createElement('p')
        link_curiosidades.style.marginTop = '50px'
        link_curiosidades.style.fontSize = '1rem'
        link_curiosidades.innerHTML = `
                <i>Veja também nossa página de <a
                href="/curiosidades.html">Curiosidades</i></a>, criamos um top 5 para você!
        `
        div_artigos.appendChild(link_curiosidades)
    })
})






































// const postsArticles = [
//     {
//         id: 1,
//         imagemPost: './img/artigo1.jpg',
//         titulo: 'Acretismo Placentário, Conheça uma das principais causas da morte materna',
//         subtitulo: 'A ocorrência da doença aumentou nas últimas décadas, acompanhando o aumento dos partos cesáreas.',
//         paragrafos: [
//             {
//                 texto: 'O <strong>Acretismo Placentário</strong> é uma importante causa de mortalidade materna no mundo. Tais mortes podem ser evitadas com o pré-natal de qualidade e profissionais atentos à placenta das gestantes com histórico de cesarianas, como explica especialista da Faculdade de Medicina da UFMG.',
//                 style: 'texto_artigos'
//             },
//             {
//                 texto: 'Também conhecida como espectro da placenta acreta, a doença ocorre quando a placenta fica mais aderida ao útero que o normal durante a gestação, causando uma grande hemorragia na hora do parto. Segundo o International Journal of Ginecology and Obstetrics, a incidência do acretismo na década de 1950 era de 1 para cada 30.000 partos. Atualmente, as ocorrências são de aproximadamente 1 para cada 500, a depender do local.',
//                 style: 'texto_artigos'
//             },
//             {
//                 texto: 'O sangramento do acretismo ameaça a vida da paciente, visto que a hemorragia é volumosa e nem sempre os hospitais estão preparados para uma cirurgia de alta complexidade ou para a necessidade de um grande volume de reposição de sangue, como pode ocorrer nesses casos. “O que faz com que aconteça o acretismo placentário ainda não está totalmente esclarecido, mas sabemos que o principal fator de risco é uma cirurgia uterina prévia. E a cirurgia uterina mais comumente realizada é a cesariana. Pela sua alta frequência, não só no Brasil como no mundo, os casos de acretismo são cada vez mais comuns”, aponta o chefe do Departamento de Ginecologia e Obstetrícia (GOB) da UFMG, Gabriel Osanan.',
//                 style: 'texto_artigos'
//             },
//             {
//                 texto:'Geralmente, a placenta se solta depois do parto e a mulher a expulsa espontaneamente ou com ajuda médica. No caso do acretismo, ela fica fortemente ligada ao útero e faz com que a expulsão não seja possível. Por isso, é preciso que uma equipe multidisciplinar esteja preparada para realizar o parto e fazer com que a paciente perca o mínimo de sangue possível. “Um dos piores cenários que eu posso ter com acretismo placentário é a paciente começar a ter contrações fora da hora, ter parto de urgência e fora de um hospital especializado, sem capacidade de oferecer o cuidado necessário. Ela fica totalmente à mercê da sorte, visto que é uma cirurgia de alta complexidade”, aponta.',
//                 style: 'texto_artigos'
//             },
//             {
//                 texto: 'Nas ocorrências de acretismo, a placenta pode aparecer de três formas diferentes,classificadas a partir da profundidade que ela atinge o útero: acreta, quando está aderida de forma mais superficial; increta, quando afeta a musculatura do útero; ou percreta, quando penetra toda a musculatura e atinge outros órgãos, como a bexiga.',
//                 style: 'italic'
//             },
//             {
//                 texto: 'Além de um parto cesárea anterior, a doença também pode ser causada por outras cirurgias que causam cicatrizes uterinas, como a retirada de um mioma, curetagens de repetição, e até mesmo fertilização in vitro. “Quando a paciente já tem uma cesariana e a placenta está se formando na gravidez seguinte, ela pode aderir exatamente nessa cicatriz de forma mais profunda, gerando o quadro de acretismo”, explica o professor sobre a relação entre as cesáreas e o acretismo.',
//                 style: 'texto_artigos'
//             }
//         ],
//         subsessões: [
//             {
//                 titulo_sessão: 'Pré Natal é essencial',
//                 style:'titulo_artigos',
//                 imagem_sessão: '/img/fotoArtigo2.png',
//                 paragrafos_sessao: [
//                     {
//                         texto:'Por isso, o pré-natal é essencial: além de identificar um possível acretismo, o profissional poderá encaminhar a paciente a um centro de tratamento especializado e fazer os demais procedimentos para evitar complicações no parto. “Um dos maiores problemas com os casos dessa doença, e que pode contribuir para a morte materna, é quando o pré-natal não se atentou aos sinais de acretismo ou não foi feito pré-natal. Nesses casos, os partos ocorrem na urgência. É o pior cenário. Você vai ter um hospital despreparado e muito mais dificuldades”, afirma.',
//                         style: 'texto_artigos'
//                     },
//                     {
//                         texto:'Para lidar com a doença, é necessário uma equipe multidisciplinar e especializada no seu tratamento, para que grandes complicações sejam evitadas. As gestantes com suspeita de acretismo devem ser encaminhadas a um centro de referência ainda durante o pré-natal para que tratamentos adequados sejam feitos e, então, o parto ocorra em ambiente mais seguro possível. Além disso, o pré-natal deve ter cuidado redobrado com possíveis complicações de uma gravidez. “Se eu sei que essa paciente tem um alto risco de ter uma hemorragia e a ela tem anemia, eu vou tratar essa condição primeiro. Pois se ela tem anemia e tiver um sangramento muito grande no parto, vai ficar ainda mais vulnerável”, explica.',
//                         style:'texto_artigos'
//                     },
//                     {
//                         texto:'Sendo assim, um importante ponto de partida é o entendimento de que o pré-natal é crucial não só para o diagnóstico de acretismo, mas também para outras doenças. Além disso, um ultrassom com atenção à placenta, em pacientes com fatores de risco para acretismo também é fundamental. “Nós estamos na fase de incentivar as pessoas a entenderem os riscos que elas têm. E só de olhar para a placenta com mais cautela já seria um grande avanço”, finaliza.',
//                         style: 'texto_artigos'
//                     }
//                 ]
//             }
//         ],
//         link_post: '/artigos.html',
//         textoPost: '<strong>Conheça o acretismo placentário, uma das principais causas de morte materna</strong>. A ocorrência da doença aumentou nas últimas décadas, acompanhando o aumento dos partos cesáreas.',
//         fonte: 'site/fonte:https://www.medicina.ufmg.br/conheca-o-acretismo-placentario-uma-das-principais-causas-de-morte-materna/',
//     },
//     {
//         id: 2,
//         imagemPost: './img/artigo2.jpg',
//         titulo: 'ECLÂMPSIA E PRÉ-ECLÂMPSIA',
//         subtitulo:'Eclâmpsia é uma doença caracterizada pela liberação, por parte do feto, de proteínas na circulação materna que provocam uma resposta imunológica da gestante.',
//         link_post: 'https://drauziovarella.uol.com.br/doencas-e-sintomas/eclampsia-e-pre-eclampsia/',
//         textoPost: '<strong>Eclâmpsia e Pré-Eclâmpsia</strong>. A gravidez pressupõe o crescimento de um ser geneticamente diferente dentro do útero da mulher, uma vez que herdou metade dos genes do pai. Ela não rejeita esse corpo estranho porque desenvolve mecanismos imunológicos para proteger o feto.'
//     },
//     {
//         id: 3,
//         imagemPost: './img/artigo3.jpg',
//         link_post: 'https://drapatriciavarella.com.br/blog/qual-a-importancia-da-atividade-fisica-na-gestacao/',
//         textoPost: '<strong>Qual a importância da atividade física na gestação?</strong> Você já ouviu falar que grávidas não podem praticar exercícios físicos? Pois é! Esse mito foi disseminado e é muito comum ouvi-lo.Mas, a verdade é que realizar exercícios durante a gestação é fundamental para a saúde!'
//     },
//     {
//         id: 4,
//         imagemPost: './img/artigo4.jpg',
//         link_post: 'https://begenerous.com.br/blog/alimentacao-para-gestantes/',
//         textoPost: '<strong>Alimentação para gestantes: Mais saúde para a mãe e o bebê.</strong> Durante a gravidez e a amamentação, a demanda por nutrientes aumenta, fazendo com que a ingestão de alimentos seja maior. Isso é necessário, pois a alimentação para gestantes precisa atender tanto às necessidades do organismo da mãe quanto apoiar o crescimento e o desenvolvimento do bebê.'
//     }
// ];


