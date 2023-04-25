import '../scss/main.scss';

export const createButton = ({
  size,
  color = "",
  label,
  onClick,
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.addEventListener('click', onClick);

  btn.className = ['button', `button--${size}`, color && `button--${color}`].join(' ');
  return btn;
};
