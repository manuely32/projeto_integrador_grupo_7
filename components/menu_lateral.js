let asidePerfis = document.querySelector('.asidePerfis');
asidePerfis.innerHTML = `
        <span class="btnExibicao" data-icon="chevron_right"></span>
        <div class="flexAlignColumCenter" style="padding: 20px; border: 0px solid">
            <div style=" width: 100px; margin-bottom: 10px;">
                <img id="fotoPerfil" style="border: 3px solid #fff; border-radius: 50%; object-fit:cover; width: 100%" src="" alt="">
            </div>
            <small style="color: #fff" id="nomeUsuario"></small>
        </div>
        <div style="position: sticky; top: 70px; padding: 0px 0px; border: 0px solid">
            <ul style="list-style: none; padding: 0px 5px; border: 0px solid red">                     
                <a href="./perfil_usuario.html">
                    <li style="border-radius: 5px; padding: 15px 8px;">
                        Cadastro
                    </li>
                </a>
                <a href="./perfil_usuario_editar.html">
                    <li style="border-radius: 5px; padding: 15px 8px;">
                        Editar Cadastro
                    </li>
                </a>
                <a href="./catalogo_album.html">
                    <li style="border-radius: 5px; padding: 15px 8px;">
                        Álbum do Bebê
                    </li>
                </a>
            </ul>
        </div> 
    `;
const fotoPerfil = document.querySelector('#fotoPerfil');
fotoPerfil.src = './img/images_1.jpg';
const nomeUsuario = document.querySelector('#nomeUsuario');
nomeUsuario.innerText = "Tânia de Souza da Silva";

const btnExibicao = document.querySelector('.btnExibicao');
//const asidePerfis = document.querySelector('.asidePerfis');

btnExibicao.addEventListener('click', () => {
    asidePerfis.classList.toggle('mostrar');
    if (btnExibicao.getAttribute('data-icon') === 'chevron_left') {
        btnExibicao.setAttribute('data-icon', 'chevron_right');
    } else {
        btnExibicao.setAttribute('data-icon', 'chevron_left');
    }
});