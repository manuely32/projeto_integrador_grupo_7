document.querySelectorAll("input[type=checkbox]").forEach(input => input.addEventListener('change', () => {
    const id = input.id.split('__')
    const semana = id[0]
    const tarefa = id[1]

    //const [semana, tarefa] = input.id.split('__')
    const imagens = document.querySelectorAll(`#semana_${semana.split('_')[1]} img`)

    if (input.checked) {
        imagens[Number(tarefa.split('_')[1] - 1)].src = '/img/coracao_vermelho.png'
    } else {
        imagens[Number(tarefa.split('_')[1] - 1)].src = '/img/coracao_vazado.png'
    }
}))