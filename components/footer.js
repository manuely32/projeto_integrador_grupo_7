class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
          <footer>
            <section class="rodape_pagina_principal" id="rodape">
                <div id="logo_rodape" class="rodape_elemento_pagina_principal">
                    <a href="index.html"><img src="img/logosite.png" alt="logo nova vida" width="70"></a>
                    <p>NOVAVIDA</p>
                </div>
                <div id="link_rede_socias_rodape">
                    <p>SIGA NOVAVIDA</p>
                    <ul>
                        <li><a href="http:www.instagram.com"><img src="/img/instagram.png"
                                    alt="logotipo do instagram">Instagram</a>
                        </li>
                        <li><a href="http:www.youtube.com"><img src="/img/youtube.png" alt="logotipo do youtube">YouTube</a>
                        </li>
                        <li><a href="http:www.facebook.com"><img src="/img/facebook.png"
                                    alt="logotipo do facebook">Facebook</a>
                        </li>
                    </ul>
                </div>
            </section>
        </footer>
        `;
    }
}

customElements.define('footer-component', Footer)