import '../scss/main.scss';

export enum ButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  XLarge = 'x-large',
}

export type ButtonProps = {
  size: ButtonSize;
  label: string;
  color?: string;
  onClick: () => void;
}

export const createButton = ({
  size,
  color = "",
  label,
  onClick,
}: ButtonProps) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.addEventListener('click', onClick);

  btn.className = ['styled-button', `styled-button--${size}`, color && `styled-button--${color}`].join(' ');
  return btn;
};

class ElmButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const { size, color, label, onClick } = this.getAttribute('props');
    const btn = createButton({ size, color, label, onClick });
    this.shadowRoot.appendChild(btn);
  }
}

customElements.define('elm-button', ElmButton);