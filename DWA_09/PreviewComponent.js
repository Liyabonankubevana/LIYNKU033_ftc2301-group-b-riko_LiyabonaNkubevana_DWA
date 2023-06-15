class PreviewsHtml extends HTMLElement {
    
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<main class="list">
        <div class="list__items" data-list-items></div>
        <div class="list__message" data-list-message>No results found. Your filters might be too narrow.</div>
        <button class="list__button" data-list-button></button>
      </main>
  
  
      <dialog class="overlay" data-list-active>
        <div class="overlay__preview"><img class="overlay__blur" data-list-blur src=""/><img class="overlay__image" data-list-image src=""/></div>
        <div class="overlay__content">
          <h3 class="overlay__title" data-list-title></h3>
          <div class="overlay__data" data-list-subtitle></div>
          <p class="overlay__data overlay__data_secondary" data-list-description></p>
        </div>
  
        <div class="overlay__row">
          <button class="overlay__button overlay__button_primary" data-list-close>Close</button>
        </div>
      </dialog>`
      }
}

customElements.define('header-component', PreviewsHtml);