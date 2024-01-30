    const input_login = document.getElementById('input-login')
const senha = document.getElementById('input-senha')
const msg_erro = document.querySelectorAll('.error-text')
const msg_credencial = document.querySelectorAll('.credencial-text')

input_login.addEventListener('input', () => {
    input_login.classList.remove('error')
    msg_erro[0].classList.remove('visible')
    msg_credencial[0].classList.remove('visible')
})

senha.addEventListener('input', () => {
    senha.classList.remove('error')
    msg_erro[1].classList.remove('visible')
    msg_credencial[1].classList.remove('visible')
})

function login() {
    //Verifica se os dados de login foram informados
    if (!input_login.value || !senha.value) {
        input_login.classList.add('error')
        senha.classList.add('error')
        msg_credencial.forEach(msg => msg.classList.add('visible'))
        return
    }

    //Busca arquivo json com dados dos usuários
    fetch("/scripts/dados.json").then((response) => {
        response.json().then((dados) => {
            // busca o usuário na lista através do login
            const usuario = dados.usuarios.find(usuario => usuario.login === input_login.value)

            // Verifica se o usuario existe e se a senha é a mesma
            if (usuario && usuario.senha === senha.value) {
                //Salva o nome do usuário no localStorage e direciona o usuario para página index.html
                localStorage.setItem("usuario", usuario.nome)
                window.location.href = 'index.html';
            } else if (!usuario) {
                input_login.classList.add('error')
                msg_erro[0].classList.add('visible')
            } else if (usuario.senha !== senha.value) {
                senha.classList.add('error')
                msg_erro[1].classList.add('visible')
            }
        })
    })
}
