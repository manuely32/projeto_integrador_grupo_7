class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
          
          <header>
            <div id="logo">
                <a href="index.html"><img src="img/logosite.png" alt="logo nova vida" width="50"></a>

                <h1><strong>Nova Vida</strong></h1>
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
                <div class="btn">
                    <ul>
                        <li id="btn-login"><a id="login" href="login.html">Login</a></li>
                        <li id="btn-sair" style="display:none"><a id="login" href="index.html" onclick="sair()">Sair</a></li>
                    </ul>
                </div>
            </div>
            
        </header>
        `;
    }
}

customElements.define('header-component', Header)