class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
          <footer>
            <section class="rodape_pagina_principal" id="rodape">
                
                <div id="logo_rodape" >
                    <a href="index.html"><img src="img/logosite.png" alt="logo nova vida" width="70"></a>
                    <h3>NOVAVIDA</h3>
                </div>
                
                <div id="link_rede_sociais_rodape">
                <p>SIGA NOVAVIDA</p>
                <ul>
                    <li><a href="http:www.instagram.com"><img src="/img/instagram.png"
                                alt="logotipo do instagram"></a>
                    </li>
                    <li><a href="http:www.youtube.com"><img src="/img/youtube.png" alt="logotipo do youtube"></a>
                    </li>
                    <li><a href="http:www.facebook.com"><img src="/img/facebook.png"
                                alt="logotipo do facebook"></a>
                    </li>
                </ul>
                </div>
                
            
            </section>
        </footer>
        `;
    }
}

customElements.define('footer-component', Footer)