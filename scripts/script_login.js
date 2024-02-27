const inputLogin = document.getElementById('input-login')
const helperLogin = document.getElementById('helper-login')
const senha = document.getElementById('input-senha')
const helperLoginSenha = document.getElementById('helper-login-senha')
const buttonLogin = document.getElementById('button-login')

function habilitarDesabilitarBotao() {
    let inputError = document.getElementsByClassName('error')

    if (inputLogin.value !== "" && senha.value !== "" && inputError.length === 0) {
        buttonLogin.disabled = false
    } else {
        buttonLogin.disabled = true
    }
}

function estilizarInputIncorreto(input, helper) {
    helper.classList.add("visible")
    input.classList.add("error")
    buttonLogin.disabled = true
}

function removerEstilizacaoInputIncorreto(input, helper) {
    helper.classList.remove("visible")
    input.classList.remove("error")
}

let timer = null; // variavel para armazenar nosso timer

// Validação de login
inputLogin.addEventListener('input', (e) => {
    let valor = e.target.value

    clearTimeout(timer);

    timer = setTimeout(function () {
        if (!valor.includes("@") || !valor.includes(".com")) {
            helperLogin.textContent = "Precisa inserir um e-mail válido!"
            estilizarInputIncorreto(inputLogin, helperLogin)
        } else {
            removerEstilizacaoInputIncorreto(inputLogin, helperLogin)
            habilitarDesabilitarBotao()
        }
    }, 800);
})

// Validação de senha
senha.addEventListener('input', (e) => {
    let valor = e.target.value

    clearTimeout(timer);

    timer = setTimeout(function () {
        if (valor === "") {
            helperLoginSenha.textContent = "O campo senha não pode ser vazio!"
            estilizarInputIncorreto(senha, helperLoginSenha)
        } else {
            removerEstilizacaoInputIncorreto(senha, helperLoginSenha)
            habilitarDesabilitarBotao()
        }
    }, 600);

})

function login() {
    //Busca arquivo json com dados dos usuários
    fetch("/scripts/dados.json").then((response) => {
        response.json().then((dados) => {
            const usuario = dados.usuarios.find(usuario => usuario.login === inputLogin.value)

            if (usuario && usuario.senha === senha.value) {
                localStorage.setItem("usuario", usuario.nome)
                window.location.href = 'index.html';
            } else if (!usuario) {
                helperLogin.textContent = "Usuário não encontrado!"
                estilizarInputIncorreto(inputLogin, helperLogin)
            } else if (usuario.senha !== senha.value) {
                helperLoginSenha.textContent = "Senha incorreta!"
                estilizarInputIncorreto(senha, helperLoginSenha)
            }
        })
    })
}
