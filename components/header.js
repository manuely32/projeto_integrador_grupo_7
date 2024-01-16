const header = document.querySelector("header")

header.innerHTML = `
            <div class="container_header">
                <div id="logo">
                    <a href="index.html"><img src="img/logo2.png" alt="logo nova vida" width="130"></a>
                </div>
                <nav>
                    <ul>
                        <li><a href="minhatrilha.html">Minha Trilha</a></li>
                        <li><a href="album.html">Álbum do Bebê</a></li>
                        <li><a href="index.html#dicas">Dicas</a></li>
                        <li><a href="curiosidades.html">Curiosidades</a></li>
                        <li><a href="sobre.html">Sobre</a></li>
                        <li id="btn-cadastro"><a href="cadastro.html">Cadastre-se</a></li>
                    </ul>
                </nav>
                <div class="div-user">
                    <p id="nome"><p>
                    <a class="btn" id="btn-login" href="login.html">Login</a>
                    <a class="btn" style="display:none" id="btn-sair" href="index.html" onclick="sair()">Sair</a>
                </div> 
            </div> 
        `
