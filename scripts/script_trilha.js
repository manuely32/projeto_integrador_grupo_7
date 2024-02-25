const popUp = document.querySelector("dialog")
const botaoFechar = document.querySelector("dialog button")

document.querySelectorAll("input[type=checkbox]").forEach(input => input.addEventListener('change', (e) => {
    const id = input.id.split('__')
    const semana = id[0]
    const tarefa = id[1]

    const imagens = document.querySelectorAll(`#${semana} img`)

    if (input.checked) {
        imagens[Number(tarefa.split('_')[1] - 1)].src = '/img/coracao_vermelho.png'
    } else {
        imagens[Number(tarefa.split('_')[1] - 1)].src = '/img/coracao_vazado.png'
    }

}))

function finalizarSemana(semana) {
    const section = document.getElementById(semana)
    const checkbox_semana = document.querySelectorAll(`#${semana} label input[type=checkbox]`)

    let marcados = 0
    // Percorre o array de checkboxs para contabiliza quantos estão marcados
    checkbox_semana.forEach(checkbox => {
        if (checkbox.checked) {
            marcados += 1
        }
    })

    if (marcados === 5) {
        popUp.showModal()
        section.classList.add("semana_on")
        checkbox_semana.forEach(checkbox => checkbox.disabled = true)
    } else {
        alert("Você ainda não cumpriu todas as tarefas, não pode finalizar a semana!")
    }
}

botaoFechar.onclick = function () {
    popUp.close()
}
