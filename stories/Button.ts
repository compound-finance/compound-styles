import '../scss/main.scss';

class WebButton extends HTMLElement {
  // Observe the 'label', 'size', and 'color' attributes
  static get observedAttributes() {
    return ['label', 'size', 'color'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  // lifecycle hook that runs when component is inserted into DOM
  connectedCallback() {
    this.render
  }

  // we re-render anytime an attribute value changes, regardless of which attribute (name)
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  render() {
    const label = this.getAttribute('label') || "";
    const size = this.getAttribute('size') || 'small';

    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
        }
        button {
          font-size: ${size};
        }
      </style>
      <button>${label}</button>
      `;
    }
  }
}

customElements.define('web-button', WebButton);