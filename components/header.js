const header = document.querySelector("header")

header.innerHTML = `
            <div class="container_header">
                <div>
                    <a href="index.html" style="outline: none"><img src="img/logo2.png" alt="logo nova vida" width="130"></a>
                </div>
                <nav> 
                    <ul>
                        <li><a href="minhatrilha.html">Minha Trilha</a></li>
                        <li><a href="catalogo_album.html">Álbum do Bebê</a></li>
                        <li><a href="index.html#sectionCards">Artigos</a></li>
                        <li><a href="curiosidades.html">Curiosidades</a></li>
                        <li><a href="sobre.html">Sobre</a></li>
                        <li id="perfil"><a href="perfil_usuario.html">Meu cadastro</a></li>
                        <li id="btn-cadastro"><a href="cadastro.html">Cadastre-se</a></li>
                    </ul>
                </nav>
            </div>           
            <div class="div-user">
                <p id="nome_usuario"></p>
                <a class="btn" id="btn-login" href="login.html">Login</a>
                <a class="btn" id="btn-sair" href="index.html" onclick="sair()">Sair</a>   
                <div class="menu">
                    <img data-tooltip="Menu de opções" src="img/Hamburger_icon.svg" alt="Menu de opções"></img>
                </div>
            </div>
        `
