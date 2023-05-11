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

  btn.className = ['button', `button--${size}`, color && `button--${color}`].join(' ');
  return btn;
};
