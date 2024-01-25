function sair() {
    // Remove o usuário do localStorage
    localStorage.removeItem("usuario")
}

// função que verifica se tem usuário logado e esconde algumas opções da barra de navegação
function verificarUsuario() {
    // Páginas que só podem ser acessadas se tiver usuário logado
    const paginasAutenticadas = ['/minhatrilha.html', '/album.html']
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

    // Se o usuário existe, esconde opções da barra de navegação e adiciona o nome do usuário
    const login = document.getElementById('btn-login')
    const sair = document.getElementById('btn-sair')

    if (usuario !== null) {
        const cadastro = document.getElementById('btn-cadastro')
        const nomeUsuario = document.querySelector('#nome_usuario')

        // adicionando nome do usuário
        nomeUsuario.textContent = `Olá! ${usuario}`
        // escondendo opção cadastro e login
        cadastro.style.display = "none"
        login.style.display = "none"
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




