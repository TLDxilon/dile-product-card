class DileProductCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow ( {mode: "open"})
    }
  
    static get observedAttributes() {
      return ["img_src", "img_alt", "product_title", "link_producto", "product_text", "product_price", "btn_text"];
    }
    attributeChangedCallback(name, oldValue, newValue) {
      this[name] = newValue;
    }
  
    getTemplate() {
      const template = document.createElement("template");
      template.innerHTML = /*html*/ `
  
      <section class="product-item">
        <div class="product-item__first">
          <img src="${this.img_src}" alt="${this.img_alt}" class="product-item__first--image">
        </div>
        <div class="product-item__second">
          <div class="product-item__second__texts" >
            <h2 class="product-item__second__texts--title"><a href="${this.link_producto}">${this.product_title}</a></h2>
          </div>
          <p class="product-item__second--text">${this.product_text}</p>
          <div class="product-item__second__details">
            <h2 class="product-item__second__details--price">${this.product_price}</h2>
            <button href="${this.link_producto}" class="product-item__second__details--btn">${this.btn_text}</button>
          </div>
        </div>
      </section>
  
      ${this.getStyles()}
      `;
      return template;
    }
  
    getStyles() {
      return `
      <style>
      @import "../dile-product-card.css"
      </style>
      `
    }
  
    render() {
      this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
  
    connectedCallback() {
      this.render();
    }
  }
  
  customElements.define("dile-product-card", DileProductCard);