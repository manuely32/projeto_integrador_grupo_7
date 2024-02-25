const popUp = document.querySelector("dialog")
const botaoFechar = document.querySelector("dialog button")

document.querySelectorAll("input[type=checkbox]").forEach(input => input.addEventListener('change', (e) => {
    const id = input.id.split('__')
    const semana = id[0]
    const tarefa = id[1]

    const imagens = document.querySelectorAll(`#${semana} img`)

    //Obtendo todos os checkboxs da mesma semana do checkbox que foi marcado
    const checkbox_semana = document.querySelectorAll(`#${semana.replace('_', '')} label input[type=checkbox]`)

    if (input.checked) {
        imagens[Number(tarefa.split('_')[1] - 1)].src = '/img/coracao_vermelho.png'

        let marcados = 0
        // Percorre o array de checkboxs para contabiliza quantos estão marcados
        checkbox_semana.forEach(checkbox => {
            if (checkbox.checked) {
                marcados += 1
            }
        })

        //Se a variável marcados for igual a 5 mostra o popUp e desabilita os checkboxs.
        if (marcados === 5) {
            const section = document.getElementById(`${semana.replace('_', '')}`)
            popUp.showModal()
            section.classList.add("semana_on")
            checkbox_semana.forEach(checkbox => checkbox.disabled = true)
        }

    } else {
        imagens[Number(tarefa.split('_')[1] - 1)].src = '/img/coracao_vazado.png'
    }

}))

//const btnTarefas = document.getElementById("button_tarefas")
//const section1 = document.getElementById("semana1")

botaoFechar.onclick = function () {
    popUp.close()
}

// btnTarefas.onclick = function () {
//     popUp.showModal()
// }
// btnTarefas.addEventListener('click', () => {
//     section1.classList.add("semana_on")
// })