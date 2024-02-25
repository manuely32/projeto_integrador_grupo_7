let dadosUsuarios = [
    {
        nomeDoBebe: "Daniel de Souza Mendes",
        dataNascimento: "2023-12-01",
        pesoNascimento: 3,
        tamanhoNascimento: 30,
        horaNascimento: "01:45",
        localidade: "Brasília",
        nomeDaMae: "Tânia de Souza da Silva",
        nomeDoPai: "Ricardo Mendes",
        irmao: ["Mário Souza Mendes", "Elisandra Souza Mendes", "Alexandre Souza Mendes"],
        nomeDoAvoMaterno: "José Monteiro Mendes",
        nomeDaAvoMaterna: "Nair Gomes Mendes",
        nomeDoAvoPaterno: "Antônio da Silva",
        nomeDaAvoPaterna: "Júlia de Souza da Silva",
    }
];

for (let chave in dadosUsuarios[0]) {
    if (chave != "irmao") {
        let geral = document.querySelector(`#${chave}`);
        geral.value = dadosUsuarios[0][chave];
    } else {
        for (let chave1 in dadosUsuarios[0][chave]) {
            const areaIrmao = document.querySelector('#areaIrmao');
            let qtdIrmaos = document.querySelector('#areaIrmao').childElementCount;
            const novoIrmao = document.createElement('div');
            novoIrmao.classList.add('molduraExtFildset');
            novoIrmao.innerHTML = `
                <label for="irmao${qtdIrmaos}">Irmão</label>
                <input type="text" id="irmao${qtdIrmaos}" value="${dadosUsuarios[0][chave][qtdIrmaos]}" name="irmao${qtdIrmaos}" placeholder="Insira o nome do(s) imão(s).">
            `;
            areaIrmao.appendChild(novoIrmao)
        }
    }

}

const btnSalvarPerfilEditar = document.querySelector('#btnSalvarPerfilEditar');
btnSalvarPerfilEditar.addEventListener('click', () => {
    window.location.href = "./perfil_usuario.html";
});