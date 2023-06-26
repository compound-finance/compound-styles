import '../scss/main.scss';

export class WebButton extends HTMLElement {
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
    this.render();
  }

  // we re-render anytime an attribute value changes, regardless of which attribute (name)
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  render() {
    const label = this.getAttribute('label') || "";
    const color = this.getAttribute('color') || 'grey';

    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
        }
        button,
        .styled-button {
          align-items: center;
          background-color: #{$neutral--80};
          border: 0.5px solid #{$neutral--80};
          border-radius: 3.625rem;
          color: ${color};
          cursor: pointer;
          display: flex;
          justify-content: center;
          padding: 0.84375rem 0;
          font-size: 0.6875rem;
          font-style: normal;
          font-weight: 500;
          line-height: 1rem;
          transition: background-color 0.25s ease, height 0.25s ease;
          min-width: 6.45rem;
        
          .label {
            cursor: pointer;
            pointer-events: inherit;
          }
        
          &--small {
            padding: 0.5rem 1rem;
            min-width: unset;
          }
        
          &--large {
            padding: 0rem 1rem;
            height: 2.75rem;
          }
        
          &--x-large {
            border-radius: 100px;
            font-size: 0.8125rem;
            font-weight: 500;
            line-height: 1.125rem;
            padding: 1.1875rem 0;
            width: 100%;
          }
        
          &:disabled {
            background-color: #{$neutral--95};
            border: 0.5px solid #{$neutral--95};
            color: #{$neutral--60};
            cursor: auto;
        
            .label {
              cursor: auto;
              pointer-events: inherit;
            }
          }
        
          &:not(:disabled) {
            &:hover {
              filter: brightness(90%);
            }
        
            &:active {
              filter: brightness(85%);
            }
          }
        
          &+& {
            margin-left: 1rem;
          }
        }
        
        .theme--light {
          .button--large {
            border-color: transparent;
          }
        }
        
      </style>
      <button class="styled-button">${label}</button>
      `;
    }
  }
}

customElements.define('web-button', WebButton);