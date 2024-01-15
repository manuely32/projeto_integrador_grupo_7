class HeaderIndex extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
          
        <nav id="cabecalho_navegacao">    
        <div id="principal_cabecalho">
           <div id="principal_cabecalho_logo_titulo">
                <a href="index.html"><img src="img/logosite.png" alt="logo nova vida" width="100"></a>
        
                <h1><strong>NovaVida</strong></h1>   
           </div>
           
           <div id="principal_cabecalho_menu">
                <ul>
                    <li><a href="minhatrilha.html">Minha Trilha</a></li>
                    <li><a href="album.html">Álbum do Bebê</a></li>
                    <li><a href="index.html#dicas">Dicas</a></li>
                    <li><a href="index.html#curiosidade">Curiosidades</a></li>
                    <li><a href="Sobre.html">Sobre</a></li>
                    <li><a href="adastro.html">Cadastre-se</a></li>
                </ul>
           </div>

        </div>
        <div id="auxiliar_cabecalho">
            <button><a href="login.html">Login</a></button>
        </div>
       
    </nav>
        `;
    }
}

customElements.define('header-index-component', HeaderIndex)