function login() {
    //obtem os dados do login
    const login = document.getElementById('input-login').value
    const senha = document.getElementById('input-senha').value

    // lista de usuários
    const usuarios = [
        {
            login: "manuely@email.com",
            senha: "12345",
            nome: "Manuely Guedes"
        }
    ]

    // busca o usuário na lista através do login
    const usuario = usuarios.find(usuario => usuario.login === login)

    // Verifica se o usuario existe e se a senha é a mesma
    if (usuario && usuario.senha === senha) {
        //salva o nome do usuário no localStorage e direciona o usuario para página index.html
        localStorage.setItem("usuario", usuario.nome)
        window.location.href = 'index.html';
    } else {
        // Informa o usuário que as credencias não batem
        alert("Usuário ou senha incorretos!")
    }
}

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

    // Se pagina atual esta na lista de paginas autenticas e não há usuário logado, o usuário é redirecionado para página de login 
    if (paginasAutenticadas.includes(url_atual) && !usuario) {
        window.location.href = 'login.html';
        return
    }

    // Se o usuário existe, esconde opções da barra de navegação e adiciona o nome do usuário
    if (usuario !== null) {
        const login = document.getElementById('btn-login')
        const sair = document.getElementById('btn-sair')
        const cadastro = document.getElementById('btn-cadastro')
        const nomeUsuario = document.querySelector('#nome')
        // adicionando nome do usuário
        nomeUsuario.textContent = `Olá! ${usuario}`
        // escondendo opção cadastro e login
        cadastro.style.display = "none"
        login.style.display = "none"
        // exibindo opção sair
        sair.style.display = "block"
    } else {
        const nomeUsuario = document.querySelector('#nome')
        // removendo nome do usuário
        nomeUsuario.textContent = ""
    }
}

verificarUsuario()