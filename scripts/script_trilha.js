document.querySelectorAll("input[type=checkbox]").forEach(input => input.addEventListener('change', () => {
    const id = input.id.split('__')
    const semana = id[0]
    const tarefa = id[1]

    //const [semana, tarefa] = input.id.split('__')
    const imagens = document.querySelectorAll(`#${semana} img`)

    if (input.checked) {
        imagens[Number(tarefa.split('_')[1] - 1)].src = '/img/coracao_vermelho.png'
        
    } else {
        imagens[Number(tarefa.split('_')[1] - 1)].src = '/img/coracao_vazado.png'
    }

}))

const btnTarefas = document.getElementById("button_tarefas")
const section1 = document.getElementById("semana1")
const popUp = document.querySelector("dialog")
const botaoFechar = document.querySelector("dialog button")

btnTarefas.onclick = function(){
    popUp.showModal()
}
botaoFechar.onclick = function(){
    popUp.close()
}
btnTarefas.addEventListener('click',() => {
    section1.classList.add("semana_on") 
})