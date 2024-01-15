class DivCarrossel extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="carousel">
        <input type="radio" name="carousel" id="slide1" checked>
        <input type="radio" name="carousel" id="slide2">
        <input type="radio" name="carousel" id="slide3">
       
        <div class="slides">
          <div class="slide">
            <img src="./img/imagem-carrossel1.jpg" alt="Slide 1">
          </div>
          <div class="slide">
            <img src="./img/imagem-carrossel2.jpg" alt="Slide 2">
          </div>
          <div class="slide">
            <img src="./img/imagem-carrossel3.jpg" alt="Slide 3">
          </div>
        </div>
        <div class="navigation">
          <label for="slide1"></label>
          <label for="slide2"></label>
          <label for="slide3"></label>
        </div>
      </div>

        `;
    }
}

customElements.define('carrossel-component', DivCarrossel)