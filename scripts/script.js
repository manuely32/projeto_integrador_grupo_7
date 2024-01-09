function login() {
    const login = document.getElementById('input-login').value
    const senha = document.getElementById('input-senha').value

    const usuarios = [
        {
            login: "manuely@email.com",
            senha: "12345",
            nome: "Manuely Guedes"
        }
    ]

    const usuario = usuarios.find(usuario => usuario.login === login)

    if (usuario && usuario.senha === senha) {
        localStorage.setItem("usuario", usuario.nome)
        window.location.href = 'index.html';
    } else {
        alert("Usuário ou senha incorretos!")
    }
}

function sair() {
    localStorage.removeItem("usuario")
}

function verificarUsuario() {
    const paginasAutenticadas = ['/minhatrilha.html', '/album.html']
    const url_atual = window.location.pathname

    const usuario = localStorage.getItem("usuario")

    if (paginasAutenticadas.includes(url_atual) && !usuario) {
        window.location.href = 'login.html';
        return
    }

    if (usuario !== null) {
        const login = document.getElementById('btn-login')
        const sair = document.getElementById('btn-sair')
        const cadastro = document.getElementById('btn-cadastro')
        const nomeUsuario = document.querySelector('#nome')
        nomeUsuario.textContent = `Olá! ${usuario}`
        cadastro.style.display = "none"
        login.style.display = "none"
        sair.style.display = "block"
    } else {
        const nomeUsuario = document.querySelector('#nome')
        nomeUsuario.textContent = ""
    }
}

verificarUsuario()