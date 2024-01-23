const msg_erro = document.querySelectorAll('.form-content div p')
const inputs = document.querySelectorAll('.form-content div input')

inputs.forEach((input, idx) => input.addEventListener('input', () => {
    input.classList.remove('error')
    msg_erro[idx].classList.remove('visible')
}))


function cadastro() {
    //obtem os dados de cadastro
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value
    const confirma_senha = document.getElementById('confirma_senha').value

    inputs.forEach((input, idx) => {
        if (!input.value) {
            msg_erro[idx].classList.add('visible')
            input.classList.add('error')
        }
    })

    if (!nome || !email || !senha || !confirma_senha) {
        return
    }

    if (senha === confirma_senha) {
        //Direciona o usuario para página login.html
        window.location.href = 'login.html'
    } else {
        // Informa o usuário que as senhas não são iguais
        alert("Senhas informadas são diferentes!")
    }
}