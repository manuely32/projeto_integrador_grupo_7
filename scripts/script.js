function sair() {
    // Remove o usuário do localStorage
    localStorage.removeItem("usuario")
}

// função que verifica se tem usuário logado e esconde algumas opções da barra de navegação
function verificarUsuario() {
    // Páginas que só podem ser acessadas se tiver usuário logado
    const paginasAutenticadas = ['/minhatrilha.html', '/catalogo_album.html']
    // Obtem a página atual
    const url_atual = window.location.pathname
    // Busca no storage o usuario
    const usuario = localStorage.getItem("usuario")

    // Se pagina atual esta na lista de paginas autenticadas e não há usuário logado, o usuário é redirecionado para página de login 
    if (paginasAutenticadas.includes(url_atual) && !usuario) {
        window.location.href = 'login.html';
        return
    }

    if (url_atual === '/cadastro.html' && usuario) {
        window.location.href = 'index.html';
        alert("Você já possui cadastro e está logado no sistema.")
        return
    }

    if (url_atual === '/index.html' && usuario) {
        const banner_trilha = document.querySelector('.banner')
        const link = document.querySelector('.banner-text a')
        const button = document.querySelector('.banner-text a button')
        const texto = document.querySelector('.banner-text p')
        const div_trilha = document.querySelector('.banner-div')


        link.href = '/minhatrilha.html'
        button.textContent = "Minha Trilha"
        banner_trilha.style.backgroundImage = "url(/img/banner_trilha.jpeg)"
        texto.textContent = ""
        div_trilha.classList.remove('banner-div')
        div_trilha.style.marginTop = '50px'

        const link_album = document.querySelector('.flexJustfyCenter a')
        const banner_album = document.querySelector('#molduraImagem')
        const section_album = document.querySelector('#sectionAlbum')
        const button_album = document.querySelector('.flexJustfyCenter a button')
        const texto_album = document.querySelectorAll(".texto_album")
        const text_div = document.querySelector('#div-text')

        section_album.style.height = '400px'
        banner_album.style.backgroundImage = "url(/img/banner_album.jpeg)"
        banner_album.style.opacity = '1'
        text_div.style.alignItems = 'flex-end'
        text_div.style.marginTop = '180px'
        text_div.style.marginRight = '210px'
        texto_album.forEach(texto => texto.textContent = "")
        link_album.href = '/catalogo_album.html'
        button_album.textContent = "Álbum do bêbe"
    }

    // Se o usuário existe, esconde opções da barra de navegação e adiciona o nome do usuário
    const login = document.getElementById('btn-login')
    const sair = document.getElementById('btn-sair')

    if (usuario !== null) {
        const cadastro = document.getElementById('btn-cadastro')
        const perfil = document.getElementById('perfil')
        const nomeUsuario = document.querySelector('#nome_usuario')

        // adicionando nome do usuário
        nomeUsuario.textContent = `Olá! ${usuario}`
        // escondendo opção cadastro e login
        cadastro.style.display = "none"
        login.style.display = "none"
        perfil.style.display = "block"
        // mostrando opção de sair
        sair.style.display = "block"

    } else {
        const nomeUsuario = document.querySelector('#nome_usuario')
        // removendo nome do usuário
        nomeUsuario.textContent = ""
    }
}

verificarUsuario()

function mostrarMenu() {
    const elementoNav = document.querySelector('nav')
    elementoNav.classList.toggle('menuShow')
}

document.querySelector('.menu').addEventListener('click', mostrarMenu)

function artigoVisualizado(id) {
    localStorage.setItem("artigo", id)
    window.location.href = 'artigos.html';
}
