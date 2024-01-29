//COMPONENTE
console.log('Acessado');

//HEADER
let header = document.querySelector('#header');
header.innerHTML=`
    <div id="moldura-exterior">
        <div>
            <a href="./index_diego.html">
                <img src="" alt="logo">
            </a>
        </div>
        <div>
            <ul>
                <li>
                    <a href="">Sobre Nós</a>
                </li>
                <li>
                    <a href="">Trilha</a>
                </li>
                <li>
                    <a href="./catalogo_album.html">Álbum do Bebê</a>
                </li>
                <li>
                    <a href="./perfilUsuario.html">Login</a>
                </li>
                <li>
                    <a href="./formulario_bebe.html">
                        <button >
                            cadastre-se
                        </button>
                    </a>
                </li>
            </ul>
        </div>
    </div>
`;
//HEADER

//PERFIL DO USUÁRIO
/* const nomeUsuario = document.querySelector('#nomeUsuario');
nomeUsuario.innerText = "Diego Sampaio"; */

//PERFIL DO USUÁRIO

function ajustarAlturaHeader() {
    let header = document.querySelector('#header');
    const ajusteHeader = document.querySelector('#ajusteHeader');
    let headerAltura = header.offsetHeight;
    ajusteHeader.style.height = headerAltura + 'px';
    //console.log(headerAltura);
}
window.addEventListener('resize', ajustarAlturaHeader);
window.addEventListener('load', ajustarAlturaHeader);

//aside perfis
    let asidePerfis = document.querySelector('.asidePerfis');
    asidePerfis.innerHTML =`
        <div class="flexAlignColumCenter" style="padding: 20px; border: 0px solid">
            <div style=" width: 100px; margin-bottom: 10px;">
                <img id="fotoPerfil" style="border: 3px solid #fff; border-radius: 50%; width: 100%;" src="" alt="">
            </div>
            <small style="color: #fff" id="nomeUsuario"></small>
        </div>
        <div style="position: sticky; top: 70px; padding: 0px 0px; border: 0px solid">
            <ul style="list-style: none; padding: 0px 5px; border: 0px solid red">                     
                <a style="" href="./perfilUsuario.html">
                    <li style="border-radius: 5px; padding: 15px 8px;">
                        Cadastro
                    </li>
                </a>
                <a style="" href="./perfilUsuarioEditar.html">
                    <li style="border-radius: 5px; padding: 15px 8px;">
                        Editar Cadastro
                    </li>
                </a>
                <a style="" href="./catalogo_album.html">
                    <li style="border-radius: 5px; padding: 15px 8px;">
                        Álbum do Bebê
                    </li>
                </a>
            </ul>
        </div> 
    `;
    const fotoPerfil = document.querySelector('#fotoPerfil');
    fotoPerfil.src = './img/images_1.jpg';
    const nomeUsuario = document.querySelector('#nomeUsuario');
    nomeUsuario.innerText = "Tânia de Souza da Silva";
//aside perfis

//FORMULARIO PERFIS
let dadosUsuarios = [
    {
        nomeDoBebe: "Daniel de Souza Mendes",
        dataNascimento: "21/12/2023",
        pesoNascimento: 3,
        tamanhoNascimento: 30,
        horaNascimento: "01:45",
        localidade: "Brasília",
        nomeDaMae: "Tânia de Souza da Silva",
        nomeDoPai: "Ricardo Mendes",
        irmao: ["Mário Souza Mendes", "Elisandra Souza Mendes", "Alexandre Souza Mendes"],
        nomeDoAvoMaterno: "José Monteiro Mendes",
        nomeDaAvoMaterna: "Nair Gomes Mendes",
        nomeDoAvoPaterno: "Antônio da Silva",
        nomeDaAvoPaterna: "Júlia de Souza da Silva",
    }
];

for (let chave in dadosUsuarios[0]) {

    if(chave != "irmao"){
        let geral = document.querySelector(`#${chave}`);
        geral.value = dadosUsuarios[0][chave];
        console.log(chave);
    } else {
        for (let chave1 in dadosUsuarios[0][chave]) {
            const areaIrmao = document.querySelector('#areaIrmao');
            let qtdIrmaos = document.querySelector('#areaIrmao').childElementCount;
            const novoIrmao = document.createElement('div');
            novoIrmao.classList.add('molduraExtFildset');
            novoIrmao.innerHTML = `
                <label for="irmao${qtdIrmaos}">Irmão</label>
                <input type="text" id="irmao${qtdIrmaos}" value="${dadosUsuarios[0][chave][qtdIrmaos]}" name="irmao${qtdIrmaos}" placeholder="Insira o nome do(s) imão(s).">
            `;
            areaIrmao.appendChild(novoIrmao)
        }
    }
    
}   

const btnSalvarPerfilEditar = document.querySelector('#btnSalvarPerfilEditar');
btnSalvarPerfilEditar.addEventListener('click', () => {
window.location.href = "./perfilUsuario.html";

});
//FORMULARIO PERFIS

//TELA INDEX
/* let conjuntoCarrousel = document.querySelector('#carroussel');
let elementos = Array.from(conjuntoCarrousel.children);
let indiceElementoAtivo = 0;
let myInterval;

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
    pararContador()
    ativarContador()
}

// Usar setInterval para chamar a função a cada 2 segundos
myInterval = setInterval(function() {
    alterarImagem(1);  
}, 4000);

function pararContador() {
    clearInterval(myInterval);
}

function ativarContador() {
    // Reiniciar o intervalo
    myInterval = setInterval(function() {
        alterarImagem(1);  
    }, 4000);
} */

/* const postsArticles = [
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
 */
//TELA FORMULARIO.HTML

/* btnIrmao.addEventListener("click",()=>{
    const areaIrmao = document.querySelector('#areaIrmao');
    let qtdIrmaos = document.querySelector('#areaIrmao').childElementCount;
    const novoIrmao = document.createElement('div');
    novoIrmao.classList.add('molduraExtFildset');
    novoIrmao.innerHTML = `
        <label for="irmao${qtdIrmaos}">Irmão</label>
        <input type="text" id="irmao${qtdIrmaos}" name="irmao${qtdIrmaos}" placeholder="Insira o nome do(s) imão(s).">
    `;
    areaIrmao.appendChild(novoIrmao)
})

const chkTermoAceite = document.querySelector('#chkTermoAceite');
const areaBtnCadastrar = document.querySelector('#areaBtnCadastrar');
chkTermoAceite.addEventListener('click', ()=>{
    chkTermoAceite.checked ? areaBtnCadastrar.classList.remove("visibilidade") : areaBtnCadastrar.classList.add("visibilidade");
}); */

