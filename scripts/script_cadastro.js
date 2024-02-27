const msg_erro = document.querySelectorAll('.form-content div p')
const inputs = document.querySelectorAll('.form-content div input:not(input[type="checkbox"])')
const nome = document.getElementById('nome')
const helperName = document.getElementById('helper-nome')
const email = document.getElementById('email')
const helperEmail = document.getElementById('helper-email')
const senha = document.getElementById('senha')
const helperSenha = document.getElementById('helper-senha')
const confirmaSenha = document.getElementById('confirma-senha')
const helperConfirmaSenha = document.getElementById('helper-confirma-senha')
const button = document.getElementById('button-cadastro')
const checkbox = document.querySelector('input[type="checkbox"]')

function habilitarDesabilitarBotao() {
    let inputError = document.getElementsByClassName('error')

    if (nome.value !== "" && email.value !== "" && senha.value !== "" && confirmaSenha.value !== "" && checkbox.checked && inputError.length === 0) {
        button.disabled = false
    } else {
        button.disabled = true
    }
}

function estilizarInputIncorreto(input, helper) {
    helper.classList.add("visible")
    input.classList.add("error")
    button.disabled = true
}

function removerEstilizacaoInputIncorreto(input, helper) {
    helper.classList.remove("visible")
    input.classList.remove("error")
}

checkbox.addEventListener('change', habilitarDesabilitarBotao)

timer = null; // variavel para armazenar nosso timer

// Validação do Nome do usuário
nome.addEventListener('input', (e) => {
    const valor = e.target.value

    clearTimeout(timer);

    timer = setTimeout(function () {
        if (valor.length < 3) {
            helperName.textContent = "O nome deve ter 3 ou mais caracteres!"
            estilizarInputIncorreto(nome, helperName)
        } else {
            removerEstilizacaoInputIncorreto(nome, helperName)
            habilitarDesabilitarBotao()
        }
    }, 800);
})

// Validação do e-mail
email.addEventListener('input', (e) => {
    let valor = e.target.value

    clearTimeout(timer);

    timer = setTimeout(function () {
        if (!valor.includes("@") || !valor.includes(".com")) {
            helperEmail.textContent = "Precisa inserir um e-mail válido!"
            estilizarInputIncorreto(email, helperEmail)
        } else {
            removerEstilizacaoInputIncorreto(email, helperEmail)
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
            helperSenha.textContent = "O campo senha não pode ser vazio!"
            estilizarInputIncorreto(senha, helperSenha)
        } else {
            removerEstilizacaoInputIncorreto(senha, helperSenha)
            habilitarDesabilitarBotao()
        }
    }, 800);

})

// Validação de confirmação de senha
confirmaSenha.addEventListener('input', (e) => {
    let valor = e.target.value
    let valorSenha = senha.value

    clearTimeout(timer);

    timer = setTimeout(function () {
        if (confirmaSenha === "") {
            helperConfirmaSenha.textContent = "O campo não pode ser vazio!"
            estilizarInputIncorreto(confirmaSenha, helperConfirmaSenha)
        } else if (valorSenha !== valor) {
            helperConfirmaSenha.textContent = "As senhas não são iguais!"
            estilizarInputIncorreto(confirmaSenha, helperConfirmaSenha)
        } else {
            removerEstilizacaoInputIncorreto(confirmaSenha, helperConfirmaSenha)
            habilitarDesabilitarBotao()
        }
    }, 800);

})


function cadastro() {
    if (senha.value === confirmaSenha.value) {
        //Direciona o usuario para página login.html
        window.location.href = 'login.html'
        alert("Cadastro realizado com sucesso!")
    } else {
        // Informa o usuário que as senhas não são iguais
        alert("As senhas não são iguais!")
    }
}